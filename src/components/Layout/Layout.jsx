import React, { Fragment, useState } from 'react'
import Header from '../Header/Header'
import HeroSection from '../HeroSection/HeroSection'
import About from '../About/About'
import Portfolio from '../Portfolio/Portfolio'
import Contact from '../Contact/Contact'
import Footer from '../Footer/Footer'
import Sidebar from '../../Sidebar/Sidebar'

const Layout = () => {
  const [open, setOpen] = useState(false)
  const handleClick = () =>{
    setOpen(!open)
  }

  return (
    <Fragment>
      <Header click={handleClick} />
      <Sidebar open={open} click={handleClick} />
      <HeroSection />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </Fragment>
  );
}

export default Layout