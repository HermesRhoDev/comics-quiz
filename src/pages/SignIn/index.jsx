import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../../context/AuthContext'

const SignIn = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const { signIn } = UserAuth()

  const navigate = useNavigate()

  const [validation, setValidation] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    try {
      await signIn(email, password)
      navigate('/')
    } catch (e) {
      setError(e.message)
      if(e.code === "auth/wrong-password") {
        setValidation("Votre email ou mot de passe est incorrect !")
      }
    }
  }

  const { user } = UserAuth()

  if(user) {
    navigate('/')
  }

  return (
    <div className='max-w-[700px] mx-auto my-16 p-4'>
    <div>
      <h1 className='text-2xl font-bold py-2'>
        Sign in to your account
      </h1>
      <p className='py-2'>
        Don't have an account yet ?
        <Link to='/signup' className='underline'> Sign Up</Link>
      </p>
    </div>
    <form onSubmit={handleSubmit}>
      <div className='flex flex-col py-2'>
        <label htmlFor="email" className='py-2 font-medium'>Email Address</label>
        <input onChange={(e) => setEmail(e.target.value)} className='border p-3' type="email" name="email" id="signup-email" />
      </div>
      <div className='flex flex-col py-2'>
        <label htmlFor="password" className='py-2 font-medium'>Password</label>
        <input onChange={(e) => setPassword(e.target.value)} className='border p-3' type="password" name="password" id="signup-password" />
      </div>
      <p className='my-1 text-red-600'>{validation}</p>
      <button className='border border-blue-500 bg-blue-600 hover:bg-blue-500 w-full p-4 my-2 text-white' type='submit'>
        Sign In
      </button>
    </form>
  </div>
  )
}

export default SignIn