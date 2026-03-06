/** @jsx jsx */
import { jsx } from "theme-ui"

type ServiceCardProps = {
  title: string
  email: string
  subject: string
  children: React.ReactNode
  icon: "code" | "brain" | "palette"
}

const iconMap = {
  code: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  ),
  brain: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9.5 2A5.5 5.5 0 0 0 4 7.5c0 1.58.67 3 1.74 4.01L12 18l6.26-6.49A5.5 5.5 0 0 0 14.5 2a5.5 5.5 0 0 0-5 3.18A5.5 5.5 0 0 0 9.5 2z" />
      <circle cx="12" cy="10" r="2" />
      <path d="M12 18v4" />
      <path d="M8 22h8" />
    </svg>
  ),
  palette: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="13.5" cy="6.5" r="2" />
      <circle cx="17.5" cy="10.5" r="2" />
      <circle cx="8.5" cy="7.5" r="2" />
      <circle cx="6.5" cy="12.5" r="2" />
      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.93 0 1.5-.65 1.5-1.5 0-.39-.15-.74-.39-1.02-.24-.27-.39-.63-.39-1.02 0-.83.67-1.5 1.5-1.5H16c3.31 0 6-2.69 6-6 0-5.17-4.5-9-10-9z" />
    </svg>
  ),
}

const ServiceCard = ({ title, email, subject, children, icon }: ServiceCardProps) => (
  <div
    sx={{
      background: `white`,
      border: `2px solid #e5e7eb`,
      borderRadius: `16px`,
      padding: [`24px`, `32px`],
      display: `flex`,
      flexDirection: `column`,
      position: `relative`,
      overflow: `visible`,
      transition: `all 0.3s ease`,
      boxShadow: `0 2px 8px rgba(0, 0, 0, 0.06)`,
      "&:hover": {
        transform: `translateY(-4px)`,
        boxShadow: `0 8px 24px rgba(0, 0, 0, 0.1)`,
      },
    }}
  >
    <div
      sx={{
        display: `flex`,
        alignItems: `center`,
        gap: `12px`,
        mb: 3,
      }}
    >
      <div
        sx={{
          width: `48px`,
          height: `48px`,
          borderRadius: `12px`,
          display: `flex`,
          alignItems: `center`,
          justifyContent: `center`,
          background: `linear-gradient(135deg, #f0f0ff 0%, #e8e8ff 100%)`,
          color: `#6366f1`,
          flexShrink: 0,
        }}
      >
        {iconMap[icon]}
      </div>
      <h3
        sx={{
          fontSize: [`18px`, `20px`],
          fontWeight: 700,
          color: `#1a1a2e !important`,
          margin: 0,
          lineHeight: 1.3,
        }}
      >
        {title}
      </h3>
    </div>

    <div
      sx={{
        flex: 1,
        mb: 3,
        p: {
          fontSize: [`14px`, `15px`],
          color: `#6b7280`,
          margin: 0,
          lineHeight: 1.7,
        },
      }}
    >
      {children}
    </div>

    <a
      href={`mailto:${email}?subject=${encodeURIComponent(subject)}`}
      sx={{
        display: `inline-flex`,
        alignItems: `center`,
        justifyContent: `center`,
        gap: `8px`,
        background: `white`,
        color: `#6366f1`,
        border: `2px solid #6366f1`,
        borderRadius: `10px`,
        padding: `12px 24px`,
        fontSize: `15px`,
        fontWeight: 600,
        textDecoration: `none`,
        transition: `all 0.2s ease`,
        cursor: `pointer`,
        "&:hover": {
          background: `#6366f1`,
          color: `white !important`,
          transform: `translateY(-1px)`,
          boxShadow: `0 4px 12px rgba(99, 102, 241, 0.3)`,
        },
      }}
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
      Get in Touch
    </a>
  </div>
)

export default ServiceCard
