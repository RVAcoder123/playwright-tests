class CartPage {
  constructor(page) {
    this.page = page;
    this.cartBadge = page.locator('.shopping_cart_badge');
    this.cartLink = page.locator('.shopping_cart_link');
    this.checkoutButton = page.getByText('Checkout', { exact: true });
  }

  async clickCheckout() {
    await this.checkoutButton.click();
  }

  async itemCount() {
    return await this.page.locator('.cart_item').count();
  }
}

module.exports = { CartPage };
