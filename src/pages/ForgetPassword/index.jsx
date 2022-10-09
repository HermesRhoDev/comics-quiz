import { sendPasswordResetEmail } from 'firebase/auth';
import {React, useState} from 'react'
import { auth } from '../../firebase'

const ForgetPassword = () => {
    const [email, setEmail] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()

        if(email != "") {
            try {
                await sendPasswordResetEmail(auth, email).then(() => {
                    window.alert("Email envoyé !")
                })
            } catch (error) {
                if(error.code === "auth/user-not-found") {
                    window.alert("Email existe pas")
                }
            }
        }
    };

    return (
        <div>
        <form onSubmit={handleSubmit}>
            <div className='flex flex-col py-2'>
            <label className='py-2 font-medium'>Email Address</label>
            <input
                onChange={(e) => setEmail(e.target.value)}
                className='border p-3'
                type='email'
            />
            </div>
            <button className='border border-blue-500 bg-blue-600 hover:bg-blue-500 w-full p-4 my-2 text-white'>
                Valider
            </button>
        </form>
        </div>
    )
}

export default ForgetPassword