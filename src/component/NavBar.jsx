import React from 'react'
import { useNavigate } from 'react-router-dom'

const NavBar = () => {
    const navigate = useNavigate();
  return (
    <div className='h-10 w-full px-5 bg-blue-600 flex items-center justify-between'>
        <div>
            LMs
        </div>
        <div>
            <button onClick={()=>navigate('/signin')}>Signin</button>
            <button onClick={()=>navigate('/signup')}>Sign Up</button>
        </div>
    </div>
  )
}

export default NavBar