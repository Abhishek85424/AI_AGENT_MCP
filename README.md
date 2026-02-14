# AI Agent Playwright Project

A Playwright-based automated testing framework for the AI Agent project.

## Prerequisites

- Node.js 16+ installed
- npm or yarn package manager

## Installation

Install dependencies:

```bash
npm install
```

## Running Tests

### Run all tests
```bash
npm test
```

### Run tests in UI mode
```bash
npm run test:ui
```

### Run tests in debug mode
```bash
npm run test:debug
```

### Run tests in headed mode (see browser)
```bash
npm run test:headed
```

### Generate tests with Codegen
```bash
npm run codegen
```

## Project Structure

```
.
├── tests/                 # Test files
│   └── example.spec.ts   # Example test file
├── playwright.config.ts   # Playwright configuration
├── tsconfig.json         # TypeScript configuration
├── package.json          # Project dependencies
└── README.md            # This file
```

## Configuration

The Playwright configuration is defined in `playwright.config.ts`. You can modify:

- Test directory path
- Browser selection (Chromium, Firefox, WebKit)
- Parallelization settings
- Trace and video recording
- Base URL for tests

## Writing Tests

Tests should be created in the `tests/` directory with `.spec.ts` extension.

Example test:
```typescript
import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev');
  await expect(page).toHaveTitle(/Playwright/);
});
```

## Reporting

After running tests, view the HTML report:

```bash
npx playwright show-report
```

## Browser Support

- Chromium
- Firefox
- WebKit (Safari)

## Documentation

For more information, visit the [Playwright documentation](https://playwright.dev).
