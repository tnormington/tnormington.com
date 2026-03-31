/** @jsx jsx */
import { jsx } from "theme-ui"
import { graphql, Link, HeadFC, PageProps } from "gatsby"
import BlogLayout from "../components/blog-layout"
import Seo from "@lekoarts/gatsby-theme-cara/src/components/seo"

type DataProps = {
  mdx: {
    frontmatter: {
      title: string
      date: string
      description: string
      slug: string
    }
  }
}

const BlogPost = ({ data, children }: PageProps<DataProps>) => {
  const { title, date } = data.mdx.frontmatter

  return (
    <BlogLayout>
      <Link
        to="/blog/"
        sx={{
          color: `primary`,
          fontSize: 1,
          mb: 4,
          display: `inline-block`,
          textDecoration: `none`,
          "&:hover": { textDecoration: `underline` },
        }}
      >
        &larr; All Posts
      </Link>
      <h1 sx={{ color: `heading`, fontSize: [5, 6, 7], mt: 0, mb: 2 }}>{title}</h1>
      <time sx={{ color: `textMuted`, fontSize: 1, display: `block`, mb: 4 }}>
        {new Date(date + "T12:00:00").toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </time>
      <div
        sx={{
          h2: { fontSize: [4, 5], mt: 5, mb: 3, color: `heading` },
          h3: { fontSize: [3, 4], mt: 4, mb: 2, color: `heading` },
          p: { fontSize: [1, 2], lineHeight: `body`, mb: 3, color: `text` },
          "ul, ol": { mb: 3, pl: 4, color: `text` },
          li: { mb: 2 },
          code: { fontSize: 1, bg: `divider`, px: 1, py: `2px`, borderRadius: `4px` },
          pre: { bg: `divider`, p: 3, borderRadius: `8px`, overflowX: `auto`, mb: 3 },
          blockquote: {
            borderLeft: `4px solid`,
            borderColor: `primary`,
            pl: 3,
            ml: 0,
            fontStyle: `italic`,
          },
          a: { color: `primary` },
          img: { maxWidth: `100%`, borderRadius: `8px` },
        }}
      >
        {children}
      </div>
    </BlogLayout>
  )
}

export default BlogPost

export const Head: HeadFC<DataProps> = ({ data }) => {
  const { title, description, slug, date } = data.mdx.frontmatter
  const siteUrl = "https://tnormington.com"

  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description,
    datePublished: date,
    dateModified: date,
    url: `${siteUrl}/blog/${slug}/`,
    author: {
      "@type": "Person",
      name: "Tim Normington",
      url: siteUrl,
    },
    publisher: {
      "@type": "Person",
      name: "Tim Normington",
      url: siteUrl,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteUrl}/blog/${slug}/`,
    },
  }

  return (
    <Seo title={title} description={description} pathname={`/blog/${slug}/`}>
      <meta property="og:type" content="article" />
      <meta property="article:published_time" content={date} />
      <script type="application/ld+json">{JSON.stringify(blogPostingSchema)}</script>
    </Seo>
  )
}

export const query = graphql`
  query BlogPost($id: String!) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date
        description
        slug
      }
    }
  }
`
