迁移到 Git LFS 使用说明

目的

将仓库中超出 GitHub 文件大小限制的文件 `dist/cleaner.exe`（180MB）迁移到 Git LFS，并重写历史后推送到远端。

风险提示

- 迁移会重写仓库历史，请先通知所有协作者并备份本地仓库。
- GitHub LFS 有空间和带宽配额，确认是否接受。
- 本操作会使用强制推送（force-with-lease），请谨慎。

操作步骤（概要）

1. 备份仓库：脚本会在上级目录生成一个 `.bundle` 备份。
2. 安装 Git LFS：从 https://git-lfs.github.com 安装或使用包管理器。
3. 跟踪文件：`git lfs track "dist/cleaner.exe"` 并提交 `.gitattributes`。
4. 迁移历史：`git lfs migrate import --include="dist/cleaner.exe" --include-ref=refs/heads/main`。
5. 本地清理：`git reflog expire --expire=now --all`，`git gc --prune=now --aggressive`。
6. 强制推送：`git push origin main --force-with-lease`。
7. 协作者重置：通知其他人运行 `git fetch origin` 和 `git reset --hard origin/main`。

脚本

运行 `scripts/migrate-to-git-lfs.ps1`（在仓库根目录）会自动执行上述步骤并处理常见错误提示。

回滚

如果推送后需要回滚，可使用之前生成的 bundle 进行恢复：

```powershell
# 在一个新目录中恢复
git clone path/to/empty/repo restored
cd restored
git pull ../leebblog-backup-YYYYMMDD_HHMMSS.bundle main
```

支持

如果在执行过程中遇到网络或权限问题，请把脚本输出粘贴给我，我会继续协助诊断。
