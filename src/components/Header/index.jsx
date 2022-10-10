import React from 'react'
import { UserAuth } from '../../context/AuthContext'
import SignOut from '../SignOut'

const Header = () => {
  const { user } = UserAuth()

  return (
    <header className='w-full bg-gray-900 p-5 h-1/2'>
        <h1 className='text-center text-white text-2xl'><a href='/'>COMICS QUIZ</a></h1>
        {user ? <SignOut /> : null}
    </header>
  )
}

export default Header