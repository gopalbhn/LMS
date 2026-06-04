import React, { useState } from "react";
import SideBar from "../component/SideBar";
import StudentTopBar from "../component/StudentTopBar";
import { AlertCircle, Award, CheckCircle } from "lucide-react";
const Assignment = () => {
  const [filter,setFilter] = useState("")
  return (
    <div className="h-screen w-screen">
      <SideBar />
      <div className="ml-64 h-screen">
        <StudentTopBar page={"Assignments"} />
        <div className="space-y-6 p-6">
          <div className="grid grid-cols-3 gap-5 ">
            <div className="bg-white rounded-xl border border-gray-100 p-5 flex items-start gap-4 shadow-sm">
              <div className="p-2.5 rounded-xl flex-shrink-0 bg-[#D9770618]">
                <AlertCircle className="w-5 h-5 text-[#D97706]" />
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-0.5">{"Pending"}</p>
                <p className="text-2xl font-bold text-gray-900">{"3"}</p>
              </div>
            </div>
             <div className="bg-white rounded-xl border border-gray-100 p-5 flex items-start gap-4 shadow-sm">
              <div className="p-2.5 rounded-xl flex-shrink-0 bg-[#2563EB18]">
                <CheckCircle className="w-5 h-5 text-[#2563EB]" />
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-0.5">{"Submited"}</p>
                <p className="text-2xl font-bold text-gray-900">{"1"}</p>
              </div>
            </div>
             <div className="bg-white rounded-xl border border-gray-100 p-5 flex items-start gap-4 shadow-sm">
              <div className="p-2.5 rounded-xl flex-shrink-0 bg-[#16A34A18]">
                <Award className="w-5 h-5 text-[#16A34A]" />
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-0.5">{"Graded"}</p>
                <p className="text-2xl font-bold text-gray-900">{"1"}</p>
              </div>
            </div>
          </div>
          <div className=" bg-white rounded-xl border border-gray-100 overflow-hidden shadow-sm ">
            <div className="flex items-center justify-between px-5 y-4 border-b border-gray-100 mb-5">
              <h3 className="font-bold text-gray-900 ">All Assignement</h3>
              <div className="flex items-center gap-1 p-1 bg-gray-100 rounded-xl">
                    {["all", "pending", "submitted", "graded"].map(f => (
              <button key={f} onClick={() => setFilter(f)}
                className={`px-3 py-1 rounded-lg text-xs font-semibold capitalize transition-all ${filter === f ? "text-white shadow-sm" : "text-gray-500 hover:text-gray-700"}`}
                style={filter === f ? { backgroundColor: "#6D6BDB" } : {}}>
                {f}
              </button>
            ))}

              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Assignment;
