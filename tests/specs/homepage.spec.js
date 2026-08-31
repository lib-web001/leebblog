// @ts-check
import { test, expect } from '@playwright/test';

test.describe('博客首页测试', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('1. 首页应成功加载', async ({ page }) => {
    // 验证页面标题包含博客名称
    await expect(page).toHaveTitle(/飞语/);
  });

  test('2. 首页应显示博客标语', async ({ page }) => {
    // 验证首页 motto 存在
    const motto = page.getByText('记录开发的点点滴滴');
    await expect(motto).toBeVisible();
  });

  test('3. 首页应显示励志语录', async ({ page }) => {
    // 验证 inspiring 区域有内容
    const inspiringTexts = ['我的人生没有敌人全是老师', '永远保持一颗学徒的心'];
    for (const text of inspiringTexts) {
      const element = page.getByText(text);
      await expect(element).toBeVisible();
    }
  });

  test('4. 导航菜单应包含主要链接', async ({ page }) => {
    // 验证导航栏存在且可点击
    const nav = page.locator('nav, .VPNav, header');
    await expect(nav).toBeVisible();
  });

  test('5. 页脚应正常渲染', async ({ page }) => {
    const footer = page.locator('footer, .VPFooter');
    await expect(footer).toBeVisible();
  });

  test('6. 页面应无 404 错误资源', async ({ page }) => {
    const failedRequests = [];
    page.on('requestfailed', (request) => {
      failedRequests.push(request.url());
    });
    await page.waitForLoadState('networkidle');
    expect(failedRequests.length).toBe(0);
  });

  test('7. 首页加载时间合理', async ({ page }) => {
    const startTime = Date.now();
    await page.goto('/');
    await page.waitForLoadState('domcontentloaded');
    const loadTime = Date.now() - startTime;
    expect(loadTime).toBeLessThan(10000); // 10秒内加载完成
  });
});
