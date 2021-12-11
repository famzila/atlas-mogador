import React from 'react'
import { useTranslation } from 'react-i18next'

function Testimonials() {
  const { t } = useTranslation('common')
  const testimonials = [
    {
      author: `${t('testimonials.first.author')}`,
      // avatar: require(`${t('testimonials.first.avatar')}`).default,
      feedback: `${t('testimonials.first.feedback')}`,
    },
    {
      author: `${t('testimonials.second.author')}`,
      // avatar: require(`${t('testimonials.first.avatar')}`).default,
      feedback: `${t('testimonials.second.feedback')}`,
    },
    {
      author: `${t('testimonials.third.author')}`,
      // avatar: require(`${t('testimonials.first.avatar')}`).default,
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
                              src='assets/img/testmonial/author1.jpg'
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
