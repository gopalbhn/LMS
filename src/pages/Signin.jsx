import { SignInButton } from '@clerk/clerk-react'
import { useSignIn } from '@clerk/clerk-react'
import React from 'react'

const SignInPage = () => {
  const { signIn,isLoaded } = useSignIn();
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
    <div className='h-screen w-full flex items-center justify-center'>
      <button onClick={signInWithGoogle} className='bg-blue-500 text-white px-4 py-2 rounded'>Sign in with Google</button>
    </div>
  )
}

export default SignInPage