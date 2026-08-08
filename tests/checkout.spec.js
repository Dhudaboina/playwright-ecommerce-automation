const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/LoginPage');
const InventoryPage = require('../pages/InventoryPage');
const CartPage = require('../pages/CartPage');
const CheckoutPage = require('../pages/CheckoutPage');

test.describe('Checkout Module', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('https://www.saucedemo.com/');

        await page.locator('#user-name').fill('standard_user');
        await page.locator('#password').fill('secret_sauce');
        await page.locator('#login-button').click();

        await page.locator('.inventory_item').first()
            .locator('button').click();

        await page.locator('.shopping_cart_link').click();
        await page.locator('#checkout').click();
    });

    test('Complete Checkout Successfully', async ({ page }) => {

        const checkout = new CheckoutPage(page);

        await checkout.enterCustomerDetails(
            'Vamsi',
            'Krishna',
            '500001'
        );

        await checkout.continueCheckout();

        await checkout.finishCheckout();

        const message = await checkout.getConfirmationMessage();

        expect(message).toContain('Thank you for your order');
    });

});