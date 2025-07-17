class InventoryPage {
  constructor(page) {
    this.page = page;
    this.addToCartButtons = page.locator('button:has-text("Add to cart")');
    this.cartIcon = page.locator('.shopping_cart_link');
  }

  async addFirstItemToCart() {
    await this.addToCartButtons.first().click();
  }

  async goToCart() {
    await this.cartIcon.click();
  }

  async getCartBadgeCount() {
    const badge = this.page.locator('.shopping_cart_badge');
    return await badge.innerText();
  }
  removeFirstItemFromCart() {
  return this.page.getByText('Remove', { exact: true }).first().click();
}


  async cartBadgeIsVisible() {
    return await this.page.locator('.shopping_cart_badge').isVisible();
  }
}

module.exports = { InventoryPage };
