import React from 'react'
import { Link } from 'react-router-dom'
// CONTEXT \\
import { UserAuth } from '../../context/AuthContext'

function Home() {
  const { user } = UserAuth()

  return (
    <div className='w-full bg-blue-400 flex flex-row justify-evenly items-center h-96'>
      {user ? null : <Link to="/signin" className='py-3 px-6 border rounded-lg border-white h-fit text-white text-2xl hover:bg-white hover:text-blue-500 ease-out duration-300'>Sign In</Link>}
      {user ? null : <Link to="/signup" className='py-3 px-6 border rounded-lg border-white h-fit text-white text-2xl hover:bg-white hover:text-blue-500 ease-out duration-300'>Sign Up</Link>}
      {user ? <Link to="/quiz" className='py-3 px-6 border rounded-lg border-white h-fit text-white text-2xl hover:bg-white hover:text-blue-500 ease-out duration-300'>Faire le quiz</Link> : null}
    </div>
  )
}

export default Home