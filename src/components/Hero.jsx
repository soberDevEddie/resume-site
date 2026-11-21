import resume from '../data/resume'

export default function Hero() {
  const { hero, images, name } = resume
  return (
    <section id="hero" style={{ backgroundColor: '#222222' }}>
      <div className="container padding-medium">
        <div className="row align-items-center">
          <div className={`offset-lg-1 z-1 ${images.banner ? 'col-lg-6' : 'col-lg-7'}`}>
            <h2 className="display-3 fw-bold text-white">{hero.headline}</h2>
            <p className="text-white">{hero.blurb}</p>
          </div>
          {images.banner && (
            <div className="col-lg-4 col-md-8 col-10 mt-5 mt-lg-0 ms-lg-auto">
              <img src={images.banner} alt={`Portrait of ${name}`} className="img-fluid w-100" />
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
