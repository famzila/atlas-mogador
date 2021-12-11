import React from 'react'
import Activities from '../components/Activities'
import Testimonials from '../components/Testimonials'

function About(props) {
  return (
    <div>
      <div className='bradcam_area slider_bg_1'>
        <div className='container'>
          <div className='row'>
            <div className='col-xl-12'>
              <div className='bradcam_text text-center'>
                <h3>About Us</h3>
                <p>
                  Our mission is to make you live a genuine and authentic
                  Moroccan experience. Try special Moroccan meals, activities,
                  and souvenirs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='about_story'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='story_heading'>
                <h3>Our Story</h3>
              </div>
              <div className='row'>
                <div className='col-lg-11 offset-lg-1'>
                  <div className='story_info'>
                    <div className='row'>
                      <div className='col-lg-9'>
                        <p>
                          Consulting represents success at realizing the company
                          is going in the wrong direction. The only time the
                          company fails is when it is not possible to do a
                          turnaround anymore. We help companies pivot into more
                          profitable directions where they can expand and grow.
                          It is inevitable that companies will end up making a
                          few mistakes; we help them correct these mistakes.
                        </p>
                        <p>
                          Consulting represents success at realizing the company
                          is going in the wrong direction. The only time the
                          company fails is when it is not possible to do a
                          turnaround anymore. We help companies pivot into more
                          profitable directions where they can expand and grow.
                          It is inevitable that companies will end up making a
                          few mistakes; we help them correct these mistakes.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className='story_thumb'>
                    <div className='row'>
                      <div className='col-lg-5 col-md-6'>
                        <div className='thumb padd_1'>
                          <img src='assets/img/about/1.png' alt='' />
                        </div>
                      </div>
                      <div className='col-lg-6 col-md-6'>
                        <div className='thumb'>
                          <img src='assets/img/about/2.png' alt='' />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='counter_wrap'>
                    <div className='row'>
                      <div className='col-lg-4 col-md-4'>
                        <div className='single_counter text-center'>
                          <h3 className='counter'>378</h3>
                          <p>Tour has done successfully</p>
                        </div>
                      </div>
                      <div className='col-lg-4 col-md-4'>
                        <div className='single_counter text-center'>
                          <h3 className='counter'>30</h3>
                          <p>Yearly tour arrange</p>
                        </div>
                      </div>
                      <div className='col-lg-4 col-md-4'>
                        <div className='single_counter text-center'>
                          <h3 className='counter'>2263</h3>
                          <p>Happy Clients</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='section-top-border'>
                    <h3 className='mb-30'>We've welcomed so far...</h3>
                    <div className='progress-table-wrap'>
                      <div className='progress-table'>
                        <div className='table-head'>
                          <div className='serial'>#</div>
                          <div className='country'>Countries</div>
                          <div className='visit'>Visits</div>
                          <div className='percentage'>Percentages</div>
                        </div>
                        <div className='table-row'>
                          <div className='serial'>01</div>
                          <div className='country'>
                            {' '}
                            <img src='assets/img/elements/f1.jpg' alt='flag' />
                            Canada
                          </div>
                          <div className='visit'>645032</div>
                          <div className='percentage'>
                            <div className='progress'>
                              <div
                                className='progress-bar color-1'
                                role='progressbar'
                                style={{ width: '80%' }}
                                aria-valuenow='80'
                                aria-valuemin='0'
                                aria-valuemax='100'
                              ></div>
                            </div>
                          </div>
                        </div>
                        <div className='table-row'>
                          <div className='serial'>02</div>
                          <div className='country'>
                            {' '}
                            <img src='assets/img/elements/f2.jpg' alt='flag' />
                            Canada
                          </div>
                          <div className='visit'>645032</div>
                          <div className='percentage'>
                            <div className='progress'>
                              <div
                                className='progress-bar color-2'
                                role='progressbar'
                                style={{ width: '30%' }}
                                aria-valuenow='30'
                                aria-valuemin='0'
                                aria-valuemax='100'
                              ></div>
                            </div>
                          </div>
                        </div>
                        <div className='table-row'>
                          <div className='serial'>03</div>
                          <div className='country'>
                            {' '}
                            <img src='assets/img/elements/f3.jpg' alt='flag' />
                            Canada
                          </div>
                          <div className='visit'>645032</div>
                          <div className='percentage'>
                            <div className='progress'>
                              <div
                                className='progress-bar color-3'
                                role='progressbar'
                                style={{ width: '55%' }}
                                aria-valuenow='55'
                                aria-valuemin='0'
                                aria-valuemax='100'
                              ></div>
                            </div>
                          </div>
                        </div>
                        <div className='table-row'>
                          <div className='serial'>04</div>
                          <div className='country'>
                            {' '}
                            <img src='assets/img/elements/f4.jpg' alt='flag' />
                            Canada
                          </div>
                          <div className='visit'>645032</div>
                          <div className='percentage'>
                            <div className='progress'>
                              <div
                                className='progress-bar color-4'
                                role='progressbar'
                                style={{ width: '60%' }}
                                aria-valuenow='60'
                                aria-valuemin='0'
                                aria-valuemax='100'
                              ></div>
                            </div>
                          </div>
                        </div>
                        <div className='table-row'>
                          <div className='serial'>05</div>
                          <div className='country'>
                            {' '}
                            <img src='assets/img/elements/f5.jpg' alt='flag' />
                            Canada
                          </div>
                          <div className='visit'>645032</div>
                          <div className='percentage'>
                            <div className='progress'>
                              <div
                                className='progress-bar color-5'
                                role='progressbar'
                                aria-valuenow='40'
                                aria-valuemin='0'
                                aria-valuemax='100'
                              ></div>
                            </div>
                          </div>
                        </div>
                        <div className='table-row'>
                          <div className='serial'>06</div>
                          <div className='country'>
                            {' '}
                            <img src='assets/img/elements/f6.jpg' alt='flag' />
                            Canada
                          </div>
                          <div className='visit'>645032</div>
                          <div className='percentage'>
                            <div className='progress'>
                              <div
                                className='progress-bar color-6'
                                role='progressbar'
                                style={{ width: '70%' }}
                                aria-valuenow='70'
                                aria-valuemin='0'
                                aria-valuemax='100'
                              ></div>
                            </div>
                          </div>
                        </div>
                        <div className='table-row'>
                          <div className='serial'>07</div>
                          <div className='country'>
                            {' '}
                            <img src='assets/img/elements/f7.jpg' alt='flag' />
                            Canada
                          </div>
                          <div className='visit'>645032</div>
                          <div className='percentage'>
                            <div className='progress'>
                              <div
                                className='progress-bar color-7'
                                role='progressbar'
                                style={{ width: '30%' }}
                                aria-valuenow='30'
                                aria-valuemin='0'
                                aria-valuemax='100'
                              ></div>
                            </div>
                          </div>
                        </div>
                        <div className='table-row'>
                          <div className='serial'>08</div>
                          <div className='country'>
                            {' '}
                            <img src='assets/img/elements/f8.jpg' alt='flag' />
                            Canada
                          </div>
                          <div className='visit'>645032</div>
                          <div className='percentage'>
                            <div className='progress'>
                              <div
                                className='progress-bar color-8'
                                role='progressbar'
                                style={{ width: '60%' }}
                                aria-valuenow='60'
                                aria-valuemin='0'
                                aria-valuemax='100'
                              ></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Testimonials />
      <Activities />
    </div>
  )
}

export default About
