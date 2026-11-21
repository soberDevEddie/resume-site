import resume from '../data/resume'

export default function Skills() {
  const { skills, availableFor, images } = resume
  return (
    <section id="about" className="position-relative padding-medium">
      <div className="position-absolute end-0 z-n1 d-none d-lg-flex">
        <img src={images.pattern1} alt="" />
      </div>
      <div className="container padding-small">
        <div className="row">
          <div className="offset-lg-1 col-lg-5 mb-5 mb-lg-0">
            <h3 className="text-uppercase mb-5">Technical Skills</h3>
            {skills.map((s) => (
              <div className="mb-4" key={s.group}>
                <h6 className="fw-bold mb-3">{s.group}</h6>
                <ul className="list-unstyled d-flex flex-wrap gap-2 m-0">
                  {s.items.map((item) => (
                    <li key={item} className="border border-dark px-3 py-1 lh-base">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {availableFor && (
            <div className="offset-lg-1 col-lg-4">
              <h3 className="text-uppercase mb-5">{availableFor.heading}</h3>
              {availableFor.items.map((item) => (
                <h4 key={item} className="fw-bold display-4 m-0">
                  {item}
                </h4>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
