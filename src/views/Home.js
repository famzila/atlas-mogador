import React from 'react'
import Activities from '../components/Activities'
import Banner from '../components/Banner'
import Services from '../components/Services'
import Testimonials from '../components/Testimonials'

function Home(props) {
  return (
    <>
      <Banner t={props.t} />
      <Services t={props.t} />
      <Testimonials t={props.t} />
      <Activities t={props.t} />
    </>
  )
}

export default Home
