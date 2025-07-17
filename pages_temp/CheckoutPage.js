class CheckoutPage {
  constructor(page) {
    this.page = page;
    this.firstNameField = page.locator('[data-test="firstName"]');
    this.lastNameField = page.locator('[data-test="lastName"]');
    this.zipCodeField = page.locator('[data-test="postalCode"]');
    this.continueButton = page.locator('[data-test="continue"]');
    this.finishButton = page.locator('[data-test="finish"]');
    this.successHeader = page.locator('.complete-header');
  }

  async fillCheckoutInfo(firstName, lastName, zipCode) {
    await this.firstNameField.fill(firstName);
    await this.lastNameField.fill(lastName);
    await this.zipCodeField.fill(zipCode);
    await this.continueButton.click();
  }

  async completeOrder() {
    await this.finishButton.click();
  }

  async isOrderComplete() {
    return await this.successHeader.textContent();
  }
}

module.exports = { CheckoutPage };
