import React from 'react';

class Card extends React.PureComponent {

    render() {
        return (
            <div className="col-lg-4 col-md-6">
                <div className="single_destination">
                  <div className="thumb">
                    <img src={this.props.img} alt="" />
                  </div>
                  <div className="content">
                    <p className="d-flex align-items-center">
                      {this.props.name} 
                    </p>
                  </div>
                </div>
              </div>
        )
    };

}

export default Card;