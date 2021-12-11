import React from 'react'
import Banner from '../components/Banner'

function Booking(props) {
  return (
    <div>
      <Banner t={props.t} />
      <div className='popular_places_area'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-4'>
              <div className='filter_result_wrap'>
                <h3>Filter Result</h3>
                <div className='filter_bordered'>
                  <div className='filter_inner'>
                    <div className='row'>
                      <div className='col-lg-12'>
                        <div className='single_select'>
                          <select>
                            <option data-display='Country'>Country</option>
                            <option value='1'>Africa</option>
                            <option value='2'>canada</option>
                            <option value='4'>USA</option>
                          </select>
                        </div>
                      </div>
                      <div className='col-lg-12'>
                        <div className='single_select'>
                          <select>
                            <option data-display='Travel type'>
                              Travel type
                            </option>
                            <option value='1'>advance</option>
                            <option value='2'>advance</option>
                            <option value='4'>premium</option>
                          </select>
                        </div>
                      </div>
                      <div className='col-lg-12'>
                        <div className='range_slider_wrap'>
                          <span className='range'>Prise range</span>
                          <div id='slider-range'></div>
                          <p>
                            <input type='text' id='amount' readonly />
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className='reset_btn'>
                    <button className='boxed-btn4' type='submit'>
                      Reset
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-8'>
              <div className='row'>
                <div className='col-lg-6 col-md-6'>
                  <div className='single_place'>
                    <div className='thumb'>
                      <img src='assets/img/place/1.png' alt='' />
                      <a href='/home' className='prise'>
                        $500
                      </a>
                    </div>
                    <div className='place_info'>
                      <a href='destination_details.html'>
                        <h3>California</h3>
                      </a>
                      <p>United State of America</p>
                      <div className='rating_days d-flex justify-content-between'>
                        <span className='d-flex justify-content-center align-items-center'>
                          <i className='fa fa-star'></i>
                          <i className='fa fa-star'></i>
                          <i className='fa fa-star'></i>
                          <i className='fa fa-star'></i>
                          <i className='fa fa-star'></i>
                          <a href='/home'>(20 Review)</a>
                        </span>
                        <div className='days'>
                          <i className='fa fa-clock-o'></i>
                          <a href='/home'>5 Days</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-lg-6 col-md-6'>
                  <div className='single_place'>
                    <div className='thumb'>
                      <img src='assets/img/place/2.png' alt='' />
                      <a href='/home' className='prise'>
                        $500
                      </a>
                    </div>
                    <div className='place_info'>
                      <a href='destination_details.html'>
                        <h3>Korola Megna</h3>
                      </a>
                      <p>United State of America</p>
                      <div className='rating_days d-flex justify-content-between'>
                        <span className='d-flex justify-content-center align-items-center'>
                          <i className='fa fa-star'></i>
                          <i className='fa fa-star'></i>
                          <i className='fa fa-star'></i>
                          <i className='fa fa-star'></i>
                          <i className='fa fa-star'></i>
                          <a href='/home'>(20 Review)</a>
                        </span>
                        <div className='days'>
                          <i className='fa fa-clock-o'></i>
                          <a href='/home'>5 Days</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-lg-6 col-md-6'>
                  <div className='single_place'>
                    <div className='thumb'>
                      <img src='assets/img/place/3.png' alt='' />
                      <a href='/home' className='prise'>
                        $500
                      </a>
                    </div>
                    <div className='place_info'>
                      <a href='destination_details.html'>
                        <h3>London</h3>
                      </a>
                      <p>United State of America</p>
                      <div className='rating_days d-flex justify-content-between'>
                        <span className='d-flex justify-content-center align-items-center'>
                          <i className='fa fa-star'></i>
                          <i className='fa fa-star'></i>
                          <i className='fa fa-star'></i>
                          <i className='fa fa-star'></i>
                          <i className='fa fa-star'></i>
                          <a href='/home'>(20 Review)</a>
                        </span>
                        <div className='days'>
                          <i className='fa fa-clock-o'></i>
                          <a href='/home'>5 Days</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-lg-6 col-md-6'>
                  <div className='single_place'>
                    <div className='thumb'>
                      <img src='assets/img/place/4.png' alt='' />
                      <a href='/home' className='prise'>
                        $500
                      </a>
                    </div>
                    <div className='place_info'>
                      <a href='destination_details.html'>
                        <h3>Miami Beach</h3>
                      </a>
                      <p>United State of America</p>
                      <div className='rating_days d-flex justify-content-between'>
                        <span className='d-flex justify-content-center align-items-center'>
                          <i className='fa fa-star'></i>
                          <i className='fa fa-star'></i>
                          <i className='fa fa-star'></i>
                          <i className='fa fa-star'></i>
                          <i className='fa fa-star'></i>
                          <a href='/home'>(20 Review)</a>
                        </span>
                        <div className='days'>
                          <i className='fa fa-clock-o'></i>
                          <a href='/home'>5 Days</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-lg-6 col-md-6'>
                  <div className='single_place'>
                    <div className='thumb'>
                      <img src='assets/img/place/5.png' alt='' />
                      <a href='/home' className='prise'>
                        $500
                      </a>
                    </div>
                    <div className='place_info'>
                      <a href='destination_details.html'>
                        <h3>California</h3>
                      </a>
                      <p>United State of America</p>
                      <div className='rating_days d-flex justify-content-between'>
                        <span className='d-flex justify-content-center align-items-center'>
                          <i className='fa fa-star'></i>
                          <i className='fa fa-star'></i>
                          <i className='fa fa-star'></i>
                          <i className='fa fa-star'></i>
                          <i className='fa fa-star'></i>
                          <a href='/home'>(20 Review)</a>
                        </span>
                        <div className='days'>
                          <i className='fa fa-clock-o'></i>
                          <a href='/home'>5 Days</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-lg-6 col-md-6'>
                  <div className='single_place'>
                    <div className='thumb'>
                      <img src='assets/img/place/6.png' alt='' />
                      <a href='/home' className='prise'>
                        $500
                      </a>
                    </div>
                    <div className='place_info'>
                      <a href='destination_details.html'>
                        <h3>Saintmartine Iceland</h3>
                      </a>
                      <p>United State of America</p>
                      <div className='rating_days d-flex justify-content-between'>
                        <span className='d-flex justify-content-center align-items-center'>
                          <i className='fa fa-star'></i>
                          <i className='fa fa-star'></i>
                          <i className='fa fa-star'></i>
                          <i className='fa fa-star'></i>
                          <i className='fa fa-star'></i>
                          <a href='/home'>(20 Review)</a>
                        </span>
                        <div className='days'>
                          <i className='fa fa-clock-o'></i>
                          <a href='/home'>5 Days</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='row'>
                <div className='col-lg-12'>
                  <div className='more_place_btn text-center'>
                    <a className='boxed-btn4' href='/home'>
                      More Places
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* newletter_area_start  */}
      <div className='newletter_area overlay'>
        <div className='container'>
          <div className='row justify-content-center align-items-center'>
            <div className='col-lg-10'>
              <div className='row align-items-center'>
                <div className='col-lg-5'>
                  <div className='newsletter_text'>
                    <h4>Subscribe Our Newsletter</h4>
                    <p>
                      Subscribe newsletter to get offers and about new places to
                      discover.
                    </p>
                  </div>
                </div>
                <div className='col-lg-7'>
                  <div className='mail_form'>
                    <div className='row no-gutters'>
                      <div className='col-lg-9 col-md-8'>
                        <div className='newsletter_field'>
                          <input type='email' placeholder='Your mail' />
                        </div>
                      </div>
                      <div className='col-lg-3 col-md-4'>
                        <div className='newsletter_btn'>
                          <button className='boxed-btn4 ' type='submit'>
                            Subscribe
                          </button>
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
      {/* newletter_area_end */}
      <div className='recent_trip_area'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-6'>
              <div className='section_title text-center mb_70'>
                <h3>Recent Trips</h3>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-4 col-md-6'>
              <div className='single_trip'>
                <div className='thumb'>
                  <img src='assets/img/trip/1.png' alt='' />
                </div>
                <div className='info'>
                  <div className='date'>
                    <span>Oct 12, 2019</span>
                  </div>
                  <a href='/home'>
                    <h3>Journeys Are Best Measured In New Friends</h3>
                  </a>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div className='single_trip'>
                <div className='thumb'>
                  <img src='assets/img/trip/2.png' alt='' />
                </div>
                <div className='info'>
                  <div className='date'>
                    <span>Oct 12, 2019</span>
                  </div>
                  <a href='/home'>
                    <h3>Journeys Are Best Measured In New Friends</h3>
                  </a>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div className='single_trip'>
                <div className='thumb'>
                  <img src='assets/img/trip/3.png' alt='' />
                </div>
                <div className='info'>
                  <div className='date'>
                    <span>Oct 12, 2019</span>
                  </div>
                  <a href='/home'>
                    <h3>Journeys Are Best Measured In New Friends</h3>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Booking
