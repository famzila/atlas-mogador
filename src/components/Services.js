import React from 'react';
import BigCard from './BigCard';
import Card from './Card';

class Services extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      bigCards: [
        {
          name: 'Tasort',
          price: 50,
          days: 5,
          img: 'assets/img/place/villa1.png',
        },
        {
          name: 'Villa atlas',
          price: 100,
          days: 5,
          img: 'assets/img/place/villa2.png',
        },
        {
          name: 'Dar bono',
          price: 100,
          days: 3,
          img: 'assets/img/place/villa3.png',
        },
      ],
    };
  }

  render() {
    return (
      <div>
        <div className="popular_destination_area">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <div className="section_title text-center mb_70">
                  <h3>Popular Activities</h3>
                  <p>
                    Experience real moroccan activities, live different
                    experience, unique and authentic moments you'll never
                    forget.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <Card name="Surf" img="assets/img/destination/1.png" />
              <Card name="Henna" img="assets/img/destination/2.png" />
              <Card name="Unique meals" img="assets/img/destination/3.png" />
              <Card name="Golf" img="assets/img/destination/4.png" />
              <Card name="Hammam" img="assets/img/destination/5.png" />
              <Card name="Souvenirs" img="assets/img/destination/6.png" />
            </div>
          </div>
        </div>
        {/* Show Video  */}
        <div className="video_area video_bg overlay">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="video_wrap text-center">
                  <h3>Enjoy Video</h3>
                  <div className="video_icon">
                    <a
                      className="popup-video video_play_button"
                      href="https://www.youtube.com/watch?v=f59dDEk57i0"
                    >
                      <i className="fa fa-play"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Popular places */}
        <div className="popular_places_area">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <div className="section_title text-center mb_70">
                  <h3>Popular Places</h3>
                  <p>
                    Suffered alteration in some form, by injected humour or good
                    day randomised booth anim 8-bit hella wolf moon beard words.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              {this.state.bigCards.map((card, index) => (
                <BigCard key={index} card={card} />
              ))}
            </div>
            <div className="row center">
              <div className="col-lg-12">
                <div className="more_place_btn text-center">
                  <a className="boxed-btn4" href="/places">
                    More Places
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="travel_variation_area">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className="single_travel text-center">
                  <div className="icon">
                    <img
                      src="assets/img/svg_icon/comfortable.svg"
                      alt="Comfortable journey"
                      width="50px"
                      height="50px"
                    />
                  </div>
                  <h3>Comfortable Journey</h3>
                  <p>
                    A wonderful serenity has taken to the possession of my
                    entire soul.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="single_travel text-center">
                  <div className="icon">
                    <img
                      src="assets/img/svg_icon/luxvilla.svg"
                      alt="Luxurious villa"
                      width="50px"
                      height="50px"
                    />
                  </div>
                  <h3>Authentic places</h3>
                  <p>
                    A wonderful serenity has taken to the possession of my
                    entire soul.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="single_travel text-center">
                  <div className="icon">
                    <img
                      src="assets/img/svg_icon/realexperience.svg"
                      alt="Real experience"
                      width="50px"
                      height="50px"
                    />
                  </div>
                  <h3>Real experience</h3>
                  <p>
                    A wonderful serenity has taken to the possession of my
                    entire soul.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Services;
