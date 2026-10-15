import React from 'react';
import { ShieldCheck, Lock, Award } from 'lucide-react';
import logoImg from '../../assets/logo.png'; // Local logo image

export default function Footer() {
  return (
    <footer className="bg-[#07171B] text-white pt-16 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* MIDDLE SECTION: Logo & Navigation Links */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10 text-left">
          
          {/* Brand & Description */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <img src={logoImg} alt="The Self App Logo" className="w-9 h-9 object-contain" />
              <div className="flex flex-col">
                <span className="font-black tracking-wider text-base text-white leading-none">THE SELF APP</span>
                <span className="text-[9px] tracking-widest text-[#26A69A] font-semibold uppercase mt-0.5">Your journey to inner peace</span>
              </div>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Your mental wellness companion — therapy, mood tracking, and guided support in one private, compassionate app.
            </p>

            {/* Small Badges */}
            <div className="flex items-center gap-2 pt-2">
              <span className="inline-flex items-center gap-1.5 bg-[#0B1F24] border border-white/10 px-3 py-1 rounded-full text-[10px] text-slate-300 font-medium">
                <ShieldCheck className="w-3 h-3 text-[#26A69A]" /> HIPAA
              </span>
              <span className="inline-flex items-center gap-1.5 bg-[#0B1F24] border border-white/10 px-3 py-1 rounded-full text-[10px] text-slate-300 font-medium">
                <Lock className="w-3 h-3 text-[#26A69A]" /> E2E
              </span>
              <span className="inline-flex items-center gap-1.5 bg-[#0B1F24] border border-white/10 px-3 py-1 rounded-full text-[10px] text-slate-300 font-medium">
                <Award className="w-3 h-3 text-[#26A69A]" /> Licensed
              </span>
            </div>
          </div>

          {/* Links Grid */}
          <div className="lg:col-span-7 grid grid-cols-3 gap-8 text-xs">
            
            {/* Product Column */}
            <div className="space-y-3">
              <h4 className="font-bold uppercase tracking-wider text-[11px] text-slate-300">Product</h4>
              <ul className="space-y-2 text-slate-400 font-medium">
                <li><a href="#about" className="hover:text-white transition-colors">About Self App</a></li>
                <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
              </ul>
            </div>

            {/* Resources Column */}
            <div className="space-y-3">
              <h4 className="font-bold uppercase tracking-wider text-[11px] text-slate-300">Resources</h4>
              <ul className="space-y-2 text-slate-400 font-medium">
                <li><a href="#blog" className="hover:text-white transition-colors">Mental Health Blog</a></li>
                <li><a href="#crisis" className="hover:text-white transition-colors">Crisis Support</a></li>
                <li><a href="#guides" className="hover:text-white transition-colors">Self-Help Guides</a></li>
                <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
              </ul>
            </div>

            {/* Legal Column */}
            <div className="space-y-3">
              <h4 className="font-bold uppercase tracking-wider text-[11px] text-slate-300">Legal</h4>
              <ul className="space-y-2 text-slate-400 font-medium">
                <li><a href="#contact" className="hover:text-white transition-colors">Contact Support</a></li>
                <li><a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#terms" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#cookies" className="hover:text-white transition-colors">Cookie Policy</a></li>
                <li><a href="#accessibility" className="hover:text-white transition-colors">Accessibility</a></li>
              </ul>
            </div>

          </div>

        </div>

        {/* BOTTOM COPYRIGHT BAR */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 font-medium gap-4">
          <p>© 2026 Human's Arc LLC. All rights reserved. Made with care for your mental health.</p>
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1.5 text-slate-400">
              <span className="w-2 h-2 rounded-full bg-[#26A69A]"></span> All systems operational
            </span>
            <span>v2.4.1</span>
          </div>
        </div>

      </div>
    </footer>
  );
}