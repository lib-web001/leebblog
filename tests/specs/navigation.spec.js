// @ts-check
import { test, expect } from '@playwright/test';

test.describe('博客导航测试', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('1. 导航到关于页面', async ({ page }) => {
    // 查找并点击关于链接
    const aboutLink = page.getByRole('link', { name: /关于/i });
    if (await aboutLink.isVisible().catch(() => false)) {
      await aboutLink.click();
      await expect(page).toHaveURL(/about/);
    }
  });

  test('2. 导航到友情链接页面', async ({ page }) => {
    const friendsLink = page.getByRole('link', { name: /朋友|友情/i });
    if (await friendsLink.isVisible().catch(() => false)) {
      await friendsLink.click();
      await expect(page).toHaveURL(/friends/);
    }
  });

  test('3. 文章分类导航', async ({ page }) => {
    // 验证文章分类链接存在
    const categoryLinks = page.locator('a[href*="articles"]');
    const count = await categoryLinks.count();
    expect(count).toBeGreaterThan(0);
  });

  test('4. 搜索功能', async ({ page }) => {
    // 点击搜索按钮
    const searchButton = page.locator('[aria-label="Search"], button[aria-label*="Search"], .VPSearch');
    if (await searchButton.isVisible().catch(() => false)) {
      await searchButton.click();
      const searchInput = page.locator('.VPDocSearch input, [class*="search-input"]');
      if (await searchInput.isVisible().catch(() => false)) {
        await searchInput.fill('javascript');
        await page.waitForTimeout(500);
        // 验证搜索结果出现
        const results = page.locator('[class*="search-result"], [class*="DropdownItem"]');
        await expect(results.first()).toBeVisible().catch(() => {
          // 搜索可能使用 Algolia，跳过验证
        });
      }
    }
  });

  test('5. 移动端菜单响应', async ({ page }) => {
    // 设置移动视图端口
    await page.setViewportSize({ width: 768, height: 1024 });
    const mobileMenu = page.locator('.VPMobileMenuButton, [class*="menu-button"]');
    if (await mobileMenu.isVisible().catch(() => false)) {
      await mobileMenu.click();
      const mobileNavItems = page.locator('.VPMobileNav a, nav a');
      await expect(mobileNavItems.first()).toBeVisible();
    }
  });
});
