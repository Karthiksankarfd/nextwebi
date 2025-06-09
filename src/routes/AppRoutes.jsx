import React from 'react'
import { Route,Routes } from 'react-router-dom'
import LandingPage from '../pages/LandingPage'
import LandingLayout from '../layout/LandingLayout'
import Navbar from '../components/Navbar'
import BlogsPage from '../pages/BlogsPage'

const   AppRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<LandingLayout/>}>
                <Route index element={<LandingPage/>}/>
                <Route path='aboutus' element={<h1>This is about us</h1>}/>
                <Route path='blogs/:title' element={<BlogsPage/>}/>
        </Route>
    </Routes>
  )
}

export default AppRoutes
