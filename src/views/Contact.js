import React from 'react'

function Contact(props) {
  return (
    <section className='contact-section'>
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <h2 className='contact-title'>{props.t('contact.sectionTitle')}</h2>
          </div>
          <div className='col-lg-8'>
            <form
              className='form-contact contact_form'
              action='contact_process.php'
              method='post'
              id='contactForm'
              novalidate='novalidate'
            >
              <div className='row'>
                <div className='col-12'>
                  <div className='form-group'>
                    <textarea
                      className='form-control w-100'
                      name='message'
                      id='message'
                      cols='30'
                      rows='9'
                      onfocus="this.placeholder = ''"
                      onBlur="this.placeholder = 'Enter Message'"
                      placeholder=' Enter Message'
                    ></textarea>
                  </div>
                </div>
                <div className='col-sm-6'>
                  <div className='form-group'>
                    <input
                      className='form-control valid'
                      name='name'
                      id='name'
                      type='text'
                      onfocus="this.placeholder = ''"
                      onBlur="this.placeholder = 'Enter your name'"
                      placeholder='Enter your name'
                    />
                  </div>
                </div>
                <div className='col-sm-6'>
                  <div className='form-group'>
                    <input
                      className='form-control valid'
                      name='email'
                      id='email'
                      type='email'
                      onfocus="this.placeholder = ''"
                      onBlur="this.placeholder = 'Enter email address'"
                      placeholder='Email'
                    />
                  </div>
                </div>
                <div className='col-12'>
                  <div className='form-group'>
                    <input
                      className='form-control'
                      name='subject'
                      id='subject'
                      type='text'
                      onfocus="this.placeholder = ''"
                      onBlur="this.placeholder = 'Enter Subject'"
                      placeholder='Enter Subject'
                    />
                  </div>
                </div>
              </div>
              <div className='form-group mt-3'>
                <button
                  type='submit'
                  className='button button-contactForm boxed-btn'
                >
                  Send
                </button>
              </div>
            </form>
          </div>
          <div className='col-lg-3 offset-lg-1'>
            <div className='media contact-info'>
              <span className='contact-info__icon'>
                <i className='ti-home'></i>
              </span>
              <div className='media-body'>
                <h3>{props.t('contact.address')}.</h3>
                <p>{props.t('contact.subAddress')}</p>
              </div>
            </div>
            <div className='media contact-info'>
              <span className='contact-info__icon'>
                <i className='ti-tablet'></i>
              </span>
              <div className='media-body'>
                <h3>{props.t('contact.phone')}</h3>
                <p>{props.t('contact.distensibilities')}</p>
              </div>
            </div>
            <div className='media contact-info'>
              <span className='contact-info__icon'>
                <i className='ti-email'></i>
              </span>
              <div className='media-body'>
                <h3>{props.t('contact.email')}</h3>
                <p>{props.t('contact.emailMessage')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
