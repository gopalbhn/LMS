import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Landing from './pages/Landing'
import { AuthenticateWithRedirectCallback, SignIn, SignInButton, SignUp } from '@clerk/clerk-react'
import NavBar from './component/NavBar'
import { Routes,Route } from 'react-router-dom'
import SignInPage from './pages/Signin.jsx'
import SignUpPage from './pages/Signup.jsx'
import DashBoard from "./pages/Dashboard.jsx"


function App() {
  

  return (
    <>
   
      <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/signin" element={<SignInPage/>} />
          <Route path='/dashboard' element ={<DashBoard />} />
          <Route path="/signup" element={<SignUpPage/>} />
          <Route path="/sso-callback" element={<AuthenticateWithRedirectCallback />} />
      </Routes>
    </>
  )
}

export default App
