import React from 'react'
import { useTranslation } from 'react-i18next'

function Testimonials() {
  const { t } = useTranslation('common')
  const testimonials = [
    {
      author: `${t('testimonials.first.name')}`,
      avatar: `${t('testimonials.first.avatar')}`,
      feedback: `${t('testimonials.first.feedback')}`,
    },
    {
      author: `${t('testimonials.second.name')}`,
      avatar: `${t('testimonials.second.avatar')}`,
      feedback: `${t('testimonials.second.feedback')}`,
    },
    {
      author: `${t('testimonials.third.name')}`,
      avatar: `${t('testimonials.third.avatar')}`,
      feedback: `${t('testimonials.third.feedback')}`,
    },
  ]
  console.log(testimonials)
  return (
    <div className='testimonial_area'>
      <div className='container'>
        <div className='row'>
          <div className='col-xl-12'>
            <div className='testmonial_active owl-carousel'>
              {testimonials.map((testimonial, index) => {
                return (
                  <div key={index} className='single_carousel'>
                    <div className='row justify-content-center'>
                      <div className='col-lg-8'>
                        <div className='single_testmonial text-center'>
                          <div className='author_thumb'>
                            <img
                              src={require(testimonial.avatar)}
                              alt={testimonial.author}
                            />
                          </div>
                          <p>{testimonial.feedback}</p>
                          <div className='testmonial_author'>
                            <h3>- {testimonial.author}</h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonials
