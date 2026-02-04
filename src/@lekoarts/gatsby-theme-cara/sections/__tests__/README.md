# Test Suite for Gatsby Theme Components

This directory contains tests for the Gatsby theme components to ensure they follow React best practices and catch common errors.

## Running Tests

```bash
# Run all tests
npm test

# Run tests in watch mode (re-runs on file changes)
npm run test:watch
```

## What These Tests Do

### DOM Property Validation

The `about.test.tsx` file validates that MDX files use correct React/JSX syntax:

1. **Checks for invalid `class` attributes**: Ensures `className` is used instead of `class` (React/JSX requirement)
2. **Validates file syntax**: Scans MDX files for common React antipatterns
3. **Renders test components**: Verifies that components render without console warnings
4. **Regression prevention**: Catches these errors before they reach production

## Why This Matters

React uses `className` instead of `class` for CSS classes because `class` is a reserved keyword in JavaScript. Using `class` in JSX/MDX files will:

- Generate console warnings in development
- Potentially cause issues in production
- Fail accessibility audits
- Create inconsistent styling behavior

## Adding New Tests

To test additional MDX files or components:

1. Create a new test file in this directory (e.g., `intro.test.tsx`)
2. Import the component or read the MDX file
3. Use the patterns from `about.test.tsx` as a template
4. Run `npm test` to verify your tests work

## Test Infrastructure

The test setup includes:

- **Jest**: JavaScript testing framework
- **React Testing Library**: For rendering and testing React components
- **@testing-library/jest-dom**: Custom matchers for DOM assertions
- **babel-preset-gatsby**: Ensures Gatsby-specific code transforms work in tests

## Configuration Files

- `jest.config.js`: Main Jest configuration
- `jest-preprocess.js`: Babel transformation setup
- `setup-test-env.js`: Global test environment setup
- `__mocks__/`: Mock implementations for file imports
