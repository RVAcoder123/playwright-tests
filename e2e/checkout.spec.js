const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages_temp/LoginPage');
const { InventoryPage } = require('../pages_temp/InventoryPage');
const { CartPage } = require('../pages_temp/CartPage');
const { CheckoutPage } = require('../pages_temp/CheckoutPage');

test.describe('Checkout Process', () => {
  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.loginAsStandardUser();
    await expect(page).toHaveURL(/inventory/);
  });

  test('complete checkout successfully', async ({ page }) => {
    const inventoryPage = new InventoryPage(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);

    await inventoryPage.addFirstItemToCart();
    await inventoryPage.goToCart();
    await cartPage.clickCheckout();

    await checkoutPage.fillCheckoutInfo('Gregg', 'Hansen', '23220');
    await checkoutPage.completeOrder();

    const message = await checkoutPage.isOrderComplete();
    expect(message).toContain('Thank you');
  });

  test('missing zip code throws error', async ({ page }) => {
    const inventoryPage = new InventoryPage(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);

    await inventoryPage.addFirstItemToCart();
    await inventoryPage.goToCart();
    await cartPage.clickCheckout();

    await checkoutPage.fillCheckoutInfo('Gregg', 'Hansen', '');
    const error = await page.locator('[data-test="error"]').textContent();
    expect(error).toContain('Error: Postal Code is required');
  });
});
