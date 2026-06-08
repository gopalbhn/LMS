import React from 'react'
import TSideBar from '../../component/Teacher/TSideBar'
import TeacherTopBar from '../../component/Teacher/TeacherTopBar'

const TLanding = () => {
  return (
    <div className='h-screen w-full relative '>
        <TSideBar />
        <div className='ml-64 h-screen '>
            <TeacherTopBar page={"Dashborad"} />
        </div>
    </div>
  )
}

export default TLanding