#!/usr/bin/env node
/**
 * 测试报告生成器
 * 用于解析 Playwright JSON 测试结果并生成 Markdown 报告
 */
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = resolve(__dirname, '..');

/**
 * 解析 Playwright JSON 测试报告
 */
function parseReport() {
  const reportPath = resolve(rootDir, 'test-results/results.json');
  
  if (!existsSync(reportPath)) {
    console.error('测试报告文件不存在，请先运行测试: npx playwright test');
    process.exit(1);
  }
  
  const raw = readFileSync(reportPath, 'utf-8');
  return JSON.parse(raw);
}

/**
 * 生成 Markdown 格式的测试报告
 */
function generateMarkdownReport(report) {
  const totalTests = report.suites.reduce((count, suite) => {
    if (suite.suites) return count; // 套件层级不计数
    return count + (suite.tests?.length || 0);
  }, 0);
  
  const passedTests = report.suites.reduce((count, suite) => {
    return count + (suite.tests?.filter(t => t.ok).length || 0);
  }, 0);
  
  const failedTests = totalTests - passedTests;
  
  const timestamp = new Date().toISOString();
  
  let md = `# 🧪 博客自动化测试报告\n\n`;
  md += `## 概述\n\n`;
  md += `- **生成时间**: ${timestamp}\n`;
  md += `- **总测试数**: ${totalTests}\n`;
  md += `- ✅ 通过: ${passedTests}\n`;
  md += `- ❌ 失败: ${failedTests}\n`;
  md += `- 通过率: ${totalTests > 0 ? Math.round((passedTests / totalTests) * 100) : 0}%\n\n`;
  md += `---\n\n`;
  
  // 详细测试结果
  md += `## 测试详情\n\n`;
  
  function processSuite(suite, depth = 0) {
    const indent = '  '.repeat(depth);
    const title = suite.title || '根套件';
    
    if (suite.suites) {
      md += `${indent}### ${title}\n\n`;
      for (const childSuite of suite.suites) {
        processSuite(childSuite, depth + 1);
      }
    }
    
    if (suite.tests) {
      for (const test of suite.tests) {
        const status = test.ok ? '✅' : '❌';
        const duration = test.duration > 0 ? `${test.duration}ms` : 'N/A';
        const annotation = test.annotations?.map(a => `\`${a.type}\``).join(', ') || '';
        
        md += `${indent}- ${status} **${test.title}** - ${duration}${annotation ? ' ' + annotation : ''}\n`;
        
        if (!test.ok && test.errors?.length > 0) {
          md += `${indent}  - **错误信息**: ${test.errors[0].message?.split('\n')[0] || '未知错误'}\n`;
        }
      }
    }
  }
  
  for (const suite of report.suites) {
    processSuite(suite, 0);
  }
  
  // 总结
  md += `\n---\n\n`;
  md += `## 测试结果总结\n\n`;
  if (failedTests === 0) {
    md += `🎉 **所有测试通过！**\n\n`;
    md += `博客项目通过了全部自动化测试，包括首页渲染、导航功能、文章页面和响应式设计等测试用例。\n\n`;
  } else {
    md += `⚠️ **有 ${failedTests} 个测试失败**，请检查上述测试结果详情。\n\n`;
  }
  
  md += `---\n\n`;
  md += `*本报告由 Playwright 自动化测试框架生成*\n`;
  
  return md;
}

/**
 * 主函数
 */
async function main() {
  try {
    console.log('🔄 正在解析测试报告...');
    const report = parseReport();
    
    console.log('📝 正在生成 Markdown 报告...');
    const markdownReport = generateMarkdownReport(report);
    
    const outputPath = resolve(rootDir, 'test-results/TEST_REPORT.md');
    writeFileSync(outputPath, markdownReport, 'utf-8');
    
    console.log(`✅ 测试报告已生成: ${outputPath}`);
    console.log('\n' + markdownReport);
    
  } catch (error) {
    console.error('❌ 生成报告时出错:', error.message);
    process.exit(1);
  }
}

main();
