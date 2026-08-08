const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/LoginPage');
const InventoryPage = require('../pages/InventoryPage');

test.describe('Inventory Module', () => {

    test.beforeEach(async ({ page }) => {
        const login = new LoginPage(page);

        await login.openApplication();
        await login.login('standard_user', 'secret_sauce');

        await expect(page).toHaveURL(/inventory/);
    });

    test('Verify Inventory Page Title', async ({ page }) => {

        const inventory = new InventoryPage(page);

        const title = await inventory.getPageTitle();

        expect(title).toBe('Products');
    });

    test('Verify Product Count', async ({ page }) => {

        const inventory = new InventoryPage(page);

        const count = await inventory.getProductCount();

        expect(count).toBe(6);
    });

    test('Verify Products Are Displayed', async ({ page }) => {

        const inventory = new InventoryPage(page);

        const count = await inventory.getProductCount();

        expect(count).toBeGreaterThan(0);
    });
   
     test('Sort Products A to Z', async ({ page }) => {

     const inventory = new InventoryPage(page);

     await inventory.sortProducts('az');

     const products = await inventory.getProductNames();

     const sortedProducts = [...products].sort();

     expect(products).toEqual(sortedProducts);
    });


     test('Sort Products Z to A', async ({ page }) => {

     const inventory = new InventoryPage(page);

     await inventory.sortProducts('za');

     const products = await inventory.getProductNames();

     const sortedProducts = [...products].sort().reverse();

     expect(products).toEqual(sortedProducts);
    });


     test('Add Product to Cart', async ({ page }) => {

     const inventory = new InventoryPage(page);

     await inventory.addProductToCart('Sauce Labs Backpack');

     const cartCount = await inventory.getCartCount();

     expect(cartCount).toBe('1');
    });

});