# 🎭 Playwright E-Commerce Automation Framework

An end-to-end web automation framework built with **Playwright and JavaScript**, following the **Page Object Model (POM)** design pattern.

The framework automates key e-commerce user journeys including **Login, Inventory, Cart, and Checkout**.

## 🚀 Project Overview

This project was created to practice and demonstrate real-world UI automation concepts using Playwright.

The framework focuses on:

* Maintainable automation code using Page Object Model
* Reusable page methods
* Data-driven testing
* Playwright locators and assertions
* Test hooks
* Parallel test execution
* HTML test reporting
* Git and GitHub version control
* Cross-browser test configuration

## 🛠️ Tech Stack

| Technology      | Purpose                 |
| --------------- | ----------------------- |
| Playwright      | Web UI automation       |
| JavaScript      | Programming language    |
| Node.js         | Runtime environment     |
| Playwright Test | Test execution          |
| Git             | Version control         |
| GitHub          | Source code management  |
| VS Code         | Development environment |

## 🏗️ Framework Design

The project follows the **Page Object Model (POM)** approach.

```text
Test Specifications
       │
       ▼
 Page Object Classes
       │
       ├── LoginPage
       ├── InventoryPage
       ├── CartPage
       └── CheckoutPage
       │
       ▼
    E-Commerce
    Application
```

## 📁 Project Structure

```text
playwright-ecommerce-automation/
│
├── .github/
│   └── workflows/
│
├── pages/
│   ├── LoginPage.js
│   ├── InventoryPage.js
│   ├── CartPage.js
│   └── CheckoutPage.js
│
├── tests/
│   ├── login.spec.js
│   ├── inventory.spec.js
│   ├── cart.spec.js
│   └── checkout.spec.js
│
├── test-data/
│   └── loginData.js
│
├── utils/
│
├── .gitignore
├── package.json
├── package-lock.json
├── playwright.config.js
└── README.md
```

## 🧪 Test Coverage

### 🔐 Login Module

Automated scenarios include:

* Valid login
* Invalid password
* Invalid username
* Empty username
* Empty password

### 📦 Inventory Module

Automated scenarios include:

* Verify Inventory page title
* Verify product count
* Verify products are displayed
* Sort products A → Z
* Sort products Z → A
* Add product to cart

### 🛒 Cart Module

Automated scenarios include:

* Verify Cart page title
* Verify added product appears in cart
* Verify product quantity
* Remove product from cart
* Verify multiple products in cart
* Continue shopping from Cart

### 💳 Checkout Module

Automated scenarios include:

* Enter customer details
* Continue checkout
* Complete checkout
* Verify order confirmation

## 📊 Current Automation Status

| Module    | Test Cases | Status      |
| --------- | ---------: | ----------- |
| Login     |          5 | ✅ Completed |
| Inventory |          6 | ✅ Completed |
| Cart      |          6 | ✅ Completed |
| Checkout  |         1+ | ✅ Completed |
| **Total** |    **18+** | ✅ Passing   |

> The test suite has been executed successfully with 18+ automated tests.

## ✨ Framework Features

### Page Object Model

Page-specific locators and reusable actions are maintained separately from test specifications.

### Data-Driven Testing

Login scenarios use external test data to execute multiple scenarios using reusable test logic.

### Reusable Methods

Common actions such as login, product selection, cart operations, and checkout actions are encapsulated inside page classes.

### Test Hooks

`beforeEach` hooks are used where applicable to prepare the test state before execution.

### Parallel Execution

Playwright Test supports parallel execution using multiple workers to reduce overall execution time.

### HTML Reporting

Playwright's built-in HTML reporter can be used to analyze test execution results.

### Cross-Browser Testing

The Playwright configuration supports browser-based execution including:

* Chromium
* Firefox
* WebKit

## 🚀 Getting Started

### Prerequisites

Install the following:

* Node.js
* Git
* Visual Studio Code

### Clone the Repository

```bash
git clone https://github.com/Dhudaboina/playwright-ecommerce-automation.git
```

Navigate to the project:

```bash
cd playwright-ecommerce-automation
```

### Install Dependencies

```bash
npm install
```

Install Playwright browsers:

```bash
npx playwright install
```

## ▶️ Run Tests

### Run all tests

```bash
npx playwright test
```

### Run Login tests

```bash
npx playwright test tests/login.spec.js
```

### Run Inventory tests

```bash
npx playwright test tests/inventory.spec.js
```

### Run Cart tests

```bash
npx playwright test tests/cart.spec.js
```

### Run Checkout tests

```bash
npx playwright test tests/checkout.spec.js
```

### Run tests in headed mode

```bash
npx playwright test --headed
```

## 🌐 Run a Specific Browser

### Chromium

```bash
npx playwright test --project=chromium
```

### Firefox

```bash
npx playwright test --project=firefox
```

### WebKit

```bash
npx playwright test --project=webkit
```

## 📊 HTML Test Report

After test execution, open the Playwright HTML report:

```bash
npx playwright show-report
```

The report provides test execution details including:

* Passed tests
* Failed tests
* Execution duration
* Test errors
* Test steps and debugging information when configured

## 🔄 Git Workflow

The project is maintained using Git and GitHub.

Typical workflow:

```bash
git status
git add .
git commit -m "Add automation changes"
git push
```

## ⚙️ CI/CD

The repository contains a GitHub Actions workflow under:

```text
.github/workflows/
```

The workflow can be used to execute Playwright tests automatically through GitHub Actions.

Further CI improvements can include:

* Running tests on every push
* Pull request validation
* Multi-browser execution
* Automated test reports

## 🎯 Future Enhancements

* [ ] Expand checkout negative scenarios
* [ ] Add additional test data management
* [ ] Add reusable Playwright fixtures
* [ ] Add custom utility methods
* [ ] Configure screenshots on failure
* [ ] Configure trace collection
* [ ] Add Smoke and Regression test tags
* [ ] Improve GitHub Actions CI/CD pipeline
* [ ] Add environment-specific configuration
* [ ] Expand automation coverage to 25+ test cases

## 📚 Key Learning Outcomes

This project demonstrates practical experience with:

* Playwright automation
* JavaScript
* Page Object Model
* Locators
* Assertions
* Test hooks
* Data-driven testing
* Parallel execution
* HTML reporting
* Cross-browser testing
* Git
* GitHub
* Basic CI/CD concepts

## 👨‍💻 Author

**Dhudaboina**

QA / Test Automation Engineer

GitHub: https://github.com/Dhudaboina

## ⭐ Project Status

**Active learning and automation project**

The framework is continuously being enhanced with additional test scenarios, reusable components, reporting, and CI/CD capabilities.
