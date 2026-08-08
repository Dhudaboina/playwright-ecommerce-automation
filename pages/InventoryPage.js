class InventoryPage {
    constructor(page) {
        this.page = page;

        this.pageTitle = page.locator('.title');
        this.products = page.locator('.inventory_item');
        this.productNames = page.locator('.inventory_item_name');
        this.sortDropdown = page.locator('.product_sort_container');
        this.cartBadge = page.locator('.shopping_cart_badge');
    }

    async getPageTitle() {
        return await this.pageTitle.textContent();
    }

    async getProductCount() {
        return await this.products.count();
    }

    async sortProducts(option) {
        await this.sortDropdown.selectOption(option);
    }

    async getProductNames() {
        return await this.productNames.allTextContents();
    }

    async addProductToCart(productName) {
        const product = this.page.locator('.inventory_item').filter({
            hasText: productName
        });

        await product.locator('button').click();
    }

    async getCartCount() {
        return await this.cartBadge.textContent();
    }
}

module.exports = InventoryPage;
