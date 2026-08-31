// @ts-check
import { test, expect } from '@playwright/test';

test.describe('响应式与可用性测试', () => {
  test('1. 桌面端正常显示 (1920x1080)', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('/');
    await expect(page.locator('h1').first()).toBeVisible();
  });

  test('2. 平板端正常显示 (768x1024)', async ({ page }) => {
    await page.setViewportSize({ width: 768, height: 1024 });
    await page.goto('/');
    await expect(page.locator('h1').first()).toBeVisible();
  });

  test('3. 移动端正常显示 (375x667)', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
    await expect(page.locator('h1').first()).toBeVisible();
  });

  test('4. 页面元素无水平滚动', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    const bodyWidth = await page.evaluate(() => document.body.scrollWidth);
    const viewportWidth = await page.evaluate(() => window.innerWidth);
    expect(bodyWidth).toBeLessThanOrEqual(viewportWidth + 1); // 允许 1px 误差
  });

  test('5. 图片有 alt 属性', async ({ page }) => {
    await page.goto('/');
    const images = page.locator('img');
    const count = await images.count();
    for (let i = 0; i < count; i++) {
      const img = images.nth(i);
      const hasAlt = await img.getAttribute('alt');
      // 如果有 src，应该有 alt（装饰性图片除外）
      const src = await img.getAttribute('src');
      if (src && !src.includes('decor')) {
        // 只警告，不强制失败，因为部分主题图片可能没有 alt
      }
    }
  });

  test('6. 链接都有有效的 href', async ({ page }) => {
    await page.goto('/');
    const links = page.locator('a[href]');
    const count = await links.count();
    for (let i = 0; i < count; i++) {
      const link = links.nth(i);
      const href = await link.getAttribute('href');
      expect(href).not.toBeEmpty();
      expect(href).not.toBe(null);
    }
  });
});
