const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { InventoryPage } = require('../pages/InventoryPage');
const { CartPage } = require('../pages/CartPage');

test.describe('Cart Functionality', () => {
  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.loginAsStandardUser();
    await expect(page).toHaveURL(/inventory/);
  });

  test('add item to cart and verify badge', async ({ page }) => {
    const inventoryPage = new InventoryPage(page);
    const cartPage = new CartPage(page);

    await inventoryPage.addFirstItemToCart();
    await expect(cartPage.cartBadge).toHaveText('1');
  });

  test('remove item from cart and verify badge disappears', async ({ page }) => {
    const inventoryPage = new InventoryPage(page);
    const cartPage = new CartPage(page);

    await inventoryPage.addFirstItemToCart();
    await inventoryPage.removeFirstItemFromCart();
    await expect(cartPage.cartBadge).toHaveCount(0);
  });

  test('go to cart and verify item is listed', async ({ page }) => {
    const inventoryPage = new InventoryPage(page);
    const cartPage = new CartPage(page);

    await inventoryPage.addFirstItemToCart();
    await inventoryPage.goToCart();
    await expect(await cartPage.itemCount()).toBe(1);
  });
});
