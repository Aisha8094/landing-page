import React from 'react';

export default function NodalySection() {
  const steps = [
    {
      num: "1",
      title: "You use Self App",
      desc: "Log your mood, journal your thoughts, complete check-ins, and chat with your AI companion — all within Self App.",
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      num: "2",
      title: "Data syncs securely",
      desc: "Your progress, mood trends, and check-in data are encrypted and shared with your linked therapist in real time.",
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
      )
    },
    {
      num: "3",
      title: "Therapist acts on Nodaly",
      desc: "Your therapist reviews your data on Nodaly, adjusts your treatment plan, and prepares for your next session with full context.",
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-24 bg-white text-[#0B1F24]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Top Badge */}
        <div className="inline-block px-4 py-1.5 rounded-full bg-[#E0F2F1] text-[#1A4D56] text-xs font-bold uppercase tracking-wider mb-6">
          • Powered by Nodaly
        </div>

        {/* Main Heading */}
        <h2 className="text-4xl sm:text-6xl font-black tracking-tight mb-6 leading-tight text-[#0B1F24]">
          The platform behind <br />
          <span className="text-[#26A69A]">your therapist's tools</span>
        </h2>

        {/* Subtitle */}
        <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto mb-16 leading-relaxed">
          Self App is built on Nodaly — a clinical-grade platform that gives licensed therapists everything they need to deliver exceptional, data-informed care.
        </p>

        {/* Outer Container Card Box */}
        <div className="bg-[#F4FBFB] border border-slate-100 rounded-3xl p-8 sm:p-16 shadow-sm">
          
          <h3 className="text-2xl sm:text-4xl font-extrabold text-[#0B1F24] mb-3">
            How Self App & Nodaly work together
          </h3>
          <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto mb-16 leading-relaxed">
            A seamless loop between you and your therapist — no gaps, no guesswork.
          </p>

          {/* 3 Steps Process with Horizontal Connecting Line */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center relative">
            
            {/* Horizontal Line behind icons for Desktop */}
            <div className="hidden md:block absolute top-10 left-[18%] right-[18%] h-0.5 bg-slate-200 z-0" />

            {steps.map((item, index) => (
              <div key={index} className="flex flex-col items-center relative z-10">
                
                {/* Icon Box with Badge Number */}
                <div className="w-20 h-20 rounded-2xl bg-[#1A4D56] flex items-center justify-center relative mb-6 shadow-md">
                  {item.icon}
                  <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-white border-2 border-slate-100 text-[#0B1F24] text-xs font-black flex items-center justify-center shadow-sm">
                    {item.num}
                  </span>
                </div>

                {/* Step Title & Description */}
                <h4 className="text-lg font-extrabold text-[#0B1F24] mb-3">
                  {item.title}
                </h4>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-xs">
                  {item.desc}
                </p>

              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}