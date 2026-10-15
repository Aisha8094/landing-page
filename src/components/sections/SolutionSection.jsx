import React from 'react';
import { 
  Sparkles, 
  UserCheck, 
  BarChart2, 
  Brain, 
  Bot, 
  ShieldCheck, 
  Lock, 
  Award, 
  ArrowRight 
} from 'lucide-react';

export default function SolutionSection() {
  return (
    <section className="py-20 bg-[#EBF5F4] text-[#134E58]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Section Card Container */}
        <div className="bg-[#EBF5F4] rounded-[2.5rem] p-6 sm:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column Content */}
            <div className="lg:col-span-7 text-left">
              
              {/* Top Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-transparent border border-[#2A7B88]/30 text-[#134E58] text-xs font-semibold mb-6">
                <Sparkles className="w-3.5 h-3.5 text-[#2A7B88]" />
                <span>The Self Solution</span>
              </div>

              {/* Heading */}
              <h2 className="text-4xl sm:text-6xl font-black tracking-tight text-[#134E58] leading-[1.15] mb-6">
                One app. <br />
                <span className="text-[#3BA0AC]">Everything you need.</span>
              </h2>

              {/* Subtitle */}
              <p className="text-[#3A6B73] text-base sm:text-lg leading-relaxed mb-8 max-w-xl font-normal">
                Self App brings therapy, emotional tracking, and guided support into one seamless, compassionate experience — designed to meet you exactly where you are.
              </p>

              {/* 4 Feature Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                
                {/* Feature 1 */}
                <div className="bg-white rounded-2xl p-4 flex items-center gap-3.5 shadow-sm border border-slate-100">
                  <div className="w-9 h-9 rounded-xl bg-[#E3F2F1] flex items-center justify-center shrink-0">
                    <UserCheck className="w-4 h-4 text-[#134E58]" />
                  </div>
                  <span className="text-xs font-bold text-[#134E58]">Licensed therapists</span>
                </div>

                {/* Feature 2 */}
                <div className="bg-white rounded-2xl p-4 flex items-center gap-3.5 shadow-sm border border-slate-100">
                  <div className="w-9 h-9 rounded-xl bg-[#E3F2F1] flex items-center justify-center shrink-0">
                    <BarChart2 className="w-4 h-4 text-[#134E58]" />
                  </div>
                  <span className="text-xs font-bold text-[#134E58]">Daily mood tracking & insights</span>
                </div>

                {/* Feature 3 */}
                <div className="bg-white rounded-2xl p-4 flex items-center gap-3.5 shadow-sm border border-slate-100">
                  <div className="w-9 h-9 rounded-xl bg-[#E3F2F1] flex items-center justify-center shrink-0">
                    <Brain className="w-4 h-4 text-[#134E58]" />
                  </div>
                  <span className="text-xs font-bold text-[#134E58]">Guided meditations & journaling</span>
                </div>

                {/* Feature 4 */}
                <div className="bg-white rounded-2xl p-4 flex items-center gap-3.5 shadow-sm border border-slate-100">
                  <div className="w-9 h-9 rounded-xl bg-[#E3F2F1] flex items-center justify-center shrink-0">
                    <Bot className="w-4 h-4 text-[#134E58]" />
                  </div>
                  <div className="text-xs font-bold text-[#134E58] leading-tight">
                    AI companion, 24/7 <br />
                    <span className="text-slate-500 font-normal">judgment-free</span>
                  </div>
                </div>

              </div>

              {/* CTA Button */}
              <button className="bg-[#2A7B88] hover:bg-[#134E58] text-white font-bold px-7 py-3.5 rounded-2xl text-sm transition-all shadow-md flex items-center gap-2">
                <span>Start for Free</span>
                <ArrowRight className="w-4 h-4" />
              </button>

            </div>

            {/* Right Column Cards */}
            <div className="lg:col-span-5 space-y-4">
              
              {/* Big Stat Box */}
              <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 text-center">
                <p className="text-6xl sm:text-7xl font-black text-[#134E58] tracking-tight mb-2">
                  89%
                </p>
                <p className="text-xs sm:text-sm text-[#48737B] font-medium max-w-xs mx-auto leading-relaxed">
                  of daily trackers feel more in control within 2 weeks
                </p>
              </div>

              {/* Progress Tracker Card */}
              <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 space-y-4 text-left">
                
                {/* Progress 1 */}
                <div>
                  <div className="flex justify-between text-xs font-bold text-[#134E58] mb-1.5">
                    <span>Daily Mood Check-ins</span>
                    <span className="text-slate-500 font-normal">85%</span>
                  </div>
                  <div className="w-full bg-[#EAF4F3] h-2 rounded-full overflow-hidden">
                    <div className="bg-[#2A7B88] h-full rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>

                {/* Progress 2 */}
                <div>
                  <div className="flex justify-between text-xs font-bold text-[#134E58] mb-1.5">
                    <span>Weekly Journal Entries</span>
                    <span className="text-slate-500 font-normal">72%</span>
                  </div>
                  <div className="w-full bg-[#EAF4F3] h-2 rounded-full overflow-hidden">
                    <div className="bg-[#236873] h-full rounded-full" style={{ width: '72%' }}></div>
                  </div>
                </div>

                {/* Progress 3 */}
                <div>
                  <div className="flex justify-between text-xs font-bold text-[#134E58] mb-1.5">
                    <span>Goal Milestones Reached</span>
                    <span className="text-slate-500 font-normal">68%</span>
                  </div>
                  <div className="w-full bg-[#EAF4F3] h-2 rounded-full overflow-hidden">
                    <div className="bg-[#2A7B88] h-full rounded-full" style={{ width: '68%' }}></div>
                  </div>
                </div>

              </div>

              {/* 3 Bottom Compliance Cards */}
              <div className="grid grid-cols-3 gap-3">
                <div className="bg-white rounded-2xl p-4 text-center shadow-sm border border-slate-100 flex flex-col items-center justify-center">
                  <div className="w-8 h-8 rounded-xl bg-[#E3F2F1] flex items-center justify-center mb-2">
                    <ShieldCheck className="w-4 h-4 text-[#2A7B88]" />
                  </div>
                  <p className="text-xs font-black text-[#134E58]">HIPAA</p>
                  <p className="text-[10px] text-slate-400 font-medium">Aligned</p>
                </div>

                <div className="bg-white rounded-2xl p-4 text-center shadow-sm border border-slate-100 flex flex-col items-center justify-center">
                  <div className="w-8 h-8 rounded-xl bg-[#E3F2F1] flex items-center justify-center mb-2">
                    <Lock className="w-4 h-4 text-[#2A7B88]" />
                  </div>
                  <p className="text-xs font-black text-[#134E58]">E2E</p>
                  <p className="text-[10px] text-slate-400 font-medium">Encrypted</p>
                </div>

                <div className="bg-white rounded-2xl p-4 text-center shadow-sm border border-slate-100 flex flex-col items-center justify-center">
                  <div className="w-8 h-8 rounded-xl bg-[#E3F2F1] flex items-center justify-center mb-2">
                    <Award className="w-4 h-4 text-[#2A7B88]" />
                  </div>
                  <p className="text-xs font-black text-[#134E58]">Licensed</p>
                  <p className="text-[10px] text-slate-400 font-medium">Only</p>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}