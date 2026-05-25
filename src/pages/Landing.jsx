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
} from "lucide-react";

const Landing = () => {
  const Features = [
    {
      icon: Radio,
      title: "Live Interactive Classes",
      desc: "Join real-time sessions with HD video, screen sharing, and live Q&A with instructors.",
    },
    {
      icon: Video,
      title: "On-Demand Recordings",
      desc: "Access every past lecture at any time. Never fall behind with a searchable video library.",
    },
    {
      icon: ClipboardList,
      title: "Smart Assignments",
      desc: "Submit work, track deadlines, and receive detailed instructor feedback in one place.",
    },
    {
      icon: BarChart3,
      title: "Progress Analytics",
      desc: "Visualize your learning journey with detailed progress reports and grade tracking.",
    },
    {
      icon: Award,
      title: "Certificates",
      desc: "Earn verified certificates upon course completion to showcase your achievements.",
    },
    {
      icon: Users,
      title: "Community",
      desc: "Connect with fellow learners, join study groups, and collaborate on projects.",
    },
  ];
  const ROLE_CARDS = [
    {
      role: "learner",
      label: "Learner",
      desc: "Browse courses, attend live sessions, submit assignments, and track your grades — all in one place.",
      imgId: "1507003211169-0a1dd7228f2d",
      features: ["My Courses", "Live Classes", "Assignments", "Grades"],
    },
    {
      role: "instructor",
      label: "Instructor",
      desc: "Create and manage courses, host live streams, grade work, and monitor student performance.",
      imgId: "1573496359142-b8d87734a5a2",
      features: [
        "Course Builder",
        "Live Streaming",
        "Assignment Grading",
        "Student Analytics",
      ],
    },
    {
      role: "admin",
      label: "Administrator",
      desc: "Full platform oversight — manage users, approve courses, monitor revenue, and configure settings.",
      imgId: "1560250097-0b93528c311a",
      features: [
        "User Management",
        "Course Approvals",
        "Revenue Reports",
        "Platform Config",
      ],
    },
  ];
  return (
    <div className="h-full w-full relative ">
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
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">{role.desc}</p>
                  <ul className="space-y-1.5 mb-5">
                    {role.features.map(item=>(
                      <li key={item} className="flex items-center gap-2 text-sm text-gray-700">
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
    </div>
  );
};

export default Landing;
