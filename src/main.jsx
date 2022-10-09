import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// PAGES \\
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import Quiz from './pages/Quiz'
// COMPONENTS \\
import ProtectedRoute from './components/ProtectedRoute'
import Header from './components/Header'
import Footer from './components/Footer'
// CSS \\
import './assets/styles/index.css'
import './assets/styles/main.css'
// CONTEXT \\
import { AuthContextProvider } from './context/AuthContext'
import ForgetPassword from './pages/ForgetPassword'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <>
    <Header />
    <AuthContextProvider>
      <React.StrictMode>
        <Router>
          <Routes>
            <Route path="*" element={<NotFound />} />
            <Route exact path="/" element={<Home />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="signin" element={<SignIn />} />
            <Route path="forget-password" element={<ForgetPassword />} />
            <Route path="quiz" element={<ProtectedRoute><Quiz /></ProtectedRoute>} />
          </Routes>
        </Router>
      </React.StrictMode>
    </AuthContextProvider>
    <Footer />
  </>
)