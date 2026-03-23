import React from 'react'
import Sidebar from '../components/sidebar'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'

const Home = () => {
  return (
    <div className=' flex'>
        <div>
            <Sidebar/>
        </div>
        <div className=' w-full'>
            <Header/>
            <Outlet/>
        </div>
    </div>
  )
}

export default Home