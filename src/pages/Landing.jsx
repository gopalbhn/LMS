import {  ArrowRight, MoveRight } from "lucide-react";

const Landing = () => (
  <div className="h-full w-full relative">
    <div className="h-screen bg-cover bg-center  relative bg-[linear-gradient(120deg,rgba(0,0,0,0.85)_0%,rgba(0,0,0,0.5)_60%,rgba(0,0,0,0.2)_100%),url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&h=700&fit=crop&auto=format')]">
      <div className="max-w-6xl px-8 py-28 mx-auto">
        <div className=" w-55 px-3 py-1.5 mb-6 border border-[#6d6bdb] rounded-xl text-white text-xs font-bold bg-[#6D6BDB30] flex gap-2 items-center">
          <span className="h-1.5 w-1.5 rounded-full bg-[#6D6BDB] animate-pulse"></span>
          <span>Live Classes Are Going On</span>
        </div>
        <div className=" text-5xl text-white font-bold mb-6">
          Learn from the best.<br></br>
          <span className="text-[#a5a3f0]"> Teach</span> the rest.
        </div>
        <p className="text-gray-300 text-lg  max-w-xl mb-8 leading-relaxed">
          EduFlow brings instructors, learners, and institutions together in one powerful platform — with live classes, rich course content, and smart progress tracking.
        </p>
        <div className="flex items-center gap-3">
          <button className="px-6 py-3.5 text-white font-bold text-sm flex items-center gap-2 bg-[#6D6BDB] rounded-xl hover:opacity-90 hover:cursor-pointer">
            Start learning <ArrowRight />
          </button>
          <button className="px-5 py-3.5  font-bold text-sm text-white border  rounded-xl   border-white/30 hover:bg-white/10 hover:cursor-pointer">  
              Sign In
          </button>
        </div>
      </div>
    </div>

    <div className="max-w-full p-8 py-20">
      <div className="mx-auto flex-col gap-2">
          <div className="text-3xl font-bold text-gray-900 m-3 text-center">Everything you need to learn & Teach</div>
          <p className="text-gray-500 text-base max-w-xl mx-auto text-center" style={{fontFamily:"'Outfit',sans-serif"}}>A complete ecosystem for modern education from live streaming to graded assignments</p>
      </div>
      <div className="grid grid-cols-3 gap-6">
        {Features.MAP(f=>(
          <div className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-md transition-shadow group">
            <div className="w-10 h-10 rounded-xl flex items-center ">
              <f.icon className="w-5 h-10 text-[#6D6BDB] " />
            </div>
            <h3 className="font-bold text-gray-900 yrcy-nsdr mb-2">

            </h3>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Landing;
