const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/LoginPage');
const InventoryPage = require('../pages/InventoryPage');
const CartPage = require('../pages/CartPage');

test.describe('Cart Module', () => {

    test.beforeEach(async ({ page }) => {

        const login = new LoginPage(page);

        await login.openApplication();
        await login.login('standard_user', 'secret_sauce');

        await expect(page).toHaveURL(/inventory/);
    });


    test('Verify Cart Page Title', async ({ page }) => {

        const inventory = new InventoryPage(page);
        const cart = new CartPage(page);

        await inventory.addProductToCart('Sauce Labs Backpack');

        await page.locator('.shopping_cart_link').click();

        const title = await cart.getPageTitle();

        expect(title).toBe('Your Cart');
    });


    test('Verify Added Product Appears in Cart', async ({ page }) => {

        const inventory = new InventoryPage(page);
        const cart = new CartPage(page);

        await inventory.addProductToCart('Sauce Labs Backpack');

        await page.locator('.shopping_cart_link').click();

        const products = await cart.getProductNames();

        expect(products).toContain('Sauce Labs Backpack');
    });


    test('Verify Cart Quantity', async ({ page }) => {

        const inventory = new InventoryPage(page);
        const cart = new CartPage(page);

        await inventory.addProductToCart('Sauce Labs Backpack');

        await page.locator('.shopping_cart_link').click();

        const quantity = await cart.getQuantity();

        expect(quantity).toBe('1');
    });


    test('Remove Product from Cart', async ({ page }) => {

        const inventory = new InventoryPage(page);
        const cart = new CartPage(page);

        await inventory.addProductToCart('Sauce Labs Backpack');

        await page.locator('.shopping_cart_link').click();

        await cart.removeProduct('Sauce Labs Backpack');

        const itemCount = await cart.getCartItemCount();

        expect(itemCount).toBe(0);
    });


    test('Verify Multiple Products in Cart', async ({ page }) => {

        const inventory = new InventoryPage(page);
        const cart = new CartPage(page);

        await inventory.addProductToCart('Sauce Labs Backpack');
        await inventory.addProductToCart('Sauce Labs Bike Light');

        await page.locator('.shopping_cart_link').click();

        const itemCount = await cart.getCartItemCount();

        expect(itemCount).toBe(2);
    });


    test('Continue Shopping from Cart', async ({ page }) => {

        const inventory = new InventoryPage(page);
        const cart = new CartPage(page);

        await inventory.addProductToCart('Sauce Labs Backpack');

        await page.locator('.shopping_cart_link').click();

        await cart.continueShopping();

        await expect(page).toHaveURL(/inventory/);
    });

});