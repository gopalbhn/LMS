import React from 'react'
import SideBar from '../component/SideBar'
import StudentTopBar from '../component/StudentTopBar'

const LiveClasses = () => {
  return (
  <div className='h-screen max-w-full'>
    <SideBar />
    <div className='ml-64 h-screen'>
        <StudentTopBar page={"Live Class"} />
       <div className='p-6 space-y-6'>
        <div className='h-50  w-full  rounded-xl relative overflow-hidden bg-gray-900'>
          <img src="https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?w=1000&h=400&fit=crop&auto=format" className='h-full w-full object-cover opacity-50'/>
          <div className='absolute h-full w-full inset-0 p-8'>
            <div className='flex items-center gap-4 mb-2'>
            <span className='h-2 w-2 rounded-full animate-pulse bg-violet-300'></span>
            <p className='text-md font-bold capitalize text-violet-400'>LIVE  NOW</p>
            </div>
            <div className='flex items-center mb-2'>
              <h2 className='text-2xl font-bold text-white'>React Full Course</h2>
            </div>
              <p class="text-gray-300 text-sm mt-1">with Dr. Sarah Chen · 47 students attending</p>
              <button class="mt-4 w-fit px-6 py-2.5 rounded-xl font-bold text-white text-sm flex items-center gap-2 hover:opacity-90 transition-opacity bg-[#6D6BDB]" ><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-play w-4 h-4 fill-white" aria-hidden="true"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg> Join Class</button>
          </div>
        </div>
       </div>
    </div>
  </div>
  )
}

export default LiveClasses