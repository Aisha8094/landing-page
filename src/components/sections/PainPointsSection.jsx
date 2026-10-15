import React from 'react';

export default function PainPointsSection() {
  const cards = [
    {
      num: "01",
      bg: "bg-rose-50/70",
      border: "border-rose-100",
      iconBg: "bg-rose-100 text-rose-600",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      text: "Feeling overwhelmed or anxious with no clear path forward"
    },
    {
      num: "02",
      bg: "bg-amber-50/70",
      border: "border-amber-100",
      iconBg: "bg-amber-100 text-amber-600",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      text: "Not knowing where to start with mental health support"
    },
    {
      num: "03",
      bg: "bg-purple-50/70",
      border: "border-purple-100",
      iconBg: "bg-purple-100 text-purple-600",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
      text: "Difficulty finding trusted, affordable therapists nearby"
    },
    {
      num: "04",
      bg: "bg-cyan-50/70",
      border: "border-cyan-100",
      iconBg: "bg-cyan-100 text-cyan-600",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
      text: "Lack of consistency in self-care and daily wellness habits"
    }
  ];

  return (
    <section className="py-24 bg-white text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <div className="inline-block px-4 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-semibold mb-6">
          • Sound Familiar?
        </div>

        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-2 text-slate-900">
          Mental health support
        </h2>
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-16 text-slate-300">
          shouldn't be this hard.
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          {cards.map((item, index) => (
            <div key={index} className={`${item.bg} border ${item.border} p-6 rounded-3xl relative flex flex-col justify-between h-48 shadow-sm`}>
              <div className="flex justify-between items-start">
                <div className={`w-10 h-10 rounded-2xl ${item.iconBg} flex items-center justify-center`}>
                  {item.icon}
                </div>
                <span className="text-3xl font-black text-slate-200">{item.num}</span>
              </div>
              <p className="text-slate-800 text-sm font-medium leading-snug">
                {item.text}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}