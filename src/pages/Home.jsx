import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className='flex justify-center items-center h-[100vh]'>
       <Link to="/login" className='px-[.8rem] py-[.4rem] button'>
           Login
       </Link>
    </div>
  )
}
