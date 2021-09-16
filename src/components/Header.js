import React from 'react';
import Country from '../layouts/Country';
import SocialMedia from '../layouts/SocialMedia';

class Header extends React.PureComponent {
  links = [
    { name: 'Home', link: '/' },
    { name: 'Booking', link: '/booking' },
    { name: 'Contact', link: '/contact' },
    { name: 'About', link: '/about' },
    { name: 'Blog', link: '/blog' },
  ];
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
                  <div className="col-xl-4 col-lg-4">
                    <div className="main-menu  d-none d-lg-block">
                      <nav>
                        <ul id="navigation">
                          {this.links.map((elt) => (
                            <li key={elt.name}>
                              <a className="active" href={elt.link}>
                                {elt.name}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </nav>
                    </div>
                  </div>
                  <SocialMedia />
                  <Country />
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
