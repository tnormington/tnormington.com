import type { GatsbyNode } from "gatsby"
import path from "path"

export const createPages: GatsbyNode["createPages"] = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const result = await graphql<{
    allMdx: {
      nodes: Array<{
        id: string
        frontmatter: {
          slug: string
        }
        internal: {
          contentFilePath: string
        }
      }>
    }
  }>(`
    query {
      allMdx(
        filter: { internal: { contentFilePath: { regex: "/content/blog/" } } }
        sort: { frontmatter: { date: DESC } }
      ) {
        nodes {
          id
          frontmatter {
            slug
          }
          internal {
            contentFilePath
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild("Error loading MDX blog posts", result.errors)
    return
  }

  const blogPostTemplate = path.resolve("./src/templates/blog-post.tsx")

  result.data?.allMdx.nodes.forEach((node) => {
    createPage({
      path: `/blog/${node.frontmatter.slug}/`,
      component: `${blogPostTemplate}?__contentFilePath=${node.internal.contentFilePath}`,
      context: {
        id: node.id,
      },
    })
  })
}
