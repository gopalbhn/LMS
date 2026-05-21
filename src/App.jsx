import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Landing from './pages/Landing'
import { AuthenticateWithRedirectCallback, SignIn, SignInButton, SignUp } from '@clerk/react'
import NavBar from './component/NavBar'
import { Routes,Route } from 'react-router-dom'
import SignInPage from './pages/Signin.jsx'


function App() {
  

  return (
    <>
      <NavBar />
      <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/signin" element={<SignInPage/>} />
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/sso-callback" element={<AuthenticateWithRedirectCallback/>} />
      </Routes>
    </>
  )
}

export default App
