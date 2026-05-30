import {
  ArrowRight,
  MoveRight,
  Radio,
  Video,
  ClipboardList,
  BarChart3,
  Award,
  Users,
  CheckCircle,
  ChevronRight,
  Star,
  Clock,
} from "lucide-react";
import NavBar from "../component/NavBar";
import { COURSES, Features, ROLE_CARDS } from "../data";

const Landing = () => {

 
  return (
    <div className="h-full w-full relative ">
      <NavBar />
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
            EduFlow brings instructors, learners, and institutions together in
            one powerful platform — with live classes, rich course content, and
            smart progress tracking.
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

      <div className="max-w-6xl px-8 py-20 mx-auto  ">
        <div className="mx-auto flex-col gap-2 mb-10">
          <div className="text-3xl font-bold text-gray-900 m-3 text-center">
            Everything you need to learn & Teach
          </div>
          <p
            className="text-gray-500 text-base max-w-xl mx-auto text-center"
            style={{ fontFamily: "'Outfit',sans-serif" }}
          >
            A complete ecosystem for modern education from live streaming to
            graded assignments
          </p>
        </div>
        <div className="grid grid-cols-3 gap-6">
          {Features.map((f) => (
            <div className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-md transition-shadow group hover:cursor-pointer ">
              <div className="w-10 h-10 mb-4 rounded-xl flex items-center justify-center bg-[#6D6BDB30] group-hover:scale-[1.1] transition-transform">
                <f.icon className="w-5 h-10 text-[#6D6BDB] " />
              </div>
              <h3 className="font-bold text-gray-900 text-base mb-2">
                {f.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed ">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="max-w-full bg-gray-50">
        <div className="max-w-6xl px-8 py-20 mx-auto">
          <div className="flex flex-col items-center gap-2 text-center mb-4">
            <h1 className="text-3xl font-bold">Built for every role</h1>
            <p className=" text-gray-500 text-base text-center">
              Each role gets a fully tailored experience. Click to preview.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-6">
            {ROLE_CARDS.map((role) => (
              <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="h-40 bg-gray-100 relative overflow-hidden">
                  <img
                    src={`https://images.unsplash.com/photo-${role.imgId}?w=${300}&h=${200}&fit=crop&auto=format`}
                    className="h-full w-full object-cover"
                    alt=""
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-3 left-4">
                    <span
                      className="text-white font-bold text-lg"
                      style={{ fontFamily: "'Outfit',sans-serif" }}
                    >
                      {role.label}
                    </span>
                  </div>
                </div>
                <div className=" p-5">
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                    {role.desc}
                  </p>
                  <ul className="space-y-1.5 mb-5">
                    {role.features.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2 text-sm text-gray-700"
                      >
                        <CheckCircle className="h-3.5 w-3.5 shrink" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <button className="w-full py-2.5 rounded-xl bg-[#6D6BDB]/30  text-[#6D6BDB] text-sm font-bold hover-opacity-10">
                    Preview {role.label} Dashboard →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="max-w-6xl px-8 py-20 mx-auto">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-3xl font-bold textgray900">Popular Courses</h2>
          <button className="text-sm font-semibold flex items-center gap-1 text-[#6D6BDB]">
            {" "}
            View all Courses <ChevronRight className="h-4 w-4" />
          </button>
        </div>
        <div className="grid grid-cols-4 gap-5">
          {COURSES.map((c) => (
            <div
              key={c.id}
              className="bg-white rounded-xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow group"
            >
              <div className="h-40 relative  bg-gray-100">
                <div className="absolute inset-0 bg-linear-to-r from-black-50 to-transparent" />
                <img
                  src={c.thumb}
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3 ">
                  <span
                    className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold border bg-indigo-50 text-indigo-600 border-indigo-100`}
                  >
                    {c.cat}
                  </span>
                </div>
                {c.progress == 90 && (
                  <div className="absolute top-3 left-3">
                    {" "}
                    <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold border bg-green-50 text-green-600 border-green-100">
                      {" "}
                      Almost done!
                    </span>{" "}
                  </div>
                )}
              </div>
              <div className="p-4">
                <h3 className="font-bold text-gray-900 text-sm leading-tight mb-2 line-clamp-2">
                  {c.title}
                </h3>
                <p className="text-xs text-gray-400 mb-3">{c.instructor}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-xs text-gray-500">
                    <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                    <span className="font-semibold text-gray-700">
                      {c.rating}
                    </span>
                    <span>({c.students.toLocaleString()})</span>
                  </div>
                  <span className="font-bold text-gray-900 text-sm">
                    {c.price}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full py-20 bg-[#6D6BDB]">
            <div className="max-w-3xl px-8 mx-auto text-center">
              <h1 className="text-4xl text-white font-bold mb-4" style={{fontFamily:"'Outfit':sans-serif"}}>Ready to transform your learning?</h1>
              <p className="text-indigo-200 mx-auto max-w-xl text-base mb-8">Join over 4,800 students and 38 expert instructors on EduFlow. Your first month is free.</p>
              <div className="flex items-center justify-center gap-4">
                <button className="px-8.5 py-3.5 bg-white font-bold text-sm text-[#6D6BDB] rounded-xl hover:bg-indigo-10">Get Started Free</button>
                <button className="px-8 py-3.5 border border-white rounded-xl text-white font-bold hover:bg-white/10">Sign In</button>
              </div>
               </div>
      </div>  
    </div>
  );
};

export default Landing;
