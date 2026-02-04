/** @jsx jsx */
import { jsx } from "theme-ui"

type ProjectCardProps = {
  link: string
  title: string
  children: React.ReactNode
  bg: string
  color: string
}

const ProjectCard = ({ link, title, children, bg, color }: ProjectCardProps) => (
  <a
    href={link}
    target="_blank"
    rel="noreferrer noopener"
    sx={{
      width: `100%`,
      minHeight: `280px`,
      boxShadow: `0 10px 40px rgba(0, 0, 0, 0.25)`,
      position: `relative`,
      textDecoration: `none`,
      borderRadius: `xl`,
      px: [4, 5],
      py: [4, 5],
      color: color || `white`,
      background: bg || `none`,
      transition: `all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) !important`,
      display: `flex`,
      flexDirection: `column`,
      justifyContent: `space-between`,
      overflow: `hidden`,
      border: `1px solid rgba(255, 255, 255, 0.1)`,
      "&::before": {
        content: `""`,
        position: `absolute`,
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: `linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 50%)`,
        opacity: 0,
        transition: `opacity 0.4s ease`,
        pointerEvents: `none`,
      },
      "&:hover": {
        color: `white !important`,
        transform: `translateY(-8px) scale(1.02)`,
        boxShadow: `0 20px 60px rgba(0, 0, 0, 0.35)`,
        border: `1px solid rgba(255, 255, 255, 0.2)`,
        "&::before": {
          opacity: 1,
        },
        ".arrow-icon": {
          transform: `translate(4px, -4px)`,
          opacity: 1,
        },
      },
    }}
  >
    <div>
      <div
        sx={{
          display: `flex`,
          justifyContent: `space-between`,
          alignItems: `flex-start`,
          mb: 3,
        }}
      >
        <div
          sx={{
            fontSize: [3, 4],
            fontWeight: `bold`,
            lineHeight: 1.2,
            letterSpacing: `-0.02em`,
            pr: 3,
          }}
        >
          {title}
        </div>
        <svg
          className="arrow-icon"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          sx={{
            flexShrink: 0,
            opacity: 0.6,
            transition: `all 0.3s ease`,
            mt: 1,
          }}
        >
          <line x1="7" y1="17" x2="17" y2="7" />
          <polyline points="7 7 17 7 17 17" />
        </svg>
      </div>
      <div
        sx={{
          width: `40px`,
          height: `3px`,
          background: `rgba(255, 255, 255, 0.4)`,
          borderRadius: `full`,
          mb: 3,
        }}
      />
    </div>
    <div
      sx={{
        opacity: 0.9,
        textShadow: `0 2px 10px rgba(0, 0, 0, 0.2)`,
        p: {
          fontSize: [1, 2],
          color: color || `white`,
          margin: 0,
          lineHeight: 1.5,
        },
      }}
    >
      {children}
    </div>
  </a>
)

export default ProjectCard