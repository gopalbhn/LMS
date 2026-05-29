import React, { useState } from "react";
import SideBar from "../../component/SideBar";
import StudentTopBar from "../../component/StudentTopBar";
import { COURSES } from "../../data";
import { Star, Clock } from "lucide-react";

const MyCourses = () => {
  console.log("courses",COURSES)
  const [selected, setSelected] = useState(null);
  return (
    <div className="h-screen w-full">
      <SideBar />
      <div className="ml-64 h-screen">
        <StudentTopBar page={"Courses"} />
        <div className="p-6 space-y-6">
          <div className="w-full flex items-center justify-between ">
            <h1 className="font-bold text-md">My Courses</h1>
            <div className="  p-1  bg-gray-100 rounded-xl flex items-center gap-2">
              {["All", "In Progress", "Completed"].map((course) => (
                <button
                  key={course}
                  onClick={() => setSelected(course)}
                  className={`px-3 py-1.5 text-xs rounded-lg font-semibold transition-all  ${course == selected ? "bg-white text-gray-900 shadow-sm" : "text-gray-500 hover:text-gray-700"} `}
                >
                  {course}
                </button>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-5 ">
            {COURSES.map((c) => (
              <div className="bg-white rounded-xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow-group">
                <div className="relative h-40 bg-gray-100">
                  <img
                    src={c.thumb}
                    alt={c.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-trnsform duration-300"
                  />
                  <div className="absolute top-3 left-3 ">
                    <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-600 border-indigo-100">
                      {c.cat}
                    </span>
                  </div>
                  {c.progress === 91 && (
                    <div className="absolute top-3 right-3">
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold bg-green-50 text-green-600 border-green-100">
                        Almost Done
                      </span>
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-gray-900 text-sm mb-1 line-clamp-2">
                    {c.title}
                  </h3>
                  <p className="text-xs text-gray-400 flex items-center gap-2 mb-3">
                    <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                    {c.rating}
                    <span className="text-gray-300">·</span>
                    <Clock className="w-3 h-3" />
                    {c.hours}
                  </p>
                  <div className="w-full bg-gray-100 rounded-full h-1.5">
                    <div
                      className="h-1.5 rounded-full transition-all bg-[#6D6BDB]"
                      style={{ width: `${c.progress}%` }}
                    />
                  </div>
                  <div className="flex items-center justify-between mt-2.5">
                    <span className="text-xs text-gray-400">
                      {c.progress}% complete
                    </span>
                    <button className="px-3 py-1.5 rounded-lg text-xs font-bold text-white hover:opacity-90 bg-[#6D6BDB]">
                      {c.progress >= 100 ? "Review" : "Continue"}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCourses;
