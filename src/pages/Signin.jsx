import { SignInButton,SignIn } from '@clerk/react'
import {useSignIn} from '@clerk/react'
import React from 'react'

const SignInPage = () => {
  const signIn = useSignIn()

  async function signInWithGoogle(){
    await signIn.authenticateWithRedirect({
      strategy:'oauth_google',
      redirectUrl:'/sso-callback',
      redirectUrlComplete: '/dashboard'
    })
  }
  return(
    <div className='h-screen w-full flex items-center justify-center'>
      <div className='h-[400px] w-[400px] p-5 border rounded-md bg-blue-100'>
        <button className='h-10 w-full bg-blue-600 text-white rounded-md mb-5' onClick={signInWithGoogle}>
          Continue with Google
        </button>
      </div>
    </div>
  )
}

export default SignInPage