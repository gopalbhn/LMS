import React from 'react'
import { useNavigate } from 'react-router-dom'
import {useAuth } from "@clerk/clerk-react";
import { useState, useEffect } from 'react';
import { GraduationCap } from 'lucide-react';
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
    <div className='h-15 w-full px-6 flex items-center justify-between border-b border-gray-100'>
        <div className='flex items-center gap-2.5 hover:cursor-pointer'  onClick={()=>navigate('/')}>
        
        <div className='h-8 w-8 bg-[#6D6BDB] rounded-lg flex items-center justify-center'>
            <GraduationCap className='h-4 w-4 text-white'/>
        </div>
        <div className='font-bold text-gray-900 text-xl tracking-tight ' style={{fontFamily:"'Outfit',sans-serif"}}>LMS</div>
        </div>
        <div className=' flex items-center gap-3'>
            <button className='px-4 py-2 text-sm font-semibold border border-[#6D6BDB]  hover:bg-[#6D6BDB] hover:text-white hover:cursor-pointer rounded-lg' onClick={()=>navigate("/signin")}>
                Sign in
            </button>
            <button className='px-4 py-2 text-sm font-semibold border bg-[#6D6BDB] text-white rounded-lg hover:bg-white hover:border-b border-[#6D6BDB] hover:text-[#6D6BDB] hover:cursor-pointer'>
                Sign Up
            </button>
        </div>
    </div>
  )
}

export default NavBar