import React from 'react';

class BigCard extends React.PureComponent {
  render() {
    return (
      <div className="col-lg-4 col-md-6">
        <div className="single_place">
          <div className="thumb">
            <img
              src={this.props.card.img}
              alt=""
              width="360px"
              height="240px"
            />
            <a href="/todo" className="prise">
              ${this.props.card.price}
            </a>
          </div>
          <div className="place_info">
            <a href="destination_details.html">
              <h3> {this.props.card.name}</h3>
            </a>
            <p>Essaouira, Morocco</p>
            <div className="rating_days d-flex justify-content-between">
              <span className="d-flex justify-content-center align-items-center">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <a href="/todo">(20 Review)</a>
              </span>
              <div className="days">
                <i className="fa fa-clock-o"></i>
                <a href="/todo">{this.props.card.days} Days</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BigCard;
