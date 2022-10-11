import { sendPasswordResetEmail } from 'firebase/auth';
import {React, useState} from 'react'
import { auth } from '../../firebase'
import { Link } from 'react-router-dom'
// TOAST \\
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css';
import { toastConfig } from '../../utils/ToastConfig/toastConfig';

const ForgetPassword = () => {
    const [email, setEmail] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()

        if(email != "") {
            try {
                await sendPasswordResetEmail(auth, email).then(() => {
                    toast.success('Un email vous a été envoyé !', toastConfig)
                })
            } catch (error) {
                if(error.code === "auth/user-not-found") {
                    toast.error('Cet email n\'existe pas !', toastConfig)
                }
            }
        }
    };

    return (
        <div className='max-w-[700px] mx-auto my-16 p-4'>
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
            <Link to='/'>Accueil</Link>
        </div>
    )
}

export default ForgetPassword