import { SignInButton } from '@clerk/clerk-react'
import { useSignIn } from '@clerk/clerk-react'
import { GraduationCap } from 'lucide-react';
import React from 'react'
import {useState} from 'react'
import GoogleIcon from "../assets/google.png"
import { Link } from 'react-router-dom';
const SignInPage = () => {
  const { signIn,isLoaded } = useSignIn();
  const[role,setRole] = useState("learner")
   async function signInWithGoogle() {
    console.log('Google Sign-In clicked')  

    if(!isLoaded || !signIn){
      console.log('SignIn is not loaded yet.');
      return;
    }
    try{

      await signIn.authenticateWithRedirect({
        strategy: 'oauth_google',
        redirectUrl: '/sso-callback',
        redirectUrlComplete: `${window.location.origin}/dashboard`,
        
      });
    }    catch(error){
      console.error('Error during Google Sign-In:', error.message);
    }
  }

  
  return (
    <div className='h-screen w-full flex justify-center items-center bg-indigo-50'>
      <div className=' w-100 py-10 bg-white'>
        <div className='h-10 w-20 flex items-center gap-2.5 mt-10 mx-auto'>

        <div className='h-8 w-8 rounded-xl bg-[#6D6BDB] flex items-center justify-center '>
          <GraduationCap className='h-4 w-4 text-white'/>

        </div>
        <p className='font-bold text-gray-600 text-sm'>LMS</p>
        </div>
        <div className='text-gray-400 text-center text-sm mb-5 '>Signin to Continue</div>
        <div className='flex gap-2 mb-6 p-1 bg-gray-100 rounded-xl mx-2'>
          


        {["learner","instructor"].map(r=>(
          <button key={r} onClick={()=>setRole(r)} className={`flex px-10 py-2 rounded-lg text-sm font-semibold transition-all ${role === r ? "bg-white text-gray-900 shadow-sm": "text-gray-500 hover:text-gray-700"}`}>
            {r ==="learner"?"I want to learn":"I want to teach"}
          </button>
        ))}
        </div>
        <div className='px-2'>

        <form>
          <div className='flex flex-col mb-2' >
            <label htmlFor="email" className='text-sm font-semibold text-gray-400'>Email Address</label>
       <input type="email" placeholder='Enter your Email' className="p-2 border border-gray-200 rounded-lg outline-none focus:ring-1 focus:ring-gray-400 focus:shadow-md transition duration-200"
/>
          </div>
          <div className='flex flex-col mb-3'>
            <label htmlFor='password' className='text-sm font-semibold text-gray-400'>Password</label>
            <input type="password" placeholder='Enter your Password' className='p-2 border border-gray-200 rounded-lg outline-none focus:ring-1 focus:ring-gray-400 focus:shadow-md transition duration-200' />
          </div>
          <div className='flex items-center justify-center mb-2'>
            <button className='px-8 py-3 bg-[#6D6BDB] rounded-xl text-white text-sm font-bold'>
              {`Sign In as ${role}`}
            </button>

          </div>
          <div className='flex items-center justify-center '>
            <button className='px-8 py-3 bg-[#6D6BDB] rounded-xl text-white text-sm font-bold flex items-center gap-2'>
             <img src={GoogleIcon} className='h-5 w-4'/>
              Sign In With Google</button>
          </div>
          <p className='mt-2 text-center '>Don't Have an account? <Link to="/signup" className='text-[#6D6BDB] hover:underline'>Click Here</Link></p>
        </form>
        </div>
      </div>

    </div>
  )
}

export default SignInPage