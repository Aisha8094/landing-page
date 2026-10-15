import React from 'react';
// Updated Path: ../../ (2 levels up to reach src/assets/)
import logoImg from '../../assets/logo.png';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0B1F24]/95 backdrop-blur-md border-b border-white/10 text-white py-4 px-6 sm:px-12">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* LOGO & BRAND AREA */}
        <a href="#" className="flex items-center gap-3 group">
          {/* Logo Icon / Image */}
          <img 
            src={logoImg} 
            alt="The Self App Logo" 
            className="w-8 h-8 sm:w-10 sm:h-10 object-contain transition-transform group-hover:scale-105"
          />
          
          {/* Brand Text */}
          <div className="flex flex-col text-left">
            <span className="font-black tracking-wider text-base sm:text-lg text-white leading-none">
              THE SELF APP
            </span>
            <span className="text-[9px] tracking-widest text-[#26A69A] font-semibold uppercase leading-tight mt-1">
              Your journey to inner peace
            </span>
          </div>
        </a>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8 text-xs font-semibold text-slate-300">
          <a href="#features" className="hover:text-white transition-colors">Features</a>
          <a href="#app-preview" className="hover:text-white transition-colors">App Preview</a>
          <a href="#safety" className="hover:text-white transition-colors">Trust & Safety</a>
          <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
          <a href="#blog" className="hover:text-white transition-colors">Blog</a>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-4">
          <button className="text-xs font-semibold text-slate-300 hover:text-white transition-colors hidden sm:block">
            Sign In
          </button>
          <button className="bg-[#26A69A] hover:bg-[#208b81] text-white px-5 py-2.5 rounded-2xl text-xs font-bold transition-all shadow-md">
            Download Free
          </button>
        </div>

      </div>
    </nav>
  );
}