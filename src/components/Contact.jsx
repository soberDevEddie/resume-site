import { useState } from 'react'
import SocialLinks from './SocialLinks'
import resume from '../data/resume'

// There is no backend, so the form opens the visitor's mail client with the
// message pre-filled. Swap `handleSubmit` for a fetch() to Formspree, Resend,
// a serverless function, etc. if you want in-page sending.
export default function Contact() {
  const { contact, contactSection, name, copyrightYear } = resume
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Message from ${form.name}`)
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`)
    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`
  }

  const inputClass = 'form-control w-100 rounded-0 border-0 ps-4 py-3'

  return (
    <footer id="contact" style={{ backgroundColor: '#222222' }}>
      <div className="container">
        <div className="row padding-medium">
          <div className="offset-lg-1 col-lg-4 text-white">
            <h3 className="text-uppercase text-white">{contactSection.heading}</h3>
            <a href="#contact">
              <h3 className="text-uppercase text-white text-decoration-underline">{contactSection.cta}</h3>
            </a>
            <p>{contactSection.blurb}</p>
            <a href={`mailto:${contact.email}`} className="text-white fs-4 text-decoration-underline">
              {contact.email}
            </a>
            <p className="text-white mt-3">
              {contact.address}
              <br />
              {contact.phone}
            </p>
            <SocialLinks className="d-flex gap-3 m-0" />
          </div>

          <div className="offset-lg-2 col-lg-4 mt-5 mt-lg-0">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <input
                  type="text"
                  name="name"
                  placeholder="Name*"
                  className={inputClass}
                  value={form.name}
                  onChange={update}
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address*"
                  className={inputClass}
                  value={form.email}
                  onChange={update}
                  required
                />
              </div>
              <div className="mb-3">
                <textarea
                  name="message"
                  placeholder="Write Your Message Here"
                  className={inputClass}
                  style={{ height: 150 }}
                  value={form.message}
                  onChange={update}
                  required
                />
              </div>
              <div className="d-grid">
                <button type="submit" className="btn btn-primary text-start ps-4 py-3">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <hr className="text-white" />
      <div className="container py-3">
        <div className="row align-items-center">
          <div className="offset-lg-1 col-md-5 text-white copyright">
            <p className="m-0">
              © {copyrightYear} {name}. All rights reserved.
            </p>
          </div>
          <div className="col-md-5 text-white text-md-end">
            <p className="m-0">
              Template by{' '}
              <a
                href="https://templatesjungle.com/"
                target="_blank"
                rel="noreferrer"
                className="text-decoration-underline footer-link text-white"
              >
                TemplatesJungle
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
