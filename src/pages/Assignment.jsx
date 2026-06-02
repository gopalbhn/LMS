import React from 'react'
import SideBar from '../component/SideBar'
import StudentTopBar from '../component/StudentTopBar'
const Assignment = () => {
  return (
    <div className='h-screen w-screen'>
        <SideBar />
        <div className='ml-64 h-screen'>
            <StudentTopBar page={"Assignments"} />
            <div className='space-y-6 p-6'>
                <div className='grid grid-cols-3 gap-5 '>

                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Assignment