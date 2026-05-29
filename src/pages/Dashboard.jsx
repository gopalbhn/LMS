import React from "react";
import SideBar from "../component/SideBar";
import StudentTopBar from "../component/StudentTopBar";
import { LIVE_SESSIONS } from "../data";
import {
  Award,
  Bell,
  BookOpen,
  CheckCircle,
  ChevronRight,
  Radio,
  Search,
  Video,
  ClipboardList,
  BarChart3,
  Users
} from "lucide-react";
const Dashboard = () => {

  return (
    <div className="relative h-screen w-full">
      <SideBar />
      <div className="ml-64 h-screen   ">
        <StudentTopBar page={"Dashboard"} />
        <div className="p-6 space-y-6">
          <div className=" h-40 rounded-xl relative overflow-hidden ">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&h=700&fit=crop&auto=format"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r  from-black/70 via-black/40 to-transparent flex flex-col justify-center px-8">
              <p className="text-white/60 text-sm mb-1">Good afternoon</p>
              <h2 className="text-3xl text-white font-bold">Marcus!</h2>
              <p className="text-white/60 text-sm mb-1">
                You have 2 assignments due this week. Keep it up!
              </p>
            </div>
            <div className="absolute right-8 top-1/2 -translate-y-1/2 text-right">
              <p className="text-white/50 text-xs mb-1">Weekly goal</p>
              <p className="text-white text-3xl font-bold">
                87{" "}
                <span className="text-base font-normal text-white/50">h</span>
              </p>
              <div className="w-24 h-1.5 bg-white/20 rounded-full mt-2 ml-auto">
                <div className="h-1.5 rounded-full bg-white w-16" />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-white rounded-xl border border-gray-100 p-5 flex items-start gap-4 shadow-sm">
              <div className="p-2.5 rounded-xl shrink-0 bg-[#6D6BDB18]">
                <BookOpen className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm tex-gray-500 mb-0.5">Enrolled </p>
                <p className="text-xl tex-gray-900 font-bold">4 </p>
              </div>
            </div>
            <div className="bg-white rounded-xl border border-gray-100 p-5 flex items-start gap-4 shadow-sm">
              <div className="p-2.5 rounded-xl shrink-0 bg-[#16A34A18]">
                <CheckCircle className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-0.5">Completed</p>
                <p className="text-xl tex-gray-900 font-bold">1 </p>
              </div>
            </div>
            <div className="bg-white rounded-xl border border-gray-100 p-5 flex items-start gap-4 shadow-sm">
              <div className="p-2.5 rounded-xl shrink-0 bg-[#D9770618]">
                <Award className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-0.5">Certificate</p>
                <p className="text-xl tex-gray-900 font-bold">1 </p>
              </div>
            </div>
          </div>
          <div className="">
            <div className="flex items-center justify-between">
              <div className="text-gray-900 font-bold ">Continue Learning</div>
              <div className="text-sm font-semibold flex items-center gap-1 text-[#6D6BDB]">
                {" "}
                View all <ChevronRight className="h-4 w-4 " />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-4 flex gap-4 border border-gray-100">
                <div className="h-14 w-20 rounded-lg overflow-hidden bg-gray-100 shrink-0">
                  <img
                    src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=240&fit=crop&auto=format"
                    className="h-full w-full"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-sm text-gray-900 truncate capitalize">
                    Full stack web development
                  </p>
                  <p className="text-xs text-gray-400 mb-2">Dr. Sarah Chen</p>
                  <div className="rounded-full bg-gray-100 w-full h-1.5">
                    <div className="h-1.5 w-[75%] rounded-full transition-all bg-amber-300"></div>
                  </div>
                  <div className="flex items-cneter justify-between mt-1.5">
                    <span className="text-xs text-gray-400">72% completed</span>
                    <button className="text-xs font-bold text-[#6D6BDB]">Continue →</button>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-4 flex gap-4 border-gra-100">
                <div className="h-14 w-20 rounded-lg overflow-hidden bg-gray-100 shrink-0">
                  <img
                    className="h-full w-full "
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=240&fit=crop&auto=format"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-sm text-gray-900 truncate capitalize">
                    Data Science & Machine Learning
                  </p>
                  <p className="text-xs text-gray-400 mb-2">Gopal Bhandari</p>
                  <div className="rounded-full bg-gray-100 w-full h-1.5">
                    <div className="h-1.5 w-[75%] rounded-full transition-all bg-amber-300"></div>
                  </div>
                  <div className="flex items-cneter justify-between mt-1.5">
                    <span className="text-xs text-gray-400">72% completed</span>
                    <button className="text-xs font-bold text-[#6D6BDB]">Continue →</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h3 class="font-bold text-gray-900 mb-3">Upcoming Live Classes</h3>
            <div className="space-y-2">
              {LIVE_SESSIONS.map((live) => (
                <div
                  key={live.id}
                  className="bg-white rounded-xl border border-gray-400 p-4 flex items-center gap-4 shadow-sm"
                >
                  <div className="h-9 w-9 rounded-lg flex items-center justify-center shrink-0 bg-[#6D6BDB15]">
                    <Radio className="h-4 w-4" />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-gray-900 text-sm">
                      {live.title}
                    </p>
                    <p className="text-xs text-gray-400">
                      {live.by} · {live.date} · {live.time} · {live.dur}
                    </p>
                  </div>
                  {live.live ? (

                    <button className="px-3 py-1.5 rounded-lg text-xs font-bold text-white flex items-center gap-1.5 animate-pulse bg-[#6D6BDB]">
                      <span className="h-1.5 w-1.5 rounded-full bg-white"></span>
                      Live
                    </button>
                  ) :
                    <button className="px-3 py-1.5 rounded-lg text-xs font-medium text-gray-600 border border-gray-200 hover:border-gray-50">
                      Remind Me
                    </button>
                  }
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
