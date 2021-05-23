import React from 'react';

class Footer extends React.PureComponent {
  render() {
    return (
      <footer className="footer">
        <div className="footer_top">
          <div className="container">
            <div className="row">
              <div className="col-xl-4 col-md-6 col-lg-4 ">
                <div className="footer_widget">
                  <div className="footer_logo">
                  <a href="/home">
                        <img src={'assets/img/logo-door.png'} alt="" />
                      </a>
                  </div>
                  <p>
                    Dar Tassourt <br /> Essaouira, Morocco
                    <br />
                    <a href="/todo">+121 6 36 78 26 25</a> <br />
                    <a href="/todo">atlas.mogador@contact.com</a>
                  </p>
                  <div className="socail_links">
                    <ul>
                      <li>
                        <a href="/todo">
                          <i className="ti-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a href="/todo">
                          <i className="fa fa-instagram"></i>
                        </a>
                      </li>
                      <li>
                        <a href="/todo">
                          <i className="fa fa-youtube-play"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-2 col-md-6 col-lg-2">
                <div className="footer_widget">
                  <h3 className="footer_title">Company</h3>
                  <ul className="links">
                    <li>
                      <a href="/booking">Booking</a>
                    </li>
                    <li>
                      <a href="/about"> About</a>
                    </li>
                    <li>
                      <a href="/contact"> Contact</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-3 col-md-6 col-lg-3">
                <div className="footer_widget">
                  <h3 className="footer_title">Popular programs</h3>
                  <ul className="links double_links">
                    <li>
                      <a href="/todo">Pro. A</a>
                    </li>
                    <li>
                      <a href="/todo">Pro. B</a>
                    </li>
                    <li>
                      <a href="/todo">Pro. C</a>
                    </li>
                    <li>
                      <a href="/todo">Pro. D</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-3 col-md-6 col-lg-3">
                <div className="footer_widget">
                  <h3 className="footer_title">Instagram</h3>
                  <div className="instagram_feed">
                    <div className="single_insta">
                      <a href="/todo">
                        <img src="assets/img/instagram/1.png" alt="" />
                      </a>
                    </div>
                    <div className="single_insta">
                      <a href="/todo">
                        <img src="assets/img/instagram/2.png" alt="" />
                      </a>
                    </div>
                    <div className="single_insta">
                      <a href="/todo">
                        <img src="assets/img/instagram/3.png" alt="" />
                      </a>
                    </div>
                    <div className="single_insta">
                      <a href="/todo">
                        <img src="assets/img/instagram/4.png" alt="" />
                      </a>
                    </div>
                    <div className="single_insta">
                      <a href="/todo">
                        <img src="assets/img/instagram/5.png" alt="" />
                      </a>
                    </div>
                    <div className="single_insta">
                      <a href="/todo">
                        <img src="assets/img/instagram/6.png" alt="" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copy-right_text">
          <div className="container">
            <div className="footer_border"></div>
            <div className="row">
              <div className="col-xl-12">
                <p className="copy_right text-center">
                  Copyright &copy;
                  <script>document.write(new Date().getFullYear());</script> All
                  rights reserved | This website is made with{' '}
                  <i className="fa fa-heart-o" aria-hidden="true"></i> by{' '}
                  <a href="https://fam-front.com" target="_blank" rel="noreferrer">
                    FAM
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
