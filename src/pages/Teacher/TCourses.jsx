import React from 'react'
import TSideBar from '../../component/Teacher/TSideBar'
import TeacherTopBar from '../../component/Teacher/TeacherTopBar'
const TCourses = () => {
  return (
    <div >
    <div className='h-screen w-full relative '>
        <TSideBar />
        <div className='ml-64 h-screen '>
            <TeacherTopBar page={"Dashborad"} />
        </div>
    </div>
    </div>
  )
}

export default TCourses