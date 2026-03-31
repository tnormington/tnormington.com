/** @jsx jsx */
import * as React from "react"
import { jsx, get } from "theme-ui"
import { Link } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { Global } from "@emotion/react"
import MdxComponents from "./mdx-components"

type LayoutProps = { children: React.ReactNode; className?: string }

const Layout = ({ children, className = `` }: LayoutProps) => (
  <React.Fragment>
    <Global
      styles={(t) => ({
        "*": {
          boxSizing: `inherit`,
          "&:before": {
            boxSizing: `inherit`,
          },
          "&:after": {
            boxSizing: `inherit`,
          },
        },
        "[hidden]": {
          display: `none`,
        },
        "::selection": {
          backgroundColor: get(t, `colors.primary`),
          color: get(t, `colors.background`),
        },
      })}
    />
    <MDXProvider components={MdxComponents}>
      {/* Fixed icon links in top right */}
      <div
        sx={{
          position: `fixed`,
          top: [3, 4],
          right: [3, 4],
          zIndex: 100,
          display: `flex`,
          gap: 3,
        }}
      >
        <Link
          to="/blog/"
          aria-label="Blog"
          sx={{
            color: `text`,
            opacity: 0.7,
            transition: `all 0.2s ease`,
            "&:hover": {
              opacity: 1,
              color: `primary`,
            },
          }}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/>
          </svg>
        </Link>
        <a
          href="https://github.com/tnormington"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="GitHub Profile"
          sx={{
            color: `text`,
            opacity: 0.7,
            transition: `all 0.2s ease`,
            "&:hover": {
              opacity: 1,
              color: `primary`,
            },
          }}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
          </svg>
        </a>
        <a
          href="https://music.tnormington.com"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Guitar Lessons"
          sx={{
            color: `text`,
            opacity: 0.7,
            transition: `all 0.2s ease`,
            "&:hover": {
              opacity: 1,
              color: `primary`,
            },
          }}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9 18V5l12-2v13"/>
            <circle cx="6" cy="18" r="3"/>
            <circle cx="18" cy="16" r="3"/>
          </svg>
        </a>
        <a
          href="mailto:tim.j.normington@gmail.com"
          aria-label="Send Email"
          sx={{
            color: `text`,
            opacity: 0.7,
            transition: `all 0.2s ease`,
            "&:hover": {
              opacity: 1,
              color: `primary`,
            },
          }}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="2" y="4" width="20" height="16" rx="2"/>
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
          </svg>
        </a>
      </div>
      <main className={className}>{children}</main>
    </MDXProvider>
  </React.Fragment>
)

export default Layout
