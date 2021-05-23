import React from 'react';
import Activities from '../components/Activities';
import Testimonials from '../components/Testimonials';

class About extends React.PureComponent {
  render() {
    return (
      <div>
        <div className="bradcam_area slider_bg_1">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="bradcam_text text-center">
                  <h3>About Us</h3>
                  <p>Our mission is to make you live a genuine and authentic Moroccan experience. Try special Moroccan meals, activities, and souvenirs.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="about_story">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="story_heading">
                  <h3>Our Story</h3>
                </div>
                <div className="row">
                  <div className="col-lg-11 offset-lg-1">
                    <div className="story_info">
                      <div className="row">
                        <div className="col-lg-9">
                          <p>
                            Consulting represents success at realizing the
                            company is going in the wrong direction. The only
                            time the company fails is when it is not possible to
                            do a turnaround anymore. We help companies pivot
                            into more profitable directions where they can
                            expand and grow. It is inevitable that companies
                            will end up making a few mistakes; we help them
                            correct these mistakes.
                          </p>
                          <p>
                            Consulting represents success at realizing the
                            company is going in the wrong direction. The only
                            time the company fails is when it is not possible to
                            do a turnaround anymore. We help companies pivot
                            into more profitable directions where they can
                            expand and grow. It is inevitable that companies
                            will end up making a few mistakes; we help them
                            correct these mistakes.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="story_thumb">
                      <div className="row">
                        <div className="col-lg-5 col-md-6">
                          <div className="thumb padd_1">
                            <img src="img/about/1.png" alt="" />
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                          <div className="thumb">
                            <img src="img/about/2.png" alt="" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="counter_wrap">
                      <div className="row">
                        <div className="col-lg-4 col-md-4">
                          <div className="single_counter text-center">
                            <h3 className="counter">378</h3>
                            <p>Tour has done successfully</p>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-4">
                          <div className="single_counter text-center">
                            <h3 className="counter">30</h3>
                            <p>Yearly tour arrange</p>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-4">
                          <div className="single_counter text-center">
                            <h3 className="counter">2263</h3>
                            <p>Happy Clients</p>
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
    );
  }
}

export default About;