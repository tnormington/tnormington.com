/** @jsx jsx */
import * as React from "react"
import { jsx } from "theme-ui"
import Layout from "@lekoarts/gatsby-theme-cara/src/components/layout"
import Footer from "@lekoarts/gatsby-theme-cara/src/components/footer"

type BlogLayoutProps = {
  children: React.ReactNode
}

const BlogLayout = ({ children }: BlogLayoutProps) => (
  <Layout>
    <div
      sx={{
        maxWidth: `780px`,
        mx: `auto`,
        px: [3, 4],
        py: [4, 5],
        minHeight: `100vh`,
      }}
    >
      {children}
    </div>
    <div sx={{ maxWidth: `780px`, mx: `auto`, px: [3, 4], pb: 4 }}>
      <Footer />
    </div>
  </Layout>
)

export default BlogLayout
