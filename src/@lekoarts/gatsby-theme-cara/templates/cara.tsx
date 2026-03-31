/** @jsx jsx */
import { jsx } from "theme-ui"
import type { HeadFC } from "gatsby"
import { Parallax, ParallaxLayer } from "@react-spring/parallax"
// @ts-ignore
import Layout from "@lekoarts/gatsby-theme-cara/src/components/layout"
// @ts-ignore
import Svg from "@lekoarts/gatsby-theme-cara/src/components/svg"
// @ts-ignore
import { UpDown, UpDownWide, waveAnimation } from "@lekoarts/gatsby-theme-cara/src/styles/animations"
// @ts-ignore
import Inner from "@lekoarts/gatsby-theme-cara/src/elements/inner"
// @ts-ignore
import Footer from "@lekoarts/gatsby-theme-cara/src/components/footer"
// @ts-ignore
import Seo from "@lekoarts/gatsby-theme-cara/src/components/seo"
import Intro from "../sections/intro.mdx"
import ProjectsMDX from "../sections/projects.mdx"
import AboutMDX from "../sections/about.mdx"
import ContactMDX from "../sections/contact.mdx"

const Cara = () => (
  <Layout>
    <Parallax pages={4}>
      {/* ── Background decorations ── */}

      {/* Hero background */}
      <ParallaxLayer offset={0} factor={1} speed={0.2} sx={{ position: `absolute`, width: `full`, height: `full` }}>
        <UpDown>
          <Svg icon="triangle" hiddenMobile width={56} stroke color="icon_orange" left="10%" top="20%" />
          <Svg icon="hexa" width={48} stroke color="icon_red" left="60%" top="70%" />
          <Svg icon="box" width={6} color="icon_darker" left="60%" top="15%" />
        </UpDown>
        <UpDownWide>
          <Svg icon="arrowUp" hiddenMobile width={16} color="icon_blue" left="80%" top="10%" />
          <Svg icon="triangle" width={12} stroke color="icon_brightest" left="90%" top="50%" />
          <Svg icon="circle" width={16} color="icon_darker" left="70%" top="90%" />
          <Svg icon="triangle" width={16} stroke color="icon_darkest" left="30%" top="65%" />
          <Svg icon="cross" width={16} stroke color="icon_pink" left="28%" top="15%" />
          <Svg icon="circle" width={6} color="icon_darkest" left="75%" top="10%" />
          <Svg icon="upDown" hiddenMobile width={8} color="icon_darkest" left="45%" top="10%" />
        </UpDownWide>
        <Svg icon="circle" hiddenMobile width={24} color="icon_darker" left="5%" top="70%" />
        <Svg icon="circle" width={6} color="icon_darkest" left="4%" top="20%" />
        <Svg icon="circle" width={12} color="icon_darkest" left="50%" top="60%" />
        <Svg icon="upDown" width={8} color="icon_darkest" left="95%" top="90%" />
        <Svg icon="upDown" hiddenMobile width={24} color="icon_darker" left="40%" top="80%" />
        <Svg icon="triangle" width={8} stroke color="icon_darker" left="25%" top="5%" />
        <Svg icon="circle" width={64} color="icon_green" left="95%" top="5%" />
        <Svg icon="box" hiddenMobile width={64} color="icon_purple" left="5%" top="90%" />
        <Svg icon="box" width={6} color="icon_darkest" left="10%" top="10%" />
        <Svg icon="box" width={12} color="icon_darkest" left="40%" top="30%" />
        <Svg icon="hexa" width={16} stroke color="icon_darker" left="10%" top="50%" />
        <Svg icon="hexa" width={8} stroke color="icon_darker" left="80%" top="70%" />
      </ParallaxLayer>

      {/* Projects gradient background */}
      <ParallaxLayer
        offset={1}
        factor={2}
        speed={-0.2}
        sx={{
          position: `absolute`,
          width: `full`,
          height: `full`,
          background: `linear-gradient(to right, SlateBlue 0%, DeepSkyBlue 100%)`,
          clipPath: `polygon(0 15%, 100% 25%, 100% 85%, 0 75%)`,
        }}
      />

      {/* Projects background SVGs */}
      <ParallaxLayer offset={1} factor={2} speed={0.1} sx={{ position: `absolute`, width: `full`, height: `full` }}>
        <UpDown>
          <Svg icon="box" width={6} color="icon_brightest" left="85%" top="75%" />
          <Svg icon="upDown" width={8} color="icon_teal" left="70%" top="20%" />
          <Svg icon="triangle" width={8} stroke color="icon_orange" left="25%" top="5%" />
          <Svg icon="circle" hiddenMobile width={24} color="icon_brightest" left="17%" top="60%" />
        </UpDown>
        <UpDownWide>
          <Svg icon="arrowUp" hiddenMobile width={16} color="icon_green" left="20%" top="90%" />
          <Svg icon="triangle" width={12} stroke color="icon_brightest" left="90%" top="30%" />
          <Svg icon="circle" width={16} color="icon_yellow" left="70%" top="90%" />
          <Svg icon="triangle" hiddenMobile width={16} stroke color="icon_teal" left="18%" top="75%" />
          <Svg icon="circle" width={6} color="icon_brightest" left="75%" top="10%" />
          <Svg icon="upDown" hiddenMobile width={8} color="icon_green" left="45%" top="10%" />
        </UpDownWide>
        <Svg icon="circle" hiddenMobile width={6} color="icon_brightest" left="4%" top="20%" />
        <Svg icon="circle" width={12} color="icon_pink" left="80%" top="60%" />
        <Svg icon="box" width={6} color="icon_orange" left="10%" top="10%" />
        <Svg icon="box" width={12} color="icon_yellow" left="29%" top="26%" />
        <Svg icon="hexa" width={16} stroke color="icon_red" left="75%" top="30%" />
        <Svg icon="hexa" width={8} stroke color="icon_yellow" left="80%" top="70%" />
      </ParallaxLayer>

      {/* About background */}
      <ParallaxLayer
        offset={2.5}
        factor={1}
        speed={0.2}
        sx={{
          position: `absolute`,
          width: `full`,
          height: `full`,
          background: `divider`,
          backgroundColor: `divider`,
          clipPath: `polygon(0 16%, 100% 4%, 100% 82%, 0 94%)`,
        }}
      />
      <ParallaxLayer offset={2.5} factor={1} speed={0.1} sx={{ position: `absolute`, width: `full`, height: `full` }}>
        <UpDown>
          <Svg icon="box" hiddenMobile width={6} color="icon_blue" left="50%" top="75%" />
          <Svg icon="upDown" hiddenMobile width={8} color="icon_darkest" left="70%" top="20%" />
          <Svg icon="triangle" width={8} stroke color="icon_darkest" left="25%" top="5%" />
          <Svg icon="upDown" hiddenMobile width={24} color="icon_orange" left="80%" top="80%" />
        </UpDown>
        <UpDownWide>
          <Svg icon="arrowUp" hiddenMobile width={16} color="icon_purple" left="5%" top="80%" />
          <Svg icon="triangle" width={12} stroke color="icon_brightest" left="95%" top="50%" />
          <Svg icon="circle" hiddenMobile width={6} color="icon_brightest" left="85%" top="15%" />
          <Svg icon="upDown" hiddenMobile width={8} color="icon_darkest" left="45%" top="10%" />
        </UpDownWide>
        <Svg icon="circle" hiddenMobile width={6} color="icon_brightest" left="4%" top="20%" />
        <Svg icon="circle" width={12} color="icon_darkest" left="70%" top="60%" />
        <Svg icon="box" width={6} color="icon_orange" left="10%" top="10%" />
        <Svg icon="box" width={12} color="icon_darkest" left="20%" top="30%" />
        <Svg icon="hexa" width={8} stroke color="icon_darkest" left="80%" top="70%" />
      </ParallaxLayer>

      {/* Contact background */}
      <ParallaxLayer offset={3} factor={1} speed={0.2} sx={{ position: `absolute`, width: `full`, height: `full` }}>
        <div sx={{ position: `absolute`, bottom: 0, width: `full`, transform: `matrix(1, 0, 0, -1, 0, 0)` }}>
          <div
            sx={{
              position: `relative`,
              height: `full`,
              svg: { width: `100%`, height: `40vh` },
              path: { animation: waveAnimation(`20s`) },
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" id="contact-wave" viewBox="0 0 800 338.05" preserveAspectRatio="none">
              <path>
                <animate
                  attributeName="d"
                  values="M 0 100 Q 250 50 400 200 Q 550 350 800 300 L 800 0 L 0 0 L 0 100 Z;M 0 100 Q 200 150 400 200 Q 600 250 800 300 L 800 0 L 0 0 L 0 100 Z;M 0 100 Q 150 350 400 200 Q 650 50 800 300 L 800 0 L 0 0 L 0 100 Z"
                  repeatCount="indefinite"
                  dur="30s"
                />
              </path>
            </svg>
          </div>
        </div>
      </ParallaxLayer>
      <ParallaxLayer offset={3} factor={1} speed={0.1} sx={{ position: `absolute`, width: `full`, height: `full` }}>
        <UpDown>
          <Svg icon="upDown" hiddenMobile width={8} color="icon_darkest" left="70%" top="20%" />
          <Svg icon="triangle" width={8} stroke color="icon_darkest" left="25%" top="5%" />
        </UpDown>
        <UpDownWide>
          <Svg icon="triangle" width={12} stroke color="icon_brightest" left="95%" top="50%" />
          <Svg icon="circle" width={6} color="icon_brightest" left="85%" top="15%" />
          <Svg icon="upDown" hiddenMobile width={8} color="icon_darkest" left="45%" top="10%" />
        </UpDownWide>
        <Svg icon="circle" width={6} color="icon_brightest" left="4%" top="20%" />
        <Svg icon="circle" width={12} color="icon_darkest" left="70%" top="60%" />
        <Svg icon="box" width={12} color="icon_darkest" left="20%" top="30%" />
        <Svg icon="hexa" width={8} stroke color="icon_darkest" left="80%" top="70%" />
      </ParallaxLayer>

      {/* ── Content sections ── */}

      {/* Hero content */}
      <ParallaxLayer offset={0} factor={1} speed={0.8} sx={{ zIndex: 50, display: `flex`, alignItems: `center`, justifyContent: `center` }}>
        <div
          sx={{
            variant: `texts.bigger`,
            display: `flex`,
            flexDirection: `column`,
            alignItems: `center`,
            justifyContent: `flex-start`,
            pt: [`96px`, 4, `12vh`],
            pb: [4, 4, 5],
            px: [3, 4, 4, 5],
            width: `full`,
          }}
        >
          <Inner>
            <Intro />
          </Inner>
        </div>
      </ParallaxLayer>

      {/* Projects content */}
      <ParallaxLayer offset={1} factor={2} speed={0.8} sx={{ zIndex: 50 }}>
        <div
          sx={{
            display: `flex`,
            flexDirection: `column`,
            alignItems: `center`,
            px: [3, 4, 4, 5],
            py: [4, 4, 5],
          }}
        >
          <Inner>
            <div
              sx={{
                display: `grid`,
                gridGap: [4, 4, 4, 5],
                gridTemplateColumns: [`1fr`, `1fr`, `repeat(2, 1fr)`, `repeat(3, 1fr)`],
                maxWidth: `1400px`,
                margin: `0 auto`,
                "> h2": { gridColumn: `-1/1`, color: `white !important` },
                "> h3": { gridColumn: `-1/1`, color: `white !important`, fontSize: [5, 6], fontWeight: 600, opacity: 0.85, mt: 2, mb: -2 },
              }}
            >
              <ProjectsMDX />
            </div>
          </Inner>
        </div>
      </ParallaxLayer>

      {/* About content */}
      <ParallaxLayer offset={2.5} factor={1} speed={0.8} sx={{ zIndex: 50 }}>
        <div
          sx={{
            display: `flex`,
            flexDirection: `column`,
            alignItems: `center`,
            px: [3, 4, 4, 5],
            py: [4, 4, 5],
          }}
        >
          <Inner>
            <AboutMDX />
          </Inner>
        </div>
      </ParallaxLayer>

      {/* Contact content */}
      <ParallaxLayer offset={3} factor={1} speed={0.8} sx={{ zIndex: 50 }}>
        <div
          sx={{
            display: `flex`,
            flexDirection: `column`,
            alignItems: `center`,
            px: [3, 4, 4, 5],
            py: [4, 4, 5],
          }}
        >
          <Inner>
            <ContactMDX />
          </Inner>
          <Footer />
        </div>
      </ParallaxLayer>
    </Parallax>
  </Layout>
)

export default Cara

export const Head: HeadFC = () => <Seo />
