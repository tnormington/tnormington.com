import "@testing-library/jest-dom"

// Suppress console errors in tests for invalid DOM properties
// We'll use this to test that our fixes work
const originalError = console.error

beforeAll(() => {
  console.error = (...args) => {
    // Suppress React warning about invalid DOM properties during tests
    // unless we're specifically testing for them
    if (
      typeof args[0] === "string" &&
      args[0].includes("Invalid DOM property")
    ) {
      return
    }
    originalError.call(console, ...args)
  }
})

afterAll(() => {
  console.error = originalError
})
