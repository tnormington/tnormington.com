import * as React from "react"
import { withPrefix } from "gatsby"
import useSiteMetadata from "../hooks/use-site-metadata"

type Props = {
  title?: string
  description?: string
  pathname?: string
  image?: string
  children?: React.ReactNode
}

const Seo = ({ title = ``, description = ``, pathname = ``, image = ``, children = null }: Props) => {
  const site = useSiteMetadata()

  const {
    siteTitle,
    siteTitleAlt: defaultTitle,
    siteUrl,
    siteDescription: defaultDescription,
    siteImage: defaultImage,
    author,
    siteLanguage,
  } = site

  const seo = {
    title: title ? `${title} | ${siteTitle}` : defaultTitle,
    description: description || defaultDescription,
    url: `${siteUrl}${pathname || ``}`,
    image: `${siteUrl}${image || defaultImage}`,
  }

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Tim Normington",
    jobTitle: "Lead Front-End Developer",
    url: siteUrl,
    image: `${siteUrl}/portrait.png`,
    description: defaultDescription,
    knowsAbout: [
      "JavaScript",
      "TypeScript",
      "React",
      "WordPress",
      "Gatsby",
      "CSS",
      "HTML",
      "Web Accessibility",
      "Front-End Development",
      "Full-Stack Development",
    ],
    sameAs: [
      "https://github.com/tnormington",
      "https://www.linkedin.com/in/tnormington",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Dover",
      addressRegion: "NH",
      addressCountry: "US",
    },
    worksFor: {
      "@type": "Organization",
      name: "Omnia Digital Solutions",
    },
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteTitle,
    url: siteUrl,
    description: defaultDescription,
    author: {
      "@type": "Person",
      name: author,
    },
    inLanguage: siteLanguage,
  }

  const breadcrumbItems = [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: siteUrl,
    },
  ]

  if (pathname && pathname !== "/") {
    const pageName = title || pathname.replace(/\//g, "").replace(/-/g, " ")
    breadcrumbItems.push({
      "@type": "ListItem",
      position: 2,
      name: pageName.charAt(0).toUpperCase() + pageName.slice(1),
      item: `${siteUrl}${pathname}`,
    })
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbItems,
  }

  return (
    <>
      <html lang={siteLanguage} />
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:type" content="website" />
      <meta property="og:image:alt" content={seo.description} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:url" content={seo.url} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
      <meta name="twitter:image:alt" content={seo.description} />
      <meta name="twitter:creator" content={author} />
      <meta name="gatsby-theme" content="@lekoarts/gatsby-theme-cara" />
      <link rel="icon" type="image/png" sizes="32x32" href={withPrefix(`/favicon-32x32.png`)} />
      <link rel="icon" type="image/png" sizes="16x16" href={withPrefix(`/favicon-16x16.png`)} />
      <link rel="apple-touch-icon" sizes="180x180" href={withPrefix(`/apple-touch-icon.png`)} />
      <script type="application/ld+json">{JSON.stringify(personSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(websiteSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      {children}
    </>
  )
}

export default Seo
