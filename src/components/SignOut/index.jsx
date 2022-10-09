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
        <button onClick={handleLogout}>Se Déconnecter</button>
    )
}

export default SignOut