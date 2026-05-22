import React from 'react'
import { useNavigate } from 'react-router-dom'
import {useSession} from "@clerk/clerk-react";
const NavBar = () => {
    const navigate = useNavigate();
    const { isSignedIn } = useSession();
    const loggedIn = isSignedIn;

    function handleSignout(){
        localStorage.clear();
        navigate('/signin');
    }

  return (
    <div className='h-10 w-full px-5 bg-blue-600 flex items-center justify-between'>
        <div>
            LMs
        </div>
        <div className='flex items-center gap-5'>
            {loggedIn ? (
                <>
                <button onClick={()=>navigate('/profile')}>Profile</button>
                <button onClick={handleSignout}>Sign Out</button>
                </>

            ) : (
                <>
                    <button onClick={()=>navigate('/signin')}>Signin</button>
                    <button onClick={()=>navigate('/signup')}>Sign Up</button>
                </>
            )}
        </div>
    </div>
  )
}

export default NavBar