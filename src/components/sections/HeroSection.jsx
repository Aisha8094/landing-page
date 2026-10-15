import React from 'react';
import { 
  ShieldCheck, 
  Bell, 
  Lock, 
  Home, 
  Heart, 
  Sparkles, 
  Users, 
  UserCheck, 
  Smile 
} from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen pt-28 pb-20 bg-[#0B1F24] text-white overflow-hidden flex items-center">
      
      {/* Background Image with Higher Opacity */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/src/assets/hero-bg.png"
          alt="Meditation background" 
          className="w-full h-full object-cover opacity-60 mix-blend-luminosity"
        />
        {/* Subtle Dark Gradient Overlay for Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1F24]/90 via-[#0B1F24]/70 to-[#0B1F24]/40" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Content */}
          <div className="lg:col-span-7 text-left">
            
            {/* Trusted Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-emerald-300 text-xs font-semibold mb-8 border border-white/10 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Trusted by 500,000+ people worldwide
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl sm:text-7xl font-black tracking-tight leading-[1.1] mb-6 text-white drop-shadow-md">
              Your Mental <br />
              <span className="text-[#64D8CB]">Wellness,</span> <br />
              Simplified.
            </h1>

            {/* Subtitle */}
            <p className="text-slate-200 text-base sm:text-lg max-w-xl mb-10 leading-relaxed font-normal drop-shadow-sm">
              Connect with licensed therapists, track your emotions, and build a healthier mind — all in one app. Free to start. Always private.
            </p>

            {/* App Store Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <button className="bg-white text-[#0B1F24] px-6 py-3.5 rounded-2xl flex items-center gap-3 hover:bg-slate-100 transition-all shadow-xl">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.3c.63-.78 1.06-1.85.94-2.93-.92.04-2.06.62-2.72 1.39-.59.68-1.11 1.77-.97 2.83 1.03.08 2.12-.51 2.75-1.29z"/>
                </svg>
                <div className="text-left">
                  <p className="text-[10px] uppercase font-bold text-slate-500 leading-none">Download on the</p>
                  <p className="text-sm font-extrabold leading-tight">App Store</p>
                </div>
              </button>

              <button className="bg-white/10 border border-white/20 text-white px-6 py-3.5 rounded-2xl flex items-center gap-3 hover:bg-white/20 transition-all shadow-xl backdrop-blur-md">
                <svg className="w-6 h-6 fill-current text-white" viewBox="0 0 24 24">
                  <path d="M3 20.5v-17c0-.55.32-1.02.8-1.24l11.1 9.74L3.8 21.74c-.48-.22-.8-.69-.8-1.24zm13.1-7.5l2.6 2.28c.45.39.45 1.04 0 1.43l-2.6 2.28-3.1-2.72 3.1-3.27zm-1.8-1.58L3.2 1.14l11.1 10.28zM3.2 22.86l11.1-10.28-11.1 10.28z"/>
                </svg>
                <div className="text-left">
                  <p className="text-[10px] uppercase font-bold text-slate-300 leading-none">Get it on</p>
                  <p className="text-sm font-extrabold leading-tight">Google Play</p>
                </div>
              </button>
            </div>

          </div>

          {/* Right Mobile App Mockup */}
          <div className="lg:col-span-5 relative flex justify-center">
            
            {/* Top Right Floating Badge */}
            <div className="absolute -top-4 right-0 sm:-right-2 z-30 bg-white text-[#0B1F24] px-3.5 py-2 rounded-2xl shadow-2xl flex items-center gap-2.5 border border-slate-100">
              <div className="w-7 h-7 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-600">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div>
                <p className="text-[11px] font-black text-slate-900 leading-none">100% Private</p>
                <p className="text-[9px] text-slate-500 font-medium leading-tight mt-0.5">End-to-end encrypted</p>
              </div>
            </div>

            {/* Bottom Left Floating Badge */}
            <div className="absolute bottom-6 -left-6 sm:-left-10 z-30 bg-white text-[#0B1F24] px-4 py-2.5 rounded-2xl shadow-2xl flex items-center gap-3 border border-slate-100">
              <div className="w-8 h-8 rounded-xl bg-teal-50 flex items-center justify-center text-[#26A69A]">
                <UserCheck className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs font-black text-slate-900 leading-none">Licensed Therapists</p>
                <p className="text-[10px] text-slate-500 font-medium mt-0.5">Verified & credentialed</p>
              </div>
            </div>

            {/* Mobile Glass Frame Container */}
            <div className="w-full max-w-[360px] bg-white/10 border border-white/20 backdrop-blur-2xl rounded-[2.5rem] pt-4 pb-3 px-4 shadow-2xl text-white relative z-10 overflow-hidden">
              
              {/* Phone Status Bar */}
              <div className="flex justify-between items-center text-[10px] text-slate-300 mb-3 px-2 font-semibold">
                <span>9:41</span>
                <div className="flex items-center gap-1.5 text-[8px]">
                  <span>📶</span>
                  <span>🔋</span>
                </div>
              </div>

              {/* User Header */}
              <div className="flex items-center justify-between mb-4 px-1">
                <div className="flex items-center gap-2.5">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop" 
                    alt="Williams James" 
                    className="w-9 h-9 rounded-full object-cover border border-white/30"
                  />
                  <div>
                    <p className="text-[9px] text-slate-300">Good Morning!</p>
                    <p className="text-xs font-extrabold text-white">Williams James</p>
                  </div>
                </div>
                <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center border border-white/15">
                  <Bell className="w-3.5 h-3.5 text-white" />
                </div>
              </div>

              {/* Unlock AI Support Banner */}
              <div className="bg-white/10 border border-white/10 rounded-2xl p-3 mb-3 flex justify-between items-center backdrop-blur-sm">
                <div>
                  <p className="text-xs font-bold text-white">Unlock AI Support</p>
                  <p className="text-[9px] text-slate-300">Get personalized guidance</p>
                </div>
                <button className="bg-[#1F5F6B] text-[10px] font-bold px-3 py-1.5 rounded-lg border border-white/20 hover:bg-[#26A69A] transition-all">
                  Upgrade
                </button>
              </div>

              {/* Mood Tracking Box */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-3 mb-3 backdrop-blur-sm">
                <div className="flex justify-between items-center mb-2">
                  <div>
                    <p className="text-xs font-extrabold text-white">Mood Tracking</p>
                    <p className="text-[9px] text-slate-400">24 hours</p>
                  </div>
                  <div className="flex items-center gap-1 text-[10px] text-slate-300 font-medium">
                    <Smile className="w-3.5 h-3.5 text-amber-300" />
                    <span>Avg: 4.0</span>
                  </div>
                </div>

                {/* Today / Weekly / Yearly Tabs */}
                <div className="bg-black/20 p-1 rounded-xl flex text-center text-[9px] font-bold mb-3">
                  <span className="flex-1 py-1 bg-white text-[#0B1F24] rounded-lg shadow-sm">Today</span>
                  <span className="flex-1 py-1 text-slate-400">Weekly</span>
                  <span className="flex-1 py-1 text-slate-400">Yearly</span>
                </div>

                {/* Color Bars */}
                <div className="flex items-end justify-between h-14 px-2 mb-1.5">
                  <div className="w-2.5 bg-amber-200 h-[30%] rounded-full"></div>
                  <div className="w-2.5 bg-amber-400 h-[55%] rounded-full"></div>
                  <div className="w-2.5 bg-rose-500 h-[85%] rounded-full"></div>
                  <div className="w-2.5 bg-purple-500 h-[100%] rounded-full"></div>
                  <div className="w-2.5 bg-rose-400 h-[65%] rounded-full"></div>
                  <div className="w-2.5 bg-amber-500 h-[40%] rounded-full"></div>
                </div>

                {/* Timestamps */}
                <div className="flex justify-between text-[8px] text-slate-400 font-medium px-1">
                  <span>6 AM</span>
                  <span>10 AM</span>
                  <span>2 PM</span>
                  <span>6 PM</span>
                  <span>10 PM</span>
                  <span>2 AM</span>
                </div>
              </div>

              {/* Love Check-in Card */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-2.5 mb-3 flex items-center justify-between backdrop-blur-sm">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-rose-500/20 text-rose-300 flex items-center justify-center text-xs border border-rose-400/20">
                    ☺️
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white">Love</p>
                    <p className="text-[9px] text-slate-400">Latest check-in</p>
                  </div>
                </div>
                <button className="bg-[#1F5F6B] text-[10px] font-bold px-3 py-1 rounded-lg border border-white/20">
                  Check-in
                </button>
              </div>

              {/* Journal & Self Chat Row */}
              <div className="grid grid-cols-2 gap-2 text-left mb-3">
                <div className="bg-white/5 border border-white/10 p-2.5 rounded-2xl backdrop-blur-sm">
                  <p className="font-bold text-xs text-white">Journal</p>
                  <p className="text-slate-400 text-[8px] mt-0.5">Write your thoughts</p>
                </div>
                
                {/* Self Chat with Lock Icon */}
                <div className="bg-white/5 border border-white/10 p-2.5 rounded-2xl backdrop-blur-sm relative">
                  <Lock className="w-3 h-3 text-slate-400 absolute top-2.5 right-2.5" />
                  <p className="font-bold text-xs text-white">Self Chat</p>
                  <p className="text-slate-400 text-[8px] mt-0.5">Upgrade to unlock</p>
                </div>
              </div>

              {/* Therapist Connection Section */}
              <div className="bg-[#15464F]/50 border border-white/10 rounded-2xl p-3 mb-3 text-left">
                <p className="text-xs font-bold text-white mb-0.5">Therapist Connection</p>
                <p className="text-[9px] text-slate-300 leading-snug">
                  Your therapist can track your progress and provide personalized support.
                </p>
              </div>

              {/* Bottom Navigation Dock */}
              <div className="bg-[#0B1F24]/80 border border-white/15 rounded-full px-4 py-2.5 flex items-center justify-between text-slate-400">
                <Home className="w-4 h-4 text-white cursor-pointer" />
                <Heart className="w-4 h-4 hover:text-white cursor-pointer" />
                <div className="w-8 h-8 rounded-full bg-[#26A69A] text-white flex items-center justify-center shadow-lg cursor-pointer">
                  <Sparkles className="w-4 h-4" />
                </div>
                <Users className="w-4 h-4 hover:text-white cursor-pointer" />
                <UserCheck className="w-4 h-4 hover:text-white cursor-pointer" />
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}