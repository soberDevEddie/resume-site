import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import Icon from './Icon'
import resume from '../data/resume'

export default function Testimonials() {
  const { testimonials, images } = resume
  if (!testimonials.length) return null
  return (
    <section id="testimonial" className="position-relative">
      <div className="position-absolute end-0 z-n1 d-none d-lg-flex">
        <img src={images.pattern2} alt="" />
      </div>
      <h6 className="text-center my-3">Testimonials</h6>

      <div className="container position-relative">
        <div className="offset-md-2 col-md-8">
          <div className="position-absolute">
            <Icon name="quote" size={150} className="quote" />
          </div>

          <Swiper
            className="testimonial-swiper py-3 py-md-5"
            modules={[Pagination]}
            slidesPerView={1}
            spaceBetween={20}
            pagination={{ clickable: true }}
          >
            {testimonials.map((t, i) => (
              <SwiperSlide key={i}>
                <div className="review">
                  <div className="review-content text-center pb-5">
                    <p className="fs-3 fw-bold">{t.quote}</p>
                    <p>
                      {t.author}, <span className="fw-bold">{t.org}</span>
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}
