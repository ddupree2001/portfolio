import React from 'react'
import {Navbar, Header} from '../components'
import '../App.css'

const Home = () => {
  return (
    <div className="background flex justify-center text-white">
            <div className="max-w-[1400px] mx-[30px] sm:[50px] py-[40px] w-full">
                <Navbar />
                <Header/>
            </div>
    </div>
  )
}

export default Home