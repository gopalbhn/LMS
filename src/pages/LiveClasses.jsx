import React from 'react'
import SideBar from '../component/SideBar'
import StudentTopBar from '../component/StudentTopBar'
import { Calendar, Play } from 'lucide-react'
import { COURSES, LIVE_SESSIONS } from '../data'

const LiveClasses = () => {
  let days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]
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
          <div className='w-fullflex flex-col gap-3'>
            <h3 className='font-bold text-gray-900'>Upcomming session</h3>
            {LIVE_SESSIONS.slice(1).map(live=>(

              <div className='w-full p-4 border border-gray-100 shadow shadow-gray-200 flex items-center gap-4 rounded-md'>
                  <div className='p-4 bg-gray-50 rounded-3xl flex flex-col items-center'>
                      <p className='text-gray-500 text-xs font-semibold uppercase'>{live.date === "Tomorrow" ? "MON" : "WED"}</p>
                      <p className='text-gray-600 text-xl font-bold'>{live.date === "Tomorrow" ? "25" : live.date.split(" ")[1]}</p>
                  </div>
                  <div className='flex-1'>
                  <p className='font-semibold text-gray-900 text-sm '>{live.title}</p>
                  <p className='text-xs text-gray-400 mt-0.5'>{live.by}</p>
                  </div>
                    <div className="text-right flex-shrink-0">
                <p className="text-xs text-gray-400">{32} enrolled</p>
                <button className="mt-1 text-xs text-gray-400 font-semibold flex items-center gap-1" >
                  <Calendar className="w-3 h-3" /> Add to calendar
                </button>
              </div>
          </div>
      ))}
        </div>
         <div>
        <h3 className="font-bold text-gray-900 mb-3">Past Recordings</h3>
        <div className="grid grid-cols-2 gap-4">
          {[
            { title: "Intro to React Hooks", date: "May 18", dur: "52:18", thumb: COURSES[0].thumb },
            { title: "CSS Grid Mastery", date: "May 15", dur: "1:04:22", thumb: COURSES[2].thumb },
          ].map((r, i) => (
            <div key={i} className="bg-white rounded-xl border border-gray-100 overflow-hidden shadow-sm group">
              <div className="relative h-32 bg-gray-100">
                <img src={r.thumb} alt={r.title} className="w-full h-full object-cover opacity-70 group-hover:opacity-90 transition-opacity" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="w-11 h-11 rounded-full bg-white/95 flex items-center justify-center shadow-lg hover:scale-105 transition-transform">
                    <Play className="w-4 h-4 text-gray-900 ml-0.5 fill-gray-900" />
                  </button>
                </div>
                <span className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-0.5 rounded-md">{r.dur}</span>
              </div>
              <div className="p-3">
                <p className="font-semibold text-gray-900 text-sm">{r.title}</p>
                <p className="text-xs text-gray-400 mt-0.5">{r.date}, 2026</p>
              </div>
            </div>
          ))}
        </div>
      </div>
          </div>
    </div>
  </div>
  )
}

export default LiveClasses