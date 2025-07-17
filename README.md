# 🧪 Playwright E2E Test Suite

This repo contains a fully working end-to-end test setup using [Playwright](https://playwright.dev) for UI testing.

## 📁 Structure

```
tests/
├── e2e/
│   ├── login.spec.js
│   ├── cart-functionality.spec.js
│   └── checkout.spec.js
├── pages_temp/
│   ├── LoginPage.js
│   ├── InventoryPage.js
│   ├── CartPage.js
│   └── CheckoutPage.js
├── filelayout.txt
├── .gitignore
├── package.json
└── playwright.config.js
```

## 🚀 How to Run

Install dependencies:

```bash
npm install
```

Run tests (headed browser mode):

```bash
npx playwright test --headed
```

## 🧩 Features

- ✅ Page Object Model
- ✅ Functional login, cart, and checkout coverage
- ✅ Works with Chrome, Firefox, and WebKit
- ✅ Readable, modular, and easy to extend

## 👤 Author

Built by [RVAcoder123](https://github.com/RVAcoder123)
