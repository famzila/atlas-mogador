import React from 'react';

class Banner extends React.PureComponent {
  render() {
    return (
      <div className="slider_area">
        <div className="slider_active owl-carousel">
          <div className="single_slider  d-flex align-items-center slider_bg_1 overlay">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-xl-12 col-md-12">
                  <div className="slider_text text-center">
                    <h3>Essaouira</h3>
                    <p>Live a unique experience ...</p>
                    <a href="/todo" className="boxed-btn3">
                      Explore Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="single_slider  d-flex align-items-center slider_bg_2 overlay">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-xl-12 col-md-12">
                  <div className="slider_text text-center">
                    <h3>Essaouira</h3>
                    <p>
                      Live a genuine and authentic Moroccan experience. Try
                      special Moroccan meals, activities, and souvenirs.
                    </p>
                    <a href="/todo" className="boxed-btn3">
                      Explore Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="single_slider  d-flex align-items-center slider_bg_3 overlay">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-xl-12 col-md-12">
                  <div className="slider_text text-center">
                    <h3>Essaouira</h3>
                    <p>Live a unique souvenirs ...</p>
                    <a href="/todo" className="boxed-btn3">
                      Explore Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="single_slider  d-flex align-items-center slider_bg_4 overlay">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-xl-12 col-md-12">
                  <div className="slider_text text-center">
                    <h3>Essaouira</h3>
                    <p>Experiment new culture, new places, new meals, ...</p>
                    <a href="/todo" className="boxed-btn3">
                      Explore Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="single_slider  d-flex align-items-center slider_bg_5 overlay">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-xl-12 col-md-12">
                  <div className="slider_text text-center">
                    <h3>Essaouira</h3>
                    <p>Live unforgettable moments...</p>
                    <a href="/todo" className="boxed-btn3">
                      Explore Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Banner;
