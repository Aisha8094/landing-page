import React from 'react';
import { ArrowUpRight } from 'lucide-react';

// Apni local downloaded images yahan import karein:
import mainBlogImg from '../../assets/youga.png';
import journalImg from '../../assets/book.png';
import sleepImg from '../../assets/night.png';
import therapyImg from '../../assets/shanti.png';
import relImg from '../../assets/smile.png';
import careImg from '../../assets/formal.png';
import burnoutImg from '../../assets/thinking.png';

export default function BlogSection() {
  return (
    <section id="blog" className="py-20 bg-white text-[#134E58]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 text-left">
          <div>
            <div className="inline-block px-4 py-1.5 rounded-full bg-[#EAF4F3] text-[#134E58] text-xs font-bold tracking-wider mb-3 border border-[#2A7B88]/20">
              • From the Blog
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-[#134E58] tracking-tight leading-tight">
              Insights for your <br />
              <span className="text-[#3BA0AC]">mental wellness</span>
            </h2>
          </div>

          <button className="mt-6 md:mt-0 inline-flex items-center gap-2 border border-slate-200 px-5 py-2.5 rounded-2xl text-xs font-bold text-[#134E58] hover:bg-slate-50 transition-all self-start shadow-xs">
            View all articles <ArrowUpRight className="w-4 h-4 text-[#2A7B88]" />
          </button>
        </div>

        {/* Top Grid: Main Featured Article + Right 3 Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          
          {/* Main Featured Article (Left Big Card) */}
          <div className="lg:col-span-7 text-left group cursor-pointer">
            <div className="rounded-[2rem] overflow-hidden mb-4 border border-slate-100 shadow-sm relative">
              <span className="absolute top-4 left-4 bg-black/40 text-white text-[11px] font-bold px-3 py-1 rounded-full backdrop-blur-md z-10">
                Mindfulness
              </span>
              <img 
                src={mainBlogImg} 
                alt="Mindfulness meditation" 
                className="w-full h-[320px] object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            
            <div className="flex items-center gap-3 text-xs text-slate-500 mb-2 font-medium">
              <span className="font-bold text-[#134E58]">Dr. Sarah Chen</span>
              <span>•</span>
              <span>Apr 12, 2026</span>
              <span>•</span>
              <span>5 min read</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-black text-[#134E58] mb-2 leading-snug group-hover:text-[#2A7B88] transition-colors">
              How 10 Minutes of Daily Mindfulness Can Rewire Your Anxiety Response
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed max-w-2xl font-normal">
              New research shows that consistent short mindfulness sessions create measurable changes in the amygdala — the brain's fear center. Here's what the science says and how to start today.
            </p>
          </div>

          {/* Right Side 3 Small Cards (Tight spacing using gap-3) */}
          <div className="lg:col-span-5 flex flex-col justify-start gap-3 text-left">
            
            {/* Small Card 1: Journaling */}
            <div className="bg-[#FAF8F5] p-3.5 rounded-2xl border border-slate-100 flex items-center gap-4 hover:shadow-sm transition-all cursor-pointer group">
              <img src={journalImg} alt="Journaling" className="w-20 h-20 rounded-xl object-cover shrink-0" />
              <div>
                <span className="text-[9px] font-bold text-[#2A7B88] bg-[#EAF4F3] px-2 py-0.5 rounded-md border border-[#2A7B88]/20 inline-block mb-1">
                  Journaling
                </span>
                <h4 className="text-xs sm:text-sm font-extrabold text-[#134E58] leading-tight mb-1 group-hover:text-[#2A7B88] transition-colors">
                  The Science Behind Expressive Writing and Emotional Healing
                </h4>
                <p className="text-[10px] text-slate-400 font-medium">James Dokter • 4 min read</p>
              </div>
            </div>

            {/* Small Card 2: Sleep */}
            <div className="bg-[#FAF8F5] p-3.5 rounded-2xl border border-slate-100 flex items-center gap-4 hover:shadow-sm transition-all cursor-pointer group">
              <img src={sleepImg} alt="Sleep" className="w-20 h-20 rounded-xl object-cover shrink-0" />
              <div>
                <span className="text-[9px] font-bold text-[#2A7B88] bg-[#EAF4F3] px-2 py-0.5 rounded-md border border-[#2A7B88]/20 inline-block mb-1">
                  Sleep
                </span>
                <h4 className="text-xs sm:text-sm font-extrabold text-[#134E58] leading-tight mb-1 group-hover:text-[#2A7B88] transition-colors">
                  Why Poor Sleep Is the Hidden Driver of Anxiety and Low Mood
                </h4>
                <p className="text-[10px] text-slate-400 font-medium">Dr. Priya Nair • 6 min read</p>
              </div>
            </div>

            {/* Small Card 3: Therapy */}
            <div className="bg-[#FAF8F5] p-3.5 rounded-2xl border border-slate-100 flex items-center gap-4 hover:shadow-sm transition-all cursor-pointer group">
              <img src={therapyImg} alt="Therapy" className="w-20 h-20 rounded-xl object-cover shrink-0" />
              <div>
                <span className="text-[9px] font-bold text-[#2A7B88] bg-[#EAF4F3] px-2 py-0.5 rounded-md border border-[#2A7B88]/20 inline-block mb-1">
                  Therapy
                </span>
                <h4 className="text-xs sm:text-sm font-extrabold text-[#134E58] leading-tight mb-1 group-hover:text-[#2A7B88] transition-colors">
                  When to Seek a Therapist vs. Using a Mental Wellness App
                </h4>
                <p className="text-[10px] text-slate-400 font-medium">Marcus Vance • 7 min read</p>
              </div>
            </div>

          </div>

        </div>

        {/* Bottom Grid: 3 Equal Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          
          {/* Card 1: Relationships */}
          <div className="group cursor-pointer">
            <div className="rounded-2xl overflow-hidden mb-3 border border-slate-100 shadow-xs relative">
              <span className="absolute top-3 left-3 bg-[#E88E52] text-white text-[9px] font-bold px-2.5 py-0.5 rounded-full z-10">
                Relationships
              </span>
              <img src={relImg} alt="Relationships" className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <h4 className="text-sm font-extrabold text-[#134E58] mb-1.5 leading-snug group-hover:text-[#2A7B88] transition-colors">
              How Healthy Relationships Directly Improve Your Mental Health
            </h4>
            <p className="text-[10px] text-slate-400 font-medium">Dr. Sarah Chen • Apr 2, 2026 • 5 min read</p>
          </div>

          {/* Card 2: Self-Care */}
          <div className="group cursor-pointer">
            <div className="rounded-2xl overflow-hidden mb-3 border border-slate-100 shadow-xs relative">
              <span className="absolute top-3 left-3 bg-[#26A69A] text-white text-[9px] font-bold px-2.5 py-0.5 rounded-full z-10">
                Self-Care
              </span>
              <img src={careImg} alt="Self-Care" className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <h4 className="text-sm font-extrabold text-[#134E58] mb-1.5 leading-snug group-hover:text-[#2A7B88] transition-colors">
              Building a Morning Routine That Actually Supports Your Mental Health
            </h4>
            <p className="text-[10px] text-slate-400 font-medium">James Dokter • Mar 28, 2026 • 4 min read</p>
          </div>

          {/* Card 3: Burnout */}
          <div className="group cursor-pointer">
            <div className="rounded-2xl overflow-hidden mb-3 border border-slate-100 shadow-xs relative">
              <span className="absolute top-3 left-3 bg-[#E57373] text-white text-[9px] font-bold px-2.5 py-0.5 rounded-full z-10">
                Burnout
              </span>
              <img src={burnoutImg} alt="Burnout" className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <h4 className="text-sm font-extrabold text-[#134E58] mb-1.5 leading-snug group-hover:text-[#2A7B88] transition-colors">
              Recognizing Burnout Early: 7 Signs You Shouldn't Ignore
            </h4>
            <p className="text-[10px] text-slate-400 font-medium">Dr. Priya Nair • Mar 22, 2026 • 6 min read</p>
          </div>

        </div>

      </div>
    </section>
  );
}