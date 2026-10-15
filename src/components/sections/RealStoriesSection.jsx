import React from 'react';

export default function RealStoriesSection() {
  const testimonials = [
    {
      quote: "Self App helped me stay consistent with therapy and actually understand my emotions better. I finally feel like I have the tools to manage my anxiety.",
      name: "Maya R.",
      role: "Graduate Student, 24",
      tag: "Anxiety & Stress",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop"
    },
    {
      quote: "I was skeptical about online therapy, but the matching was spot-on. My therapist gets me. The mood tracking showed me patterns I never noticed before.",
      name: "David K.",
      role: "Software Engineer, 31",
      tag: "Burnout Recovery",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"
    },
    {
      quote: "Seeing my mood progress over weeks gave me real hope. The guided meditations before bed changed my sleep completely. I recommend it to everyone.",
      name: "Priya S.",
      role: "Marketing Manager, 28",
      tag: "Sleep & Mindfulness",
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=200&auto=format&fit=crop"
    }
  ];

  return (
    <section className="py-24 bg-white text-[#0B1F24]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Section Pill Tag */}
        <div className="inline-block px-4 py-1.5 rounded-full bg-[#E0F2F1] text-[#1A4D56] text-xs font-bold tracking-wide mb-4">
          Real Stories
        </div>

        {/* Main Heading */}
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4 text-[#0B1F24]">
          People just like you <br className="hidden sm:inline" />
          are finding their way
        </h2>

        {/* Subtitle */}
        <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto mb-16 leading-relaxed">
          Join half a million people who made Self part of their daily wellness routine.
        </p>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {testimonials.map((item, index) => (
            <div 
              key={index} 
              className="bg-[#FAFCFC] border border-slate-100 rounded-3xl p-8 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              <div>
                {/* 5-Star Rating */}
                <div className="flex items-center gap-1 text-amber-400 text-sm mb-6">
                  ★★★★★
                </div>

                {/* Quote */}
                <p className="text-slate-700 text-sm leading-relaxed mb-8 font-normal">
                  "{item.quote}"
                </p>
              </div>

              {/* User Meta & Tag */}
              <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                <div className="flex items-center gap-3">
                  <img 
                    src={item.avatar} 
                    alt={item.name} 
                    className="w-10 h-10 rounded-full object-cover border border-slate-200"
                  />
                  <div>
                    <h3 className="text-sm font-bold text-[#0B1F24]">{item.name}</h3>
                    <p className="text-[11px] text-slate-400">{item.role}</p>
                  </div>
                </div>

                {/* Category Pill Tag */}
                <span className="px-3 py-1 rounded-full bg-[#E0F2F1]/60 text-[#1A4D56] text-[10px] font-semibold shrink-0">
                  {item.tag}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}