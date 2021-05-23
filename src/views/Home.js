import React from 'react';
import Activities from '../components/Activities';
import Banner from '../components/Banner';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';

class Home extends React.PureComponent {
  render() {
    return (
      <div>
        <Banner />
        <Services />
        <Testimonials />
        <Activities />
      </div>
    );
  }
}

export default Home;
