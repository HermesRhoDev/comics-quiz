import { useNavigate } from 'react-router'
import { UserAuth } from '../../context/AuthContext'
import { auth } from '../../firebase'

function SignOut() {
    const { logout } = UserAuth()
    const navigate = useNavigate()

    const handleLogout = async () => {
        try {
            await logout(auth)
            navigate('/')
            console.log('You are logged out !')
        } catch (e) {
            alert("Nous ne pouvons actuellement pas vous connecter, veuillez vérifier votre connexion internet puis réessayer.")
        }
    }

    return (
        <button onClick={handleLogout} className='text-white text-lg font-semibold py-3 px-5 border border-white rounded-lg'>Se Déconnecter</button>
    )
}

export default SignOut