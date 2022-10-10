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
import { ToastContainer } from 'react-toastify'
import ApiTest from './pages/ApiTest'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <>

    <AuthContextProvider>
      <React.StrictMode>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          pauseOnHover
          theme="colored"
        />
        <Router>
        <Header />
          <Routes>
            <Route path="*" element={<NotFound />} />
            <Route exact path="/" element={<Home />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="signin" element={<SignIn />} />
            <Route path="forget-password" element={<ForgetPassword />} />
            <Route path="quiz" element={<ProtectedRoute><Quiz /></ProtectedRoute>} />
            <Route path='api-test' element={<ProtectedRoute><ApiTest /></ProtectedRoute>} />
          </Routes>
        </Router>
      </React.StrictMode>
    </AuthContextProvider>
    <Footer />
  </>
)