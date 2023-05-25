import React from 'react'
import {Navbar, Header, About, Skills, Projects, ContactForm, Footer} from '../components'
import '../App.css'

const Home = () => {
  return (
    <div className="background flex justify-center text-white">
            <div className="max-w-[1400px] mx-[30px] sm:mx-[50px] pt-[40px] w-full">
                <Navbar />
                <Header/>
                <About />
                <Skills />
                <Projects />
                <ContactForm />
                <Footer />
            </div>
    </div>
  )
}

export default Home