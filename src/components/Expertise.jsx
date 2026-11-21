import resume from '../data/resume'

export default function Expertise() {
  const { expertise } = resume
  if (!expertise.length) return null
  return (
    <section id="expertise">
      <div className="container">
        <h3 className="text-center text-uppercase mb-5">Expertise</h3>
        <div className="row">
          {expertise.map((name, i) => (
            <div className="offset-lg-1 col-md-4 col-lg-3 text-center" key={name}>
              <div className="position-relative">
                <p className="bg-white position-absolute top-50 start-0 translate-middle-y">{name}</p>
                <h5 className="experties-number-size">{String(i + 1).padStart(2, '0')}.</h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
