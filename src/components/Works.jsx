import resume from '../data/resume'

export default function Works() {
  const { works } = resume
  if (!works.items.length) return null
  return (
    <section id="works" className="padding-medium">
      <div className="container">
        <div className="row">
          <div className="offset-lg-3 col-lg-6 text-center mb-5">
            <h6 className="mb-3">{works.eyebrow}</h6>
            <h3 className="my-4">{works.heading}</h3>
            <p>{works.blurb}</p>
          </div>
        </div>
        <div className="row">
          {works.items.map((w, i) => (
            <div
              // Center a lone last card instead of leaving it stranded on the left
              className={`col-md-6 mb-5${
                works.items.length % 2 === 1 && i === works.items.length - 1 ? ' offset-md-3' : ''
              }`}
              key={w.title}
            >
              <div className="h-100 border border-dark p-4 d-flex flex-column">
                {w.image && <img src={w.image} alt={w.title} className="img-fluid mb-4" />}
                <h5 className="mb-2">{w.title}</h5>
                <p className="mb-3">{w.description}</p>
                <ul className="list-unstyled d-flex flex-wrap gap-2 mb-4">
                  {w.tech.map((t) => (
                    <li key={t} className="bg-dark text-white px-2 small lh-base">
                      {t}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto d-flex flex-wrap gap-4">
                  {w.links.map((l) => (
                    <a
                      key={l.href}
                      href={l.href}
                      target="_blank"
                      rel="noreferrer"
                      className="fw-bold text-uppercase text-decoration-underline"
                    >
                      {l.label} ↗
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
