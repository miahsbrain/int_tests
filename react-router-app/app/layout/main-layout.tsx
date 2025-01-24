import React from 'react'
import { Outlet } from 'react-router'
import Footer from '~/components/Footer'
import Header from '~/components/Header'

function mainLayout() {
  return (
    <div className='min-h-screen min-w-screen'>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default mainLayout