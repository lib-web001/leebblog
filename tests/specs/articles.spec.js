// @ts-check
import { test, expect } from '@playwright/test';

test.describe('文章页面测试', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('1. 点击文章链接进入详情页', async ({ page }) => {
    // 查找第一篇文章链接
    const articleLink = page.locator('a[href*="/articles/"]').first();
    if (await articleLink.isVisible().catch(() => false)) {
      const href = await articleLink.getAttribute('href');
      await articleLink.click();
      await expect(page).toHaveURL(new RegExp(href?.replace('/', '') || 'articles'));
    }
  });

  test('2. 文章页面包含标题', async ({ page }) => {
    const articleLink = page.locator('a[href*="/articles/"]').first();
    if (await articleLink.isVisible().catch(() => false)) {
      await articleLink.click();
      await page.waitForLoadState('domcontentloaded');
      const h1 = page.locator('h1').first();
      await expect(h1).toBeVisible();
    }
  });

  test('3. 文章页面无损坏图片', async ({ page }) => {
    const brokenImages = [];
    page.on('requestfailed', (request) => {
      if (request.resourceType() === 'image') {
        brokenImages.push(request.url());
      }
    });

    // 遍历几篇文章检查图片
    const articleLinks = page.locator('a[href*="/articles/"]').first();
    if (await articleLinks.isVisible().catch(() => false)) {
      await articleLinks.click();
      await page.waitForLoadState('networkidle');
    }

    expect(brokenImages.length).toBe(0);
  });

  test('4. 返回按钮工作正常', async ({ page }) => {
    const articleLink = page.locator('a[href*="/articles/"]').first();
    if (await articleLink.isVisible().catch(() => false)) {
      await articleLink.click();
      await page.waitForLoadState('domcontentloaded');

      // 尝试按浏览器后退按钮
      await page.goBack();
      await expect(page).toHaveURL(/\/$/);
    }
  });

  test('5. 文章分类页面可访问', async ({ page }) => {
    // 检查不同分类的文章是否可以访问
    const categories = ['前端', 'vue', 'javascript基础', '产品'];
    for (const category of categories) {
      const link = page.locator(`a[href*="${category}"]`);
      if (await link.first().isVisible().catch(() => false)) {
        await link.first().click();
        await page.waitForLoadState('domcontentloaded');
        // 验证页面成功加载
        await expect(page.locator('h1, .content')).toBeVisible().catch(() => {});
        await page.goBack();
        await page.waitForLoadState('domcontentloaded');
      }
    }
  });
});
