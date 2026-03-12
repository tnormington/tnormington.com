import * as React from "react"
import type { HeadFC } from "gatsby"
import { Parallax } from "@react-spring/parallax"
// @ts-ignore
import Layout from "@lekoarts/gatsby-theme-cara/src/components/layout"
// @ts-ignore
import Hero from "@lekoarts/gatsby-theme-cara/src/components/hero"
// @ts-ignore
import Projects from "@lekoarts/gatsby-theme-cara/src/components/projects"
// @ts-ignore
import About from "@lekoarts/gatsby-theme-cara/src/components/about"
// @ts-ignore
import Contact from "@lekoarts/gatsby-theme-cara/src/components/contact"
// @ts-ignore
import Seo from "@lekoarts/gatsby-theme-cara/src/components/seo"

const Cara = () => (
  <Layout>
    <Parallax pages={5.5}>
      <Hero offset={0} factor={1.6} />
      <Projects offset={1.6} factor={2} />
      <About offset={3.6} factor={1} />
      <Contact offset={4.6} factor={1} />
    </Parallax>
  </Layout>
)

export default Cara

export const Head: HeadFC = () => <Seo />
