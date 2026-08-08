class CheckoutPage {

    constructor(page) {
        this.page = page;

        this.txtFirstName = page.locator('#first-name');
        this.txtLastName = page.locator('#last-name');
        this.txtPostalCode = page.locator('#postal-code');
        this.btnContinue = page.locator('#continue');
        this.btnFinish = page.locator('#finish');
        this.lblComplete = page.locator('.complete-header');
    }

    async enterCustomerDetails(firstName, lastName, postalCode) {
        await this.txtFirstName.fill(firstName);
        await this.txtLastName.fill(lastName);
        await this.txtPostalCode.fill(postalCode);
    }

    async continueCheckout() {
        await this.btnContinue.click();
    }

    async finishCheckout() {
        await this.btnFinish.click();
    }

    async getConfirmationMessage() {
        return await this.lblComplete.textContent();
    }
}

module.exports = CheckoutPage;