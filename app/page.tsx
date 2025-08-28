import React from 'react'
import AboutSection from './about/page'
import HeroSection from './hero/page'
import ServicesSection from './sercvices/page'
import TestimonialsSection from './testimonials/page'
import ContactSection from './contact/page'
import Footer from './footer/page'

function page() {
  return (
    <div>
      <HeroSection/>
      <ServicesSection/>
      <AboutSection/>
      <TestimonialsSection/>
      <ContactSection/>
      <Footer/>
    </div>
  )
}

export default page