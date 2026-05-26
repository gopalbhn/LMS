import { GraduationCap } from 'lucide-react'
import {useState} from 'react'
import GoogleIcon from "../assets/google.png"
import {Link} from "react-router-dom"
const SignUpPage = () => {
  const [role,setRole] = useState("learner")
  return (
    <div className='h-screen w-full flex items-center justify-center bg-indigo-50'>
      <div className=' w-100 py-5 bg-white'>
      <div className='h-10 w-20 flex items-center gap-2.5 mt-10 mx-auto '>
          <div className='h-8 w-8 rounded-xl bg-[#6D6BDB]  flex items-center justify-center'>
              <GraduationCap className='h-4 w-4 text-white' />
          </div>
          <p className='font-bold text-gray-600 text-sm'>LMS</p>
      </div>
      <p className='text-gray-400 text-sm text-center mt-2 '>Create Your Account</p>
      <div className='flex gap-2 mb-6 p-1 bg-gray-100 rounded-xl mx-2'>
        {["learner","instructor"].map(r=>(
          <button onClick={()=>setRole(r)} className={`flex px-10 py-2 rounded-lg text-sm font-semi transiton-all ${ role ==r ? "bg-white text-gray-900 shadow-sm" : "text-gray-500 hover:text-gray-700" }  `}>
        {r ==="learner"?"I want to learn":"I want to teach"}
          </button>
        ))}
      </div>
      <div className='px-2'>

        <form>
          <div className='flex flex-col mb-2' >
            <label htmlFor="email" className='text-sm font-semibold text-gray-400'>Full Name</label>
       <input type="email" placeholder='Enter your Name' className="p-2 border border-gray-200 rounded-lg outline-none focus:ring-1 focus:ring-gray-400 focus:shadow-md transition duration-200"
/>
          </div>
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
              {`Sign Up as ${role}`}
            </button>

          </div>
          <div className='flex items-center justify-center '>
            <button className='px-8 py-3 bg-[#6D6BDB] rounded-xl text-white text-sm font-bold flex items-center gap-2'>
             <img src={GoogleIcon} className='h-5 w-4'/>
              Sign In With Google</button>
          </div>
          <p className='mt-2 text-center '>Already Have an account? <Link to="/signin" className='text-[#6D6BDB] hover:underline'>Sign In</Link></p>
        </form>
        
      </div>

      </div>

    </div>
  )
}

export default SignUpPage