class CartPage {

    constructor(page) {
        this.page = page;

        this.pageTitle = page.locator('.title');
        this.cartItems = page.locator('.cart_item');
        this.productNames = page.locator('.inventory_item_name');
        this.quantities = page.locator('.cart_quantity');
        this.removeButtons = page.locator('[data-test^="remove"]');
        this.continueShoppingButton = page.locator('[data-test="continue-shopping"]');
        this.checkoutButton = page.locator('[data-test="checkout"]');
    }

    async getPageTitle() {
        return await this.pageTitle.textContent();
    }

    async getCartItemCount() {
        return await this.cartItems.count();
    }

    async getProductNames() {
        return await this.productNames.allTextContents();
    }

    async getQuantity() {
        return await this.quantities.first().textContent();
    }

    async removeProduct(productName) {
        const product = this.page.locator('.cart_item').filter({
            hasText: productName
        });

        await product.locator('[data-test^="remove"]').click();
    }

    async continueShopping() {
        await this.continueShoppingButton.click();
    }

    async checkout() {
        await this.checkoutButton.click();
    }
}

module.exports = CartPage;