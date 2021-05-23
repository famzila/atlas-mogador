import React from 'react';

class SocialMedia extends React.PureComponent {
  render() {
    return (
      <div className="col-xl-4 col-lg-4 d-none d-lg-block">
        <div className="social_wrap d-flex align-items-center justify-content-end">
          <div className="number">
            <p>
              {' '}
              <i className="fa fa-phone"></i> (+212)02 92 18 25 66
            </p>
          </div>
          <div className="social_links d-none d-xl-block">
            <ul>
              <li>
                <a href="https://www.instagram.com/atlas_mogador" target="_blank" rel="noreferrer">
                  {' '}
                  <i className="fa fa-instagram"></i>{' '}
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/atlas_mogador" target="_blank" rel="noreferrer">
                  {' '}
                  <i className="fa fa-facebook"></i>{' '}
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/atlas_mogador" target="_blank" rel="noreferrer">
                  <i className="fa fa-youtube-play"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
export default SocialMedia;
