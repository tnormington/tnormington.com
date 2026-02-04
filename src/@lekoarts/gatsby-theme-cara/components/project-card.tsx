/** @jsx jsx */
import { jsx } from "theme-ui"

type ProjectCardProps = {
  link: string
  title: string
  children: React.ReactNode
  image?: string
}

const ProjectCard = ({ link, title, children, image }: ProjectCardProps) => (
  <a
    href={link}
    target="_blank"
    rel="noreferrer noopener"
    sx={{
      width: `100%`,
      minHeight: `320px`,
      boxShadow: `0 2px 8px rgba(0, 0, 0, 0.08)`,
      position: `relative`,
      textDecoration: `none`,
      borderRadius: `12px`,
      color: `#333`,
      background: `white`,
      transition: `all 0.3s ease`,
      display: `flex`,
      flexDirection: `column`,
      overflow: `hidden`,
      border: `1px solid #e5e5e5`,
      "&:hover": {
        color: `#333 !important`,
        transform: `translateY(-4px)`,
        boxShadow: `0 8px 24px rgba(0, 0, 0, 0.12)`,
        border: `1px solid #d0d0d0`,
        ".arrow-icon": {
          transform: `translate(4px, -4px)`,
          opacity: 1,
        },
      },
    }}
  >
    {image && (
      <div
        sx={{
          width: `100%`,
          height: `160px`,
          overflow: `hidden`,
          borderBottom: `1px solid #e5e5e5`,
        }}
      >
        <img
          src={image}
          alt={`${title} preview`}
          sx={{
            width: `100%`,
            height: `100%`,
            objectFit: `cover`,
            objectPosition: `top center`,
          }}
        />
      </div>
    )}
    <div
      sx={{
        px: [4, 4],
        py: [4, 4],
        display: `flex`,
        flexDirection: `column`,
        justifyContent: `space-between`,
        flex: 1,
      }}
    >
      <div>
        <div
          sx={{
            display: `flex`,
            justifyContent: `space-between`,
            alignItems: `flex-start`,
            mb: 2,
          }}
        >
          <div
            sx={{
              fontSize: [2, 3],
              fontWeight: `bold`,
              lineHeight: 1.3,
              letterSpacing: `-0.01em`,
              color: `#1a1a1a`,
              pr: 3,
            }}
          >
            {title}
          </div>
          <svg
            className="arrow-icon"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            sx={{
              flexShrink: 0,
              opacity: 0.4,
              transition: `all 0.3s ease`,
              color: `#666`,
            }}
          >
            <line x1="7" y1="17" x2="17" y2="7" />
            <polyline points="7 7 17 7 17 17" />
          </svg>
        </div>
      </div>
      <div
        sx={{
          p: {
            fontSize: [1, 1],
            color: `#666`,
            margin: 0,
            lineHeight: 1.6,
          },
        }}
      >
        {children}
      </div>
    </div>
  </a>
)

export default ProjectCard
