import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'

const LandingLayout = () => {
  return (
    <main  className='main-landing-conmtainer-wrapper  relative '> 
        <div className='sticky top-0  z-[1]'>
           <Navbar/>
        </div>
        <div className='relative z-[0]'>
            <Outlet/>
        </div>
    </main>
  )
}

export default LandingLayout
