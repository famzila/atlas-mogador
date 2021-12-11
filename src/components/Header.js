import React from 'react'

import Country from '../layouts/Country'
import SocialMedia from '../layouts/SocialMedia'

function Header(props) {
  const links = [
    { name: `${props.t('routes.home')}`, link: '/' },
    { name: `${props.t('routes.booking')}`, link: '/booking' },
    { name: `${props.t('routes.contact')}`, link: '/contact' },
    { name: `${props.t('routes.about')}`, link: '/about' },
    { name: `${props.t('routes.blog')}`, link: '/blog' },
  ]

  return (
    <header className='header-area'>
      <div id='sticky-header' className='main-header-area'>
        <div className='container-fluid'>
          <div className='header_bottom_border'>
            <div className='row align-items-center'>
              <div className='col-xl-3 col-lg-3'>
                <div className='logo'>
                  <a href='/'>
                    <img src={'assets/img/logo-golden.png'} alt='' />
                  </a>
                </div>
              </div>
              <div className='col-xl-4 col-lg-4'>
                <div className='main-menu  d-none d-lg-block'>
                  <nav>
                    <ul id='navigation'>
                      {links.map((elt) => (
                        <li key={elt.name}>
                          <a className='active' href={elt.link}>
                            {elt.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </nav>
                </div>
              </div>
              <SocialMedia />
              <Country setLanguage={props.switchLanguage} />
              <div className='col-12'>
                <div className='mobile_menu d-block d-lg-none'></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
