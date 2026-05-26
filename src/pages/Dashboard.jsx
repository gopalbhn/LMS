import React from 'react'
import SideBar from '../component/SideBar'
import { Bell, Search } from 'lucide-react'

const Dashboard = () => {
  return (
    <div className='relative h-screen w-full'>
        <SideBar />
        <div className=' ml-64 h-screen'>
            <div className='w-full px-5 h-15 flex items-center justify-between'>
              <span className='text-lg font-bold text-gray-600' style={{fontFamily:"'Outfit',sans-serif"}}>Dashboard</span>
              <div className='flex items-center gap-3'>
                <div className='relative'>
                  <Search className='h-4 w-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2' />
                    <input type='text' placeholder='Search... ' className='pl-9 py-2 pr-4 bg-gray-50 border border-gray-100 rounded-xl text-sm w-52 focus:outline-none transition-all'/>
                </div>
                <button className='relative p-2.5 rounded-xl hover:bg-gray-50 transition-colors'>
                    <Bell className='h-5 w-5 text-gray-600' />
                    <span className='absolute top-2 right-2 w-2 h-2 rounded-full bg-[#6D6BDB]'></span>
                </button>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Dashboard