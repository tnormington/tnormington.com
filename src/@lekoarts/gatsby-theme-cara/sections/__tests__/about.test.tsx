import React from "react"
import { render } from "@testing-library/react"
import * as fs from "fs"
import * as path from "path"

describe("About MDX Section - DOM Properties", () => {
  const aboutMdxPath = path.join(__dirname, "../about.mdx")

  it("should not contain 'class' attributes (should use 'className' instead)", () => {
    // Read the MDX file content
    const mdxContent = fs.readFileSync(aboutMdxPath, "utf-8")

    // Check for 'class=' in the content (which would be incorrect for React/JSX)
    const classMatches = mdxContent.match(/\sclass=/g)

    // Assert that no 'class=' attributes are found
    expect(classMatches).toBeNull()

    // Verify that 'className=' is used instead
    const classNameMatches = mdxContent.match(/\sclassName=/g)
    expect(classNameMatches).not.toBeNull()
    expect(classNameMatches!.length).toBeGreaterThan(0)
  })

  it("should use className for all div elements", () => {
    const mdxContent = fs.readFileSync(aboutMdxPath, "utf-8")

    // Extract all div opening tags
    const divTags = mdxContent.match(/<div[^>]*>/g) || []

    // Check each div tag
    divTags.forEach((tag) => {
      // If the div has attributes, it should use className, not class
      if (tag.includes("=")) {
        expect(tag).not.toMatch(/\sclass=/)
        if (tag.includes('class')) {
          // If 'class' appears, it should be 'className'
          expect(tag).toMatch(/className=/)
        }
      }
    })
  })

  it("should have the correct className attributes in place", () => {
    const mdxContent = fs.readFileSync(aboutMdxPath, "utf-8")

    // Verify specific classNames are present
    expect(mdxContent).toContain('className="about-wrapper"')
    expect(mdxContent).toContain('className="about-portrait-wrapper"')
    expect(mdxContent).toContain('className="about-content"')
  })

  it("should render a test component with className without warnings", () => {
    let consoleErrorCalled = false
    const originalError = console.error

    // Spy on console.error
    console.error = (...args: any[]) => {
      const message = args[0]?.toString() || ""
      if (message.includes("Invalid DOM property") || message.includes("Did you mean `className`")) {
        consoleErrorCalled = true
      }
      originalError.apply(console, args)
    }

    // Test component that mimics the structure in about.mdx
    const TestComponent = () => (
      <div className="about-wrapper">
        <div className="about-portrait-wrapper">
          <img src="/portrait.png" alt="Portrait" />
        </div>
        <div className="about-content">
          <p>Test content</p>
        </div>
      </div>
    )

    const { container } = render(<TestComponent />)

    // Verify no console errors were triggered
    expect(consoleErrorCalled).toBe(false)

    // Verify the elements are rendered correctly
    expect(container.querySelector(".about-wrapper")).toBeInTheDocument()
    expect(container.querySelector(".about-portrait-wrapper")).toBeInTheDocument()
    expect(container.querySelector(".about-content")).toBeInTheDocument()

    // Restore console.error
    console.error = originalError
  })
})
