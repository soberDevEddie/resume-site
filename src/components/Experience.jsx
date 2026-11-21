import resume from '../data/resume'

export default function Experience() {
  const { education, experience } = resume
  return (
    <section id="education" className="position-relative padding-medium">
      <div className="container">
        <div className="row">
          <div className="offset-lg-1 col-lg-4 mb-5 mb-lg-0">
            <h3 className="text-uppercase mb-5">Education</h3>
            {education.map((e) => (
              <div className="mb-3" key={`${e.period}-${e.title}`}>
                <h4 className="fw-bold display-6 m-0">{e.period}</h4>
                <p className="fw-bold fst-italic text-black-50 m-0">{e.title}</p>
                <p className="text-black-50">{e.place}</p>
              </div>
            ))}
          </div>
          <div className="offset-lg-2 col-lg-4">
            <h3 className="text-uppercase mb-5">Work Experience</h3>
            {experience.map((x) => (
              <div className="mb-3" key={`${x.period}-${x.place}`}>
                <h4 className="fw-bold display-6 m-0">{x.period}</h4>
                <p className="fw-bold fst-italic text-black-50 m-0">
                  {x.title}: <span className="fw-normal">{x.place}</span>
                </p>
                <ul className="text-black-50 ps-3">
                  {x.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
