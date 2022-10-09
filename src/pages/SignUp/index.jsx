import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { UserAuth } from '../../context/AuthContext'
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('')
  const { createUser } = UserAuth();

  const navigate = useNavigate()

  const [validation, setValidation] = useState("")

  const inputs = useRef([])
  const addInputs = element => {
    if(element && !inputs.current.includes(element)) {
      inputs.current.push(element)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if(inputs.current[1].value.length < 12) {
      setValidation("12 Character minimum")
      return
    }

    setError('')

    try {
      await createUser(email, password)
      setValidation("")
      navigate('/')
    } catch (e) {
      setError(e.message);
      if(e.code === "auth/invalid-email") {
        setValidation("Le format de votre email n'est pas valide !")
      }
      if(e.code === "auth/email-already-in-use") {
        setValidation("Email déjà utilisé !")
      }
    }
  };

  const { user } = UserAuth()

  if(user) {
    navigate('/')
  }

  return (
    <div className='max-w-[700px] mx-auto my-16 p-4'>
      <div>
        <h1 className='text-2xl font-bold py-2'>Sign up for a free account</h1>
        <p className='py-2'>
          Already have an account yet?{' '}
          <Link to='/signin' className='underline'>
            Sign in.
          </Link>
        </p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className='flex flex-col py-2'>
          <label className='py-2 font-medium'>Email Address</label>
          <input
            ref={addInputs}
            onChange={(e) => setEmail(e.target.value)}
            className='border p-3'
            type='email'
          />
        </div>
        <div className='flex flex-col py-2'>
          <label className='py-2 font-medium'>Password</label>
          <input
            ref={addInputs}
            onChange={(e) => setPassword(e.target.value)}
            className='border p-3'
            type='password'
          />
        </div>
        <p className='my-1 text-red-600'>{validation}</p>
        <button className='border border-blue-500 bg-blue-600 hover:bg-blue-500 w-full p-4 my-2 text-white'>
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default SignUp