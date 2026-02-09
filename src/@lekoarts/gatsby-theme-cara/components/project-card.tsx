/** @jsx jsx */
import { jsx } from "theme-ui"

type ProjectCardProps = {
  link: string
  title: string
  children: React.ReactNode
  image?: string
  category?: "Website" | "App"
}

const categoryStyles = {
  Website: {
    bg: `linear-gradient(135deg, #667eea 0%, #764ba2 100%)`,
    shadow: `rgba(102, 126, 234, 0.3)`,
  },
  App: {
    bg: `linear-gradient(135deg, #f093fb 0%, #f5576c 100%)`,
    shadow: `rgba(245, 87, 108, 0.3)`,
  },
}

const ProjectCard = ({ link, title, children, image, category }: ProjectCardProps) => (
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
        px: [3, 3],
        py: [3, 3],
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
        {category && (
          <span
            sx={{
              display: `inline-flex`,
              alignItems: `center`,
              alignSelf: `flex-start`,
              gap: `4px`,
              fontSize: `11px`,
              fontWeight: 700,
              letterSpacing: `0.04em`,
              textTransform: `uppercase`,
              color: `#fff`,
              background: categoryStyles[category].bg,
              px: `8px`,
              py: `3px`,
              borderRadius: `20px`,
              whiteSpace: `nowrap`,
              boxShadow: `0 2px 8px ${categoryStyles[category].shadow}`,
              mt: 1,
              mb: 2
            }}
          >
            {category === "App" ? (
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                <line x1="12" y1="18" x2="12.01" y2="18" />
              </svg>
            ) : (
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <line x1="2" y1="12" x2="22" y2="12" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
            )}
            {category}
          </span>
        )}
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
