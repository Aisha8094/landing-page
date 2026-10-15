import React from 'react';
import { Heart } from 'lucide-react';

export default function FinalCtaSection() {
  return (
    <section className="py-24 bg-[#114D56] text-white relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-emerald-200 text-xs font-bold tracking-wide mb-8 border border-white/10 backdrop-blur-sm">
          <Heart className="w-3.5 h-3.5 text-emerald-300 fill-current" /> Free to start. Private. Secure.
        </div>

        <h2 className="text-4xl sm:text-6xl font-black tracking-tight mb-6 leading-tight text-white">
          Start Your Wellness <br />
          <span className="text-[#64D8CB]">Journey Today</span>
        </h2>

        <p className="text-slate-200 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
          No pressure. No judgment. Just a safe, compassionate space to explore, reflect, and grow — right in your pocket.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <button className="bg-white text-[#0B1F24] px-6 py-3.5 rounded-2xl flex items-center gap-3 hover:bg-slate-100 transition-all shadow-lg w-full sm:w-auto justify-center">
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.3c.63-.78 1.06-1.85.94-2.93-.92.04-2.06.62-2.72 1.39-.59.68-1.11 1.77-.97 2.83 1.03.08 2.12-.51 2.75-1.29z"/>
            </svg>
            <div className="text-left">
              <p className="text-[10px] uppercase font-bold text-slate-500 leading-none">Download on the</p>
              <p className="text-sm font-extrabold leading-tight">App Store</p>
            </div>
          </button>

          <button className="bg-white/10 border border-white/20 text-white px-6 py-3.5 rounded-2xl flex items-center gap-3 hover:bg-white/20 transition-all shadow-lg w-full sm:w-auto justify-center backdrop-blur-sm">
            <svg className="w-6 h-6 fill-current text-white" viewBox="0 0 24 24">
              <path d="M3 20.5v-17c0-.55.32-1.02.8-1.24l11.1 9.74L3.8 21.74c-.48-.22-.8-.69-.8-1.24zm13.1-7.5l2.6 2.28c.45.39.45 1.04 0 1.43l-2.6 2.28-3.1-2.72 3.1-3.27zm-1.8-1.58L3.2 1.14l11.1 10.28zM3.2 22.86l11.1-10.28-11.1 10.28z"/>
            </svg>
            <div className="text-left">
              <p className="text-[10px] uppercase font-bold text-slate-300 leading-none">Get it on</p>
              <p className="text-sm font-extrabold leading-tight">Google Play</p>
            </div>
          </button>
        </div>

        <div className="max-w-md mx-auto">
          <p className="text-xs text-slate-300 mb-3 font-medium">
            Or get notified when we launch new features
          </p>

          <form onSubmit={(e) => e.preventDefault()} className="flex gap-2">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="bg-white/10 border border-white/20 text-white placeholder-slate-400 text-sm rounded-xl px-4 py-3 flex-1 focus:outline-none focus:ring-2 focus:ring-[#64D8CB] backdrop-blur-sm"
            />
            <button 
              type="submit" 
              className="bg-[#26A69A] text-white font-bold text-sm px-6 py-3 rounded-xl hover:opacity-90 transition-all shrink-0 shadow-md"
            >
              Notify Me
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}