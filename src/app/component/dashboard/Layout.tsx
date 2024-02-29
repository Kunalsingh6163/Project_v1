import React from 'react'
import Appbar from '../Appbar/Appbar'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div>
        <Appbar />
            <Outlet />
        <Footer />
        
    </div>
  )
}

export default Layout