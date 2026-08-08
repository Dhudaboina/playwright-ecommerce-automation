class LoginPage {
    constructor(page) {
        this.page = page;

        this.txtUsername = page.locator('#user-name');
        this.txtPassword = page.locator('#password');
        this.btnLogin = page.locator('#login-button');
        this.lblError = page.locator('[data-test="error"]');
    }

    async openApplication() {
        await this.page.goto('https://www.saucedemo.com/');
    }

    async login(username, password) {
        await this.txtUsername.fill(username);
        await this.txtPassword.fill(password);
        await this.btnLogin.click();
    }

    async getErrorMessage() {
        return await this.lblError.textContent();
    }
}

module.exports = LoginPage;