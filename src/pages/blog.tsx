/** @jsx jsx */
import { jsx } from "theme-ui"
import { graphql, Link, HeadFC, PageProps } from "gatsby"
import BlogLayout from "../components/blog-layout"
import Seo from "@lekoarts/gatsby-theme-cara/src/components/seo"

type DataProps = {
  allMdx: {
    nodes: Array<{
      id: string
      frontmatter: {
        title: string
        date: string
        description: string
        slug: string
      }
    }>
  }
}

const BlogIndex = ({ data }: PageProps<DataProps>) => {
  const posts = data.allMdx.nodes

  return (
    <BlogLayout>
      <Link
        to="/"
        sx={{
          color: `primary`,
          fontSize: 1,
          mb: 4,
          display: `inline-block`,
          textDecoration: `none`,
          "&:hover": { textDecoration: `underline` },
        }}
      >
        &larr; Home
      </Link>
      <h1 sx={{ color: `heading`, fontSize: [6, 7], mb: 4 }}>Blog</h1>
      {posts.length === 0 && <p sx={{ color: `text` }}>No posts yet.</p>}
      {posts.map((post) => (
        <Link
          key={post.id}
          to={`/blog/${post.frontmatter.slug}/`}
          sx={{
            display: `block`,
            mb: 4,
            p: [3, 4],
            borderRadius: `12px`,
            bg: `divider`,
            textDecoration: `none`,
            transition: `all 0.2s ease`,
            "&:hover": {
              transform: `translateY(-2px)`,
              boxShadow: `0 4px 16px rgba(0,0,0,0.2)`,
            },
          }}
        >
          <h2 sx={{ color: `heading`, fontSize: [3, 4], mt: 0, mb: 2 }}>
            {post.frontmatter.title}
          </h2>
          <time sx={{ color: `textMuted`, fontSize: 0, display: `block`, mb: 2 }}>
            {new Date(post.frontmatter.date + "T12:00:00").toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
          <p sx={{ color: `text`, fontSize: [1, 2], m: 0 }}>{post.frontmatter.description}</p>
        </Link>
      ))}
    </BlogLayout>
  )
}

export default BlogIndex

export const Head: HeadFC = () => (
  <Seo
    title="Blog"
    description="Thoughts on web development, WordPress plugins, and building software products."
    pathname="/blog/"
  />
)

export const query = graphql`
  query BlogIndex {
    allMdx(
      filter: { internal: { contentFilePath: { regex: "/content/blog/" } } }
      sort: { frontmatter: { date: DESC } }
    ) {
      nodes {
        id
        frontmatter {
          title
          date
          description
          slug
        }
      }
    }
  }
`
