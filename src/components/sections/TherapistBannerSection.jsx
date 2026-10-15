import React from 'react';
import { ShieldCheck, Lock, Award } from 'lucide-react';

export default function TherapistBannerSection() {
  const features = [
    "AI-generated session notes",
    "Real-time client analytics",
    "Smart treatment planning",
    "Secure client messaging",
    "Treatment reminders",
    "HIPAA-aligned & encrypted"
  ];

  return (
    <section className="py-12 bg-white text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-[#125862] rounded-[2.5rem] p-8 sm:p-14 relative overflow-hidden shadow-xl">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            
            <div className="lg:col-span-7 text-left">
              <div className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-emerald-300 text-xs font-bold tracking-wide mb-6 border border-white/10">
                • For Mental Health Professionals
              </div>

              <h2 className="text-3xl sm:text-5xl font-black tracking-tight mb-6 leading-tight text-white">
                Are you a therapist? <br />
                <span className="text-emerald-300">Nodaly was built for you.</span>
              </h2>

              <p className="text-slate-200 text-sm sm:text-base mb-8 max-w-xl leading-relaxed">
                Nodaly is the clinical platform powering Self App on the therapist side. Manage your entire practice — session notes, treatment plans, client progress, and AI-driven insights — all in one place.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
                {features.map((feat, idx) => (
                  <div key={idx} className="bg-white/10 border border-white/10 px-3.5 py-2 rounded-xl flex items-center gap-2.5 backdrop-blur-sm">
                    <span className="text-emerald-300 text-xs font-bold">✓</span>
                    <span className="text-xs font-semibold text-slate-100">{feat}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <button className="bg-white text-[#0B1F24] font-extrabold px-8 py-4 rounded-xl hover:bg-slate-100 transition-all shadow-md text-sm flex items-center gap-2">
                  <span>↗</span> Visit Nodaly
                </button>
                <span className="text-xs text-slate-300 flex items-center gap-1.5">
                  <Lock className="w-3.5 h-3.5 text-emerald-300" /> Free to explore. No credit card needed.
                </span>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-4">
              
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-white/10 border border-white/10 p-5 rounded-2xl text-center backdrop-blur-sm">
                  <p className="text-2xl sm:text-3xl font-black text-white">5h+</p>
                  <p className="text-[11px] text-slate-300 mt-1">Saved weekly</p>
                </div>

                <div className="bg-white/10 border border-white/10 p-5 rounded-2xl text-center backdrop-blur-sm">
                  <p className="text-2xl sm:text-3xl font-black text-white">70%</p>
                  <p className="text-[11px] text-slate-300 mt-1">Less paperwork</p>
                </div>

                <div className="bg-white/10 border border-white/10 p-5 rounded-2xl text-center backdrop-blur-sm">
                  <p className="text-2xl sm:text-3xl font-black text-white">3x</p>
                  <p className="text-[11px] text-slate-300 mt-1">Faster notes</p>
                </div>

                <div className="bg-white/10 border border-white/10 p-5 rounded-2xl text-center backdrop-blur-sm">
                  <p className="text-2xl sm:text-3xl font-black text-white">2x</p>
                  <p className="text-[11px] text-slate-300 mt-1">More client time</p>
                </div>
              </div>

              <div className="bg-white/10 border border-white/10 p-6 rounded-2xl backdrop-blur-sm text-left">
                <div className="flex items-center gap-1 text-amber-300 text-xs mb-3">
                  ★★★★★
                </div>
                <p className="text-xs text-slate-200 italic leading-relaxed mb-4">
                  "Nodaly cut my admin time in half. I spend more time with clients and less time on paperwork. It's genuinely changed how I practice."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-slate-300 flex items-center justify-center text-xs text-slate-800 font-bold">
                    AL
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white">Dr. Amara L.</p>
                    <p className="text-[10px] text-slate-300">Licensed Psychologist, NYC</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-center gap-6 pt-2 text-[11px] text-slate-300 font-medium">
                <span className="flex items-center gap-1"><ShieldCheck className="w-3.5 h-3.5 text-emerald-300" /> HIPAA</span>
                <span className="flex items-center gap-1"><Lock className="w-3.5 h-3.5 text-emerald-300" /> E2E Encrypted</span>
                <span className="flex items-center gap-1"><Award className="w-3.5 h-3.5 text-emerald-300" /> SOC 2</span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}