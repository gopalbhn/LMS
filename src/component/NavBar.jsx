import React from 'react'
import { useNavigate } from 'react-router-dom'
import {useAuth } from "@clerk/clerk-react";
import { useState, useEffect } from 'react';
const NavBar =  () => {
    const navigate = useNavigate();
    const { getToken } = useAuth();
    const [token, setToken] = useState(null);
    useEffect(() => {
        const fetchToken = async () => {
            const tkn = await getToken();
            setToken(tkn);
        };
        fetchToken();
    }, [getToken]);
    console.log("token:", token);
    const loggedIn = !!token;
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