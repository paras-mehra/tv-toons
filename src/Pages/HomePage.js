import React from 'react'
import Slider from '../Components/Slider'
import Cards from '../Components/Cards'
import Footer from '../Components/Footer'
import Nav from "../Components/Nav"

function HomePage() {
  return (
    <>
     <Nav/>
      <Slider/>
      <Cards />
      <Footer/>
    </>
  )
}

export default HomePage