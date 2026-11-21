import { useEffect, useState } from 'react'
import Offcanvas from 'react-bootstrap/Offcanvas'
import Icon from './Icon'
import SocialLinks from './SocialLinks'
import resume from '../data/resume'

const LINKS = [
  { label: 'Home', href: '#hero' },
  { label: 'Skills', href: '#about' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'Work', href: '#works' },
  { label: 'Testimonials', href: '#testimonial' },
  { label: 'Experience', href: '#education' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { name, title, contact, testimonials } = resume

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY >= 200)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = LINKS.filter((l) => l.href !== '#testimonial' || testimonials.length > 0)

  return (
    <nav className={`main-menu d-flex navbar fixed-top py-4 ${scrolled ? 'bg-primary' : ''}`}>
      <div className="container">
        <div className="main-logo">
          <a href="#hero" className="text-white fw-bold fs-4 lh-1 d-flex align-items-baseline gap-3">
            <span>{name}</span>
            {title && (
              <span className="d-none d-md-inline text-uppercase fw-normal fs-6" style={{ letterSpacing: '0.2rem' }}>
                {title}
              </span>
            )}
          </a>
        </div>

        <SocialLinks className="d-none d-lg-flex gap-3 m-0" />

        <div className="d-none d-lg-flex align-items-end">
          <ul className="d-flex justify-content-end list-unstyled m-0 gap-3">
            <li>
              <Icon name="envelope" size={20} className="text-white me-1" />
              <a href={`mailto:${contact.email}`} className="text-white">
                {contact.email}
              </a>
            </li>
            <li>
              <Icon name="phone" size={20} className="text-white me-1" />
              <a href={`tel:${contact.phone.replace(/[^\d+]/g, '')}`} className="text-white">
                {contact.phone}
              </a>
            </li>
          </ul>
        </div>

        <button
          className="navbar-toggler border-0 shadow-none p-0"
          type="button"
          aria-label="Open menu"
          onClick={() => setOpen(true)}
        >
          <Icon name="menu" size={30} className="text-white" />
        </button>

        <Offcanvas show={open} onHide={() => setOpen(false)} placement="end">
          <Offcanvas.Header closeButton closeVariant="white" className="justify-content-center p-4" />
          <Offcanvas.Body className="d-flex flex-column justify-content-between">
            <ul className="navbar-nav menu-list list-unstyled d-flex p-5 pt-0">
              {links.map((l) => (
                <li className="nav-item" key={l.href}>
                  <a href={l.href} className="nav-link fs-4 p-0" onClick={() => setOpen(false)}>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>

            <SocialLinks className="d-flex d-lg-none justify-content-center gap-3 mt-5 mb-3" />

            <ul className="d-block d-lg-none list-unstyled my-3">
              <li className="text-center">
                <Icon name="envelope" size={20} className="text-white me-1" />
                <a href={`mailto:${contact.email}`} className="text-white">
                  {contact.email}
                </a>
              </li>
              <li className="text-center">
                <Icon name="phone" size={20} className="text-white me-1" />
                <a href={`tel:${contact.phone.replace(/[^\d+]/g, '')}`} className="text-white">
                  {contact.phone}
                </a>
              </li>
            </ul>
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    </nav>
  )
}
