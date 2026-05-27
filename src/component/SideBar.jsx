import {
  GraduationCap,
  LayoutDashboard,
  BookOpen,
  Radio,
  ClipboardList,
  Award,
  LogOut,
} from "lucide-react";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const SideBar = () => {
  const SideBarItems = [
    {
      icon: LayoutDashboard,
      label: "Overview",
      id: "overview",
      link: "/dashboard",
    },
    { icon: BookOpen, label: "My Courses", id: "courses", link: "/mycourses" },
    { icon: Radio, label: "Live Classes", id: "live", link: "/live" },
    {
      icon: ClipboardList,
      label: "Assignments",
      id: "assignments",
      link: "/assignments",
    },
    { icon: Award, label: "Grades", id: "grades", link: "/grades" },
  ];

  const navigate = useNavigate();
  const { tab } = useParams();
  return (
    <div className="w-64 h-screen bg-white border-r border-gray-100 flex flex-col fixed left-0 top-0 z-20 shadow-sm">
      <div className="h-16 px-6 flex items-center border-b border-gray-100 flex-shrink-0">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-[#6D6BDB]">
            <GraduationCap className="w-4 h-4 text-white" />
          </div>
          <p
            className="text-xl font-bold text-gray-900 tracking-tight"
            style={{ fontFamily: "'Outfit',sans-serif" }}
          >
            LMS
          </p>
        </div>
      </div>
      <div className="px-4 py-3 border-b border-gray-100 shrink-0 mb-2 ">
        <div className="flex items-center gap-3 px-3 py-2.5 rounded-xl bg-gray-50">
          <img
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&auto=format"
            className="w-9 h-9 rounded-full object-cover shrink-0 "
          />
          <div className="min-w-0">
            <p className="text-sm font-semibold text-gray-900 truncate">
              Gopal Bhandari
            </p>
            <p className="text-xs text-gray-400">Learner</p>
          </div>
        </div>
        </div>
        <div className="flex-1 px-3 py-3 overflow-y-auto">
          <p className="px-3 text-[10px] font-bold text-gray-400 tracking-widest mb-2 uppercase ">
            navigation
          </p>
        </div>
        {SideBarItems.map((item) => {
          console.log("item",item.id,"tab",tab)
          const active = item.id === tab;
          return (
            <button
              key={item.id}
              onClick={() => navigate(item.link)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg mb-0.5 text-sm text-left transition-all ${active ? "text-white font-semibold bg-[#6D6BDB]" : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"} `}
            >
              <item.icon className="w-4 h-4 flex-shrink-0" />
              {item.label}
            </button>
          );
        })}
      
      <div className="mt-25 px-3 pb-4 pt-2 border-t border-gray-100 flex-shrink-0">
        <button
          onClick={() => console.log("click")}
          className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-gray-600 hover:bg-violet-50 hover:text-violet-600 transition-colors"
        >
          <LogOut className="w-4 h-4" />
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default SideBar;
