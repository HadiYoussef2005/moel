import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import './home.css'

const Home = () => {
  return (
    <>
        <Navbar />
        <div className="lower-home-container">
            <img src="/MOEL_Logo/MOEL.svg" alt="MOEL" className="MOEL_LOGO" />
        </div>   
    </>
  )
}

export default Home