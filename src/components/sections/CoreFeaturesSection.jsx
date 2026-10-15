import React from 'react';

export default function CoreFeaturesSection() {
  const features = [
    {
      title: "Guided Meditation",
      desc: "Access hundreds of expertly crafted meditation sessions tailored to your needs, from stress relief to deep sleep, helping you find peace in every moment.",
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
        </svg>
      )
    },
    {
      title: "Mood Tracking",
      desc: "Monitor your emotional well-being with intelligent mood tracking that provides personalized insights and helps you understand patterns in your mental health journey.",
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
      )
    },
    {
      title: "Expert Support",
      desc: "Connect with licensed therapists and wellness coaches who provide professional guidance, support, and personalized strategies for your mental health goals.",
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
        </svg>
      )
    },
    {
      title: "Daily Reminders",
      desc: "Stay consistent with customizable reminders that encourage healthy habits, mindfulness practices, and self-care routines throughout your day.",
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
        </svg>
      )
    },
    {
      title: "Community Support",
      desc: "Join a supportive community of like-minded individuals sharing experiences, encouragement, and inspiration on their wellness journey.",
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
        </svg>
      )
    },
    {
      title: "Progress Analytics",
      desc: "Visualize your growth with detailed analytics and insights that track your meditation streaks, mood trends, and overall wellness improvements over time.",
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
        </svg>
      )
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <div className="inline-block px-4 py-1.5 rounded-full bg-[#E0F2F1] text-[#1A4D56] text-xs font-bold uppercase tracking-wider mb-4">
          Core Features
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1F24] tracking-tight mb-4">
          Everything you need to <br className="hidden sm:inline" /> feel better, every day
        </h2>

        <p className="text-slate-600 max-w-2xl mx-auto mb-16 text-base sm:text-lg">
          Built with clinical expertise and human compassion — every feature is designed to support your unique mental wellness journey.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          {features.map((feat, index) => (
            <div key={index} className="p-8 rounded-3xl bg-[#F4FBFB] border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#1A4D56] flex items-center justify-center mb-6 shadow-sm">
                  {feat.icon}
                </div>
                <h3 className="text-xl font-bold text-[#0B1F24] mb-3">{feat.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{feat.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}