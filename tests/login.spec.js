const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/LoginPage');
const loginData = require('../test-data/loginData');

loginData.forEach((data) => {

    test(data.testName, async ({ page }) => {

        const login = new LoginPage(page);

        await login.openApplication();
        await login.login(data.username, data.password);

        if (data.expected === "success") {
            await expect(page).toHaveURL(/inventory/);
        } else {
            await expect(page.locator('[data-test="error"]')).toBeVisible();
        }

    });

});