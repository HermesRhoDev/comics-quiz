import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../../context/AuthContext'
// TOAST \\
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css';
import { toastConfig } from '../../utils/ToastConfig/toastConfig';

const SignIn = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const { signIn } = UserAuth()

  const navigate = useNavigate()

  const [validation, setValidation] = useState("")

  const notifyError = (errorNotification) => toast.error(errorNotification, {toastConfig});

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    try {
      await signIn(email, password)
      toast.success('Bienvenue !', {toastConfig})
      navigate('/')
    } catch (e) {
      setError(e.message)
      if(e.code === "auth/wrong-password") {
        setValidation("Votre email ou mot de passe est incorrect.")
        notifyError('Email ou mot de passe incorrect.')
      }
      if(e.code === "auth/user-not-found") {
        setValidation("Compte inexistant")
        notifyError("Compte inexistant.")
      }
      console.dir(e)
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
      {validation ? <p className='my-2 w-full bg-red-600 text-white font-semibold text-center py-3 text-xl'>{validation}</p> : null}
      <button className='border border-blue-500 bg-blue-600 hover:bg-blue-500 w-full p-4 my-2 text-white' type='submit'>
        Sign In
      </button>
    </form>
    <div>
      <Link to='/forget-password'>Mot de passe oublié ?</Link>
    </div>
  </div>
  )
}

export default SignIn