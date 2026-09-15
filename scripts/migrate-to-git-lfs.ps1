# Git LFS 迁移脚本 — 将 dist/cleaner.exe 迁移到 Git LFS 并强制推送
# 使用：在仓库根目录（d:\my-blog）以 PowerShell 管理员或普通用户运行：
# .\scripts\migrate-to-git-lfs.ps1

Function Abort($msg){ Write-Error $msg; exit 1 }

# 1. 基础检查
if (-not (Get-Command git -ErrorAction SilentlyContinue)) { Abort 'git 未安装或未在 PATH 中。' }
if (-not (Get-Command git-lfs -ErrorAction SilentlyContinue)) { Abort 'git-lfs 未安装。请先安装 git-lfs（https://git-lfs.github.com/）。' }

# 2. 备份当前仓库到 bundle（安全保留）
$timestamp = (Get-Date).ToString('yyyyMMdd_HHmmss')
$bundlePath = "..\leebblog-backup-$timestamp.bundle"
Write-Host "创建仓库 bundle 备份到：$bundlePath"
& git bundle create $bundlePath --all
if ($LASTEXITCODE -ne 0) { Abort '创建 bundle 备份失败，停止。' }

# 3. 跟踪目标大文件并提交 .gitattributes（如果尚未）
Write-Host '添加 LFS 跟踪规则并提交 .gitattributes（如果需要）...'
& git lfs track "dist/cleaner.exe"
if ($LASTEXITCODE -ne 0) { Abort 'git lfs track 失败' }

if (& git status --porcelain | Select-String ".gitattributes") {
  & git add .gitattributes
  & git commit -m "chore: track dist/cleaner.exe with git-lfs"
  if ($LASTEXITCODE -ne 0) { Write-Host '提交 .gitattributes 失败（可能已存在或无变化）。' }
} else {
  Write-Host '.gitattributes 未变更，无需提交。'
}

# 4. 把历史中的该文件迁移到 LFS（会重写历史）
Write-Host '开始迁移历史到 LFS（仅 main 分支），这会重写历史。请确保已备份并知会协作者。'
Write-Host '命令： git lfs migrate import --include="dist/cleaner.exe" --include-ref=refs/heads/main'

# 执行迁移
& git lfs migrate import --include="dist/cleaner.exe" --include-ref=refs/heads/main
if ($LASTEXITCODE -ne 0) { Abort 'git lfs migrate import 失败' }

# 5. 清理与本地验证
Write-Host '执行 GC 并验证 LFS 管理文件列表...'
& git reflog expire --expire=now --all
& git gc --prune=now --aggressive

Write-Host '当前由 LFS 管理的文件：'
& git lfs ls-files
if ($LASTEXITCODE -ne 0) { Write-Host 'git lfs ls-files 未列出任何内容（可能没有）。' }

# 6. 解决常见网络问题（可选配置）
Write-Host '将 Git HTTP 版本设置为 HTTP/1.1 以减少 HTTP2 问题（可选）'
& git config --global http.version HTTP/1.1

# 7. 推送到远端（重写远端历史）
Write-Host '强制推送到远端（会重写远端 main）。正在推送...'
& git push origin main --force-with-lease
if ($LASTEXITCODE -ne 0) {
  Write-Host '首次 HTTPS 推送失败，尝试提示性输出并提供 SSH 方案：'
  Write-Host '请检查上面的错误输出以获取详细信息。'
  Write-Host "你可以尝试切换到 SSH 并重试："
  Write-Host "git remote set-url origin git@github.com:lib-web001/leebblog.git"
  Write-Host "git push origin main --force-with-lease"
  Abort '推送失败，请按输出检查网络/权限或切换到 SSH。'
}

Write-Host '推送成功。请通知协作者：仓库历史已被重写，建议其重新 clone 或运行：'
Write-Host 'git fetch origin'
Write-Host 'git reset --hard origin/main'

Write-Host '迁移完成。若需要我生成协作通知模板（邮件/聊天），告诉我即可。'

