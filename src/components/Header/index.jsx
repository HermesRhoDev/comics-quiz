import React from 'react'
import { Link } from 'react-router-dom'
import { UserAuth } from '../../context/AuthContext'
import SignOut from '../SignOut'

const Header = () => {
  const { user } = UserAuth()

  return (
    <header className='w-full bg-gray-900 p-5 h-1/2'>
      <div className='w-full text-center'>
        <Link to='/' className='text-white text-2xl'>COMICS QUIZ</Link>
      </div>
      {user ? <SignOut /> : null}
    </header>
  )
}

export default Header