import React from 'react';

export default function SimpleProcessSection() {
  const steps = [
    {
      num: "1",
      title: "Sign Up & Set Goals",
      desc: "Create your free account and tell us what you're working on — stress, anxiety, sleep, or just feeling better.",
      icon: (
        <svg className="w-6 h-6 text-[#1A4D56]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      )
    },
    {
      num: "2",
      title: "Enter Your Therapist Code",
      desc: "Your therapist provides you with a unique code. Simply enter it to connect directly with them inside the app.",
      icon: (
        <svg className="w-6 h-6 text-[#1A4D56]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4v-3.258l4.258-4.258A6 6 0 0121 9z" />
        </svg>
      )
    },
    {
      num: "3",
      title: "Start Sessions",
      desc: "Begin therapy via text, audio, or video — on your terms, at your pace, from anywhere.",
      icon: (
        <svg className="w-6 h-6 text-[#1A4D56]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      num: "4",
      title: "Track Progress",
      desc: "Watch your mood trends, celebrate milestones, and see real growth over time with visual insights.",
      icon: (
        <svg className="w-6 h-6 text-[#1A4D56]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-24 bg-white text-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="inline-block px-4 py-1.5 rounded-full bg-[#E0F2F1] text-[#1A4D56] text-xs font-bold uppercase tracking-wider mb-4">
          Simple Process
        </div>

        <h2 className="text-3xl sm:text-5xl font-black text-[#0B1F24] tracking-tight mb-4 leading-tight">
          Start feeling better <br />
          in 4 easy steps
        </h2>

        <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto mb-20 leading-relaxed">
          No complicated setup. No waiting rooms. Just support, when you need it[cite: 10].
        </p>

        {/* Steps Grid - Added Relative Position for Line */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-left relative mb-16">
          
          {/* Connection Line - Hidden on smaller screens */}
          <div className="hidden lg:block absolute top-10 left-[10%] right-[10%] h-0.5 bg-[#E0F2F1] z-0" />

          {/* Steps */}
          {steps.map((item, index) => (
            <div key={index} className="flex flex-col items-start relative z-10">
              
              {/* Step Card / Icon Box */}
              <div className="w-20 h-20 rounded-3xl bg-[#F4FBFB] border border-slate-100 shadow-sm flex items-center justify-center relative mb-6">
                {item.icon}
                <span className="absolute -top-2.5 -right-2.5 w-7 h-7 rounded-full bg-[#1A4D56] text-white text-xs font-bold flex items-center justify-center shadow-md">
                  {item.num}
                </span>
              </div>

              {/* Title & Description */}
              <h3 className="text-lg font-bold text-[#0B1F24] mb-2">{item.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>

            </div>
          ))}
        </div>

        <div className="flex flex-col items-center">
          <button className="bg-[#26A69A] text-white font-bold px-8 py-4 rounded-xl hover:opacity-90 transition-all shadow-lg text-sm sm:text-base">
            Get Started — It's Free
          </button>
          <span className="text-xs text-slate-400 mt-3">No credit card required. Cancel anytime.</span>
        </div>

      </div>
    </section>
  );
}