import { useEffect, useState } from 'react'
import './App.css'
import logo from './6OGKXHOIiZWjQPhSTlFlHmPk0U.avif'

const LAUNCH_TIMESTAMP = new Date(2026, 4, 10, 23, 59, 59).getTime()

const countdownUnits = [
  { key: 'days', label: 'Days' },
  { key: 'hours', label: 'Hours' },
  { key: 'minutes', label: 'Minutes' },
  { key: 'seconds', label: 'Seconds' },
]

const services = [
  {
    title: 'SaaS',
    description: 'Cloud platforms designed to scale with confident product teams.',
    icon: <CloudUploadIcon />,
  },
  {
    title: 'Software & Systems',
    description: 'Deep business logic, robust architecture, and maintainable foundations.',
    icon: <SystemsIcon />,
  },
  {
    title: 'Websites',
    description: 'High-performance web experiences with a clear conversion path.',
    icon: <LaptopIcon />,
  },
  {
    title: 'Mobile Apps',
    description: 'iOS and Android products built for usability, speed, and longevity.',
    icon: <MobileIcon />,
  },
  {
    title: 'AI Automation',
    description: 'Smart workflows, assistants, and automations that remove manual drag.',
    icon: <RobotIcon />,
  },
]

const socialLinks = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/angle-quotes/',
    icon: <LinkedInIcon />,
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/share/1MvgMAoyBn/?mibextid=wwXIfr',
    icon: <FacebookIcon />,
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/anglequotes.official?igsh=b29seXczOGFxYnht&utm_source=qr',
    icon: <InstagramIcon />,
  },
  {
    label: 'WhatsApp',
    href: 'https://wa.me/201037611112',
    icon: <WhatsAppIcon />,
  },
]

function getTimeLeft(targetTimestamp) {
  const distance = Math.max(targetTimestamp - Date.now(), 0)

  return {
    days: Math.floor(distance / (1000 * 60 * 60 * 24)),
    hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((distance / (1000 * 60)) % 60),
    seconds: Math.floor((distance / 1000) % 60),
  }
}

function padValue(value) {
  return String(value).padStart(2, '0')
}

function App() {
  const [timeLeft, setTimeLeft] = useState(() => getTimeLeft(LAUNCH_TIMESTAMP))
  const [email, setEmail] = useState('')
  const [showSuccess, setShowSuccess] = useState(false)

  useEffect(() => {
    document.title = 'Angle Quotes | Coming Soon'
  }, [])

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setTimeLeft(getTimeLeft(LAUNCH_TIMESTAMP))
    }, 1000)

    return () => window.clearInterval(intervalId)
  }, [])

  useEffect(() => {
    if (!showSuccess) {
      return undefined
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setShowSuccess(false)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [showSuccess])

  function handleSubmit(event) {
    event.preventDefault()

    if (!event.currentTarget.reportValidity()) {
      return
    }

    setShowSuccess(true)
    setEmail('')
  }

  return (
    <div className="page-shell">
      <div className="page-pattern" aria-hidden="true"></div>
      <div className="page-glow page-glow--top" aria-hidden="true"></div>
      <div className="page-glow page-glow--bottom" aria-hidden="true"></div>

      <main className="coming-soon">
        <header className="hero">
          <div className="brand-panel">
            <div className="brand-panel__chip">Stay Tuned ..!</div>
            <div className="brand-panel__logo-ring">
              <img src={logo} alt="Angle Quotes logo" className="brand-panel__logo" />
            </div>
            <p className="brand-panel__tagline">Sharp ideas. Clean systems. Launching soon.</p>
          </div>

          <div className="hero-copy">
            <p className="hero-copy__eyebrow">Launch target: May 10, 2026</p>
            <h1 className="hero-copy__title">
              REDEFINING SYSTEMS &amp; SOFTWARE:
              <span> Angle Quotes is coming.</span>
            </h1>
            <p className="hero-copy__description">
              We are building a studio-grade platform for SaaS products, websites, business
              systems, mobile apps, and AI-powered automation.
            </p>
          </div>
        </header>

        <section className="countdown" aria-label="Countdown to launch">
          {countdownUnits.map(({ key, label }) => (
            <CountdownCard key={key} label={label} value={timeLeft[key]} />
          ))}
        </section>

        <section className="services">
          <div className="section-heading">
            <p className="section-heading__eyebrow">What we are bringing online</p>
            <h2 className="section-heading__title">Engineered for ambitious digital products.</h2>
          </div>

          <div className="service-grid">
            {services.map(({ title, description, icon }) => (
              <FeatureCard
                key={title}
                title={title}
                description={description}
                icon={icon}
              />
            ))}
          </div>
        </section>

        <section className="subscription">
          <div className="section-heading section-heading--compact">
            <p className="section-heading__eyebrow">Join the launch list</p>
            <h2 className="section-heading__title">Email subscription.</h2>
            <p className="subscription__copy">
              Add your work email and we will let you know when the full experience is live.
            </p>
          </div>

          <form className="subscription-form" onSubmit={handleSubmit}>
            <label className="sr-only" htmlFor="subscription-email">
              Your corporate email address
            </label>
            <input
              id="subscription-email"
              className="subscription-form__input"
              type="email"
              name="email"
              autoComplete="email"
              inputMode="email"
              placeholder="Your corporate email address"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
            <button className="subscription-form__button" type="submit">
              <ArrowIcon />
              Notify Me
            </button>
          </form>

          <p className="subscription__note">
            Launch updates only. No noise, no unrelated marketing.
          </p>
        </section>

        <footer className="footer">
          <div className="social-links" aria-label="Social media links">
            {socialLinks.map(({ label, href, icon }) => (
              <SocialLink key={label} label={label} href={href} icon={icon} />
            ))}
          </div>
          <p className="footer__copyright">&copy; 2026 Angle Quotes. All rights reserved.</p>
        </footer>
      </main>

      {showSuccess ? <SuccessDialog onClose={() => setShowSuccess(false)} /> : null}
    </div>
  )
}

function CountdownCard({ label, value }) {
  return (
    <article className="countdown-card">
      <span className="countdown-card__value">{padValue(value)}</span>
      <span className="countdown-card__label">{label}</span>
    </article>
  )
}

function FeatureCard({ title, description, icon }) {
  return (
    <article className="feature-card">
      <div className="feature-card__icon">{icon}</div>
      <h3 className="feature-card__title">{title}</h3>
      <p className="feature-card__description">{description}</p>
    </article>
  )
}

function SocialLink({ label, href, icon }) {
  return (
    <a
      className="social-link"
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
    >
      {icon}
    </a>
  )
}

function SuccessDialog({ onClose }) {
  return (
    <div className="dialog-backdrop" onClick={onClose} role="presentation">
      <div
        className="dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="subscription-dialog-title"
        onClick={(event) => event.stopPropagation()}
      >
        <p className="dialog__eyebrow">Subscription confirmed</p>
        <h2 id="subscription-dialog-title" className="dialog__title">
          Thanks for subscribing
        </h2>
        <p className="dialog__body">You are officially on the Angle Quotes launch list.</p>
        <p className="dialog__signature">Sharp ideas. Clean systems. Launching soon.</p>
        <button className="dialog__button" type="button" onClick={onClose}>
          Awesome
        </button>
      </div>
    </div>
  )
}

function IconBase({ children }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
      {children}
    </svg>
  )
}

function ArrowIcon() {
  return (
    <IconBase>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h13"></path>
      <path strokeLinecap="round" strokeLinejoin="round" d="m13 6 6 6-6 6"></path>
    </IconBase>
  )
}

function CloudUploadIcon() {
  return (
    <IconBase>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M7 18a4 4 0 1 1 .83-7.91A5.5 5.5 0 0 1 18.5 11 3.5 3.5 0 1 1 18 18H7Z"
      ></path>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v7"></path>
      <path strokeLinecap="round" strokeLinejoin="round" d="m9.5 11.5 2.5-2.5 2.5 2.5"></path>
    </IconBase>
  )
}

function SystemsIcon() {
  return (
    <IconBase>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 3.5 4 8v8l8 4.5 8-4.5V8l-8-4.5Z"
      ></path>
      <path strokeLinecap="round" strokeLinejoin="round" d="m4 8 8 4.5L20 8"></path>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 12.5V21"></path>
    </IconBase>
  )
}

function LaptopIcon() {
  return (
    <IconBase>
      <rect x="4" y="5" width="16" height="11" rx="2"></rect>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.5 18.5h19"></path>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 18.5h6"></path>
    </IconBase>
  )
}

function MobileIcon() {
  return (
    <IconBase>
      <rect x="7" y="2.75" width="10" height="18.5" rx="2.5"></rect>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h3"></path>
      <circle cx="12" cy="17.5" r="1"></circle>
    </IconBase>
  )
}

function RobotIcon() {
  return (
    <IconBase>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 2.5v3"></path>
      <rect x="5" y="7" width="14" height="10" rx="3"></rect>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 21v-4"></path>
      <path strokeLinecap="round" strokeLinejoin="round" d="M16 21v-4"></path>
      <circle cx="9.5" cy="12" r="1"></circle>
      <circle cx="14.5" cy="12" r="1"></circle>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 15h6"></path>
    </IconBase>
  )
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M6.94 8.5H3.56V20h3.38V8.5Zm.22-3.56a1.96 1.96 0 1 0-3.92 0 1.96 1.96 0 0 0 3.92 0ZM20.44 20h-3.38v-5.6c0-1.54-.59-2.6-2.08-2.6-1.14 0-1.82.77-2.12 1.51-.11.26-.14.62-.14.98V20H9.34s.04-9.33 0-11.5h3.38v1.63c.45-.7 1.26-1.7 3.07-1.7 2.25 0 3.95 1.47 3.95 4.64V20Z"></path>
    </svg>
  )
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M13.5 22v-8.13h2.73l.41-3.17H13.5V8.68c0-.92.26-1.54 1.58-1.54h1.69V4.3c-.29-.04-1.28-.12-2.44-.12-2.41 0-4.06 1.47-4.06 4.17v2.35H7.55v3.17h2.72V22h3.23Z"></path>
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.8A3.95 3.95 0 0 0 3.8 7.75v8.5a3.95 3.95 0 0 0 3.95 3.95h8.5a3.95 3.95 0 0 0 3.95-3.95v-8.5a3.95 3.95 0 0 0-3.95-3.95h-8.5Zm8.95 1.35a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2ZM12 6.86A5.14 5.14 0 1 1 12 17.14 5.14 5.14 0 0 1 12 6.86Zm0 1.8A3.34 3.34 0 1 0 12 15.34 3.34 3.34 0 0 0 12 8.66Z"></path>
    </svg>
  )
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.52 3.48A11.86 11.86 0 0 0 12.08 0C5.5 0 .16 5.34.16 11.92c0 2.1.55 4.16 1.6 5.97L0 24l6.28-1.65a11.94 11.94 0 0 0 5.8 1.48h.01c6.57 0 11.91-5.34 11.91-11.92 0-3.18-1.24-6.17-3.48-8.43Zm-8.44 18.34h-.01a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.73.98 1-3.63-.24-.37a9.86 9.86 0 0 1-1.52-5.29c0-5.46 4.44-9.9 9.91-9.9 2.65 0 5.14 1.03 7.01 2.9a9.84 9.84 0 0 1 2.9 7c0 5.47-4.44 9.9-9.92 9.9Zm5.43-7.42c-.3-.15-1.77-.87-2.04-.96-.27-.1-.47-.15-.66.15-.2.3-.76.96-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.24-.46-2.37-1.46a8.85 8.85 0 0 1-1.64-2.04c-.17-.3-.02-.45.13-.6.13-.13.3-.35.44-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.66-.51h-.57c-.2 0-.51.08-.77.37-.27.3-1.02 1-.98 2.43.04 1.43 1.01 2.81 1.16 3 .15.2 1.98 3.02 4.8 4.24.67.29 1.2.46 1.61.59.68.22 1.3.19 1.8.12.55-.08 1.77-.72 2.02-1.41.25-.7.25-1.3.18-1.41-.08-.12-.27-.2-.57-.35Z"></path>
    </svg>
  )
}

export default App
