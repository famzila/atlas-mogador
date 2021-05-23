import React from 'react';
import SocialMedia from './SocialMedia';

class Header extends React.PureComponent {
  render() {
    return (
      <header>
        <div className="header-area ">
          <div id="sticky-header" className="main-header-area">
            <div className="container-fluid">
              <div className="header_bottom_border">
                <div className="row align-items-center">
                  <div className="col-xl-3 col-lg-3">
                    <div className="logo">
                      <a href="/">
                        <img src={'assets/img/logo-golden.png'} alt="" />
                      </a>
                    </div>
                  </div>
                  <div className="col-xl-5 col-lg-5">
                    <div className="main-menu  d-none d-lg-block">
                      <nav>
                        <ul id="navigation">
                          <li>
                            <a className="active" href="/">
                              home
                            </a>
                          </li>
                          <li>
                            <a className="" href="/booking">
                              Booking
                            </a>
                          </li>
                          <li>
                            <a href="/contact">Contact</a>
                          </li>
                          <li>
                            <a href="/about">About</a>
                          </li>
                          <li>
                            <a href="/blog">Blog</a>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                  <SocialMedia />
                  <div className="seach_icon">
                    <a
                      data-toggle="modal"
                      data-target="#exampleModalCenter"
                      href="/todo"
                    >
                      <i className="fa fa-language"></i>
                    </a>
                  </div>
                  <div className="col-12">
                    <div className="mobile_menu d-block d-lg-none"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
