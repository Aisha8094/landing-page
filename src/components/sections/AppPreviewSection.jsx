import React from 'react';
import { Search, Bell, Smile, Send } from 'lucide-react';

export default function AppPreviewSection() {
  return (
    <section id="preview" className="py-24 bg-[#0B2126] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Left Title */}
          <div className="lg:col-span-7 text-left">
            <div className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-emerald-300 text-xs font-bold tracking-wide mb-6 border border-white/10">
              • App Preview
            </div>
            <h2 className="text-4xl sm:text-6xl font-black tracking-tight text-white leading-tight">
              Every screen, <br />
              <span className="text-[#64D8CB]">crafted for calm.</span>
            </h2>
          </div>

          {/* Right Text & Ratings */}
          <div className="lg:col-span-5 text-left lg:pt-8">
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8 font-normal">
              A beautiful, intuitive experience designed to feel supportive — so you can focus on what matters most.
            </p>

            {/* Ratings Row */}
            <div className="flex items-center gap-8 border-t border-white/10 pt-6">
              <div>
                <p className="text-2xl font-black text-white flex items-center gap-1">
                  4.9 <span className="text-amber-400 text-lg">★</span>
                </p>
                <p className="text-[11px] text-slate-400 font-medium">App Store</p>
              </div>

              <div className="border-l border-white/10 pl-8">
                <p className="text-2xl font-black text-white">500K+</p>
                <p className="text-[11px] text-slate-400 font-medium">Downloads</p>
              </div>

              <div className="border-l border-white/10 pl-8">
                <p className="text-2xl font-black text-white">89%</p>
                <p className="text-[11px] text-slate-400 font-medium">Feel Better</p>
              </div>
            </div>
          </div>

        </div>

        {/* 3 Phones Display Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end pt-6">
          
          {/* LEFT PHONE: My Connections */}
          <div className="bg-white text-slate-900 rounded-t-[2.5rem] p-4 shadow-2xl border border-slate-200/20 max-w-[320px] mx-auto w-full relative">
            
            {/* Top Floating Badge */}
            <div className="absolute top-3 left-4 bg-slate-700/80 text-white text-[9px] font-bold px-2.5 py-0.5 rounded-full z-20">
              Dashboard
            </div>

            {/* Phone Notch */}
            <div className="w-24 h-4 bg-slate-900 rounded-b-xl mx-auto mb-3"></div>

            {/* Header */}
            <h3 className="text-xs font-bold text-slate-900 text-center mb-3">My connections</h3>

            {/* Support / Professionals Tabs */}
            <div className="bg-slate-100 p-1 rounded-xl flex text-[10px] font-bold text-center mb-3">
              <span className="flex-1 py-1 bg-white rounded-lg shadow-sm text-slate-900">My Support</span>
              <span className="flex-1 py-1 text-slate-400 font-medium">Professionals</span>
            </div>

            {/* Shared Tabs */}
            <div className="flex justify-between text-[10px] text-slate-500 font-medium mb-3 px-2">
              <span>Shared with Me</span>
              <span className="text-[#26A69A] font-bold border-b-2 border-[#26A69A] pb-0.5">Shared with Support</span>
            </div>

            {/* Share Code Button */}
            <button className="w-full bg-[#26A69A] text-white text-xs font-bold py-2 rounded-xl flex items-center justify-center gap-1.5 mb-4 shadow-sm">
              <Send className="w-3 h-3" /> Share Code
            </button>

            {/* Connections List */}
            <div className="space-y-2.5 text-left">
              <div className="bg-slate-50 p-2.5 rounded-xl flex items-center justify-between border border-slate-100">
                <div className="flex items-center gap-2">
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop" alt="Williams" className="w-7 h-7 rounded-full object-cover" />
                  <div>
                    <p className="text-xs font-bold text-slate-900 leading-tight">Williams James</p>
                    <p className="text-[9px] text-slate-400">Relation: <span className="text-[#26A69A] font-medium">Guardian</span></p>
                  </div>
                </div>
                <span className="text-slate-300 text-xs">••</span>
              </div>

              <div className="bg-slate-50 p-2.5 rounded-xl flex items-center justify-between border border-slate-100">
                <div className="flex items-center gap-2">
                  <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop" alt="Katrina" className="w-7 h-7 rounded-full object-cover" />
                  <div>
                    <p className="text-xs font-bold text-slate-900 leading-tight">Katrina Williams</p>
                    <p className="text-[9px] text-slate-400">Relation: <span className="text-[#26A69A] font-medium">Friend</span></p>
                  </div>
                </div>
                <span className="text-slate-300 text-xs">••</span>
              </div>

              <div className="bg-slate-50 p-2.5 rounded-xl flex items-center justify-between border border-slate-100 opacity-60">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-slate-200"></div>
                  <div>
                    <p className="text-xs font-bold text-slate-900">Johnson James</p>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* CENTER PHONE: Main Dashboard */}
          <div className="bg-white text-slate-900 rounded-t-[2.5rem] p-4 shadow-2xl border border-slate-200/20 max-w-[340px] mx-auto w-full relative -translate-y-4">
            
            {/* Top Floating Badge */}
            <div className="absolute top-3 left-4 bg-slate-700/80 text-white text-[9px] font-bold px-2.5 py-0.5 rounded-full z-20">
              Journey
            </div>

            {/* Phone Notch */}
            <div className="w-28 h-4 bg-slate-900 rounded-b-xl mx-auto mb-3"></div>

            {/* User Header */}
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-[9px] text-slate-400 text-left">Good Morning!</p>
                <p className="text-xs font-extrabold text-slate-900">Williams James</p>
              </div>
              <div className="w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center border border-slate-200">
                <Bell className="w-3.5 h-3.5 text-slate-700" />
              </div>
            </div>

            {/* Unlock AI Support */}
            <div className="bg-slate-50 border border-slate-100 rounded-2xl p-3 mb-3 flex justify-between items-center text-left">
              <div>
                <p className="text-xs font-bold text-slate-900">Unlock AI Support</p>
                <p className="text-[9px] text-slate-400">Get personalized guidance</p>
              </div>
              <button className="bg-[#1F5F6B] text-white text-[10px] font-bold px-3 py-1 rounded-lg">
                Upgrade
              </button>
            </div>

            {/* Mood Tracking */}
            <div className="bg-slate-50 border border-slate-100 rounded-2xl p-3 mb-2 text-left">
              <div className="flex justify-between items-center mb-2">
                <div>
                  <p className="text-xs font-bold text-slate-900">Mood Tracking</p>
                  <p className="text-[9px] text-slate-400">24 hours</p>
                </div>
                <div className="flex items-center gap-1 text-[9px] text-slate-500 font-medium">
                  <Smile className="w-3 h-3 text-amber-500" /> Avg: 4.0
                </div>
              </div>

              <div className="bg-slate-200/60 p-0.5 rounded-xl flex text-center text-[9px] font-bold mb-3">
                <span className="flex-1 py-1 bg-white text-slate-900 rounded-lg shadow-sm">Today</span>
                <span className="flex-1 py-1 text-slate-400">Weekly</span>
                <span className="flex-1 py-1 text-slate-400">Yearly</span>
              </div>

              {/* Chart */}
              <div className="flex items-end justify-between h-14 px-2">
                <div className="w-2.5 bg-amber-200 h-[30%] rounded-full"></div>
                <div className="w-2.5 bg-amber-400 h-[55%] rounded-full"></div>
                <div className="w-2.5 bg-rose-500 h-[85%] rounded-full"></div>
                <div className="w-2.5 bg-purple-500 h-[100%] rounded-full"></div>
                <div className="w-2.5 bg-orange-400 h-[65%] rounded-full"></div>
                <div className="w-2.5 bg-amber-500 h-[40%] rounded-full"></div>
              </div>
            </div>

          </div>

          {/* RIGHT PHONE: My Journey / Courses */}
          <div className="bg-white text-slate-900 rounded-t-[2.5rem] p-4 shadow-2xl border border-slate-200/20 max-w-[320px] mx-auto w-full relative">
            
            {/* Top Floating Badge */}
            <div className="absolute top-3 left-4 bg-slate-700/80 text-white text-[9px] font-bold px-2.5 py-0.5 rounded-full z-20">
              Profile
            </div>

            {/* Phone Notch */}
            <div className="w-24 h-4 bg-slate-900 rounded-b-xl mx-auto mb-3"></div>

            {/* Header */}
            <h3 className="text-xs font-bold text-slate-900 text-center mb-3">My Journey</h3>

            {/* Search Field */}
            <div className="bg-slate-100 rounded-xl px-3 py-2 flex items-center gap-2 mb-4 text-left">
              <Search className="w-3.5 h-3.5 text-slate-400" />
              <span className="text-[10px] text-slate-400">Search here</span>
            </div>

            {/* Started Journeys Grid */}
            <div className="text-left mb-2">
              <div className="flex justify-between items-center mb-2">
                <p className="text-xs font-bold text-slate-900">Started Journeys</p>
                <span className="text-[9px] text-[#26A69A] font-bold">See all</span>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div className="rounded-xl overflow-hidden border border-slate-100 shadow-sm">
                  <img src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=200&auto=format&fit=crop" alt="Basics of Anxiety" className="w-full h-16 object-cover" />
                  <div className="p-2">
                    <p className="text-[10px] font-bold text-slate-900 leading-tight">Basics of Anxiety</p>
                    <p className="text-[8px] text-slate-400 mt-0.5">Williams John | 10 Sessions</p>
                  </div>
                </div>

                <div className="rounded-xl overflow-hidden border border-slate-100 shadow-sm">
                  <img src="https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?q=80&w=200&auto=format&fit=crop" alt="Intro to Trauma" className="w-full h-16 object-cover" />
                  <div className="p-2">
                    <p className="text-[10px] font-bold text-slate-900 leading-tight">Intro to Trauma</p>
                    <p className="text-[8px] text-slate-400 mt-0.5">Williams John | 10 Sessions</p>
                  </div>
                </div>
              </div>
            </div>

            {/* All Journeys Header */}
            <div className="text-left pt-2">
              <p className="text-xs font-bold text-slate-900">All Journeys</p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}