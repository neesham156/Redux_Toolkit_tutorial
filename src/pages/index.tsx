import Navbar from '@/components/navbar'
import UserDetail from '@/components/userdetail'

import React from 'react'

export default function index() {
  return (
    <div >
      <div className='fixed w-full top-0'> 
      <Navbar/>
      </div>
      <div className='bg-black min-h-screen'>
      <UserDetail/>
      </div>
    </div>
  )
}
