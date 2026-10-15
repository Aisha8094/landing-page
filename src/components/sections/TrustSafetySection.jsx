import React from 'react';
import { ShieldCheck, Lock, Award, UserCheck } from 'lucide-react';
// Yahan humne heart.png ko import kar liya hai
import heartIllustration from '../../assets/heart.png';

export default function TrustSafetySection() {
  const safetyFeatures = [
    {
      icon: <UserCheck className="w-5 h-5 text-[#2A7B88]" />,
      title: "Licensed Professionals Only",
      description: "Every therapist on Self is verified, credentialed, and background-checked before joining our platform."
    },
    {
      icon: <Lock className="w-5 h-5 text-[#2A7B88]" />,
      title: "End-to-End Encrypted",
      description: "All messages, sessions, and personal data are encrypted in transit and at rest. Nobody reads your conversations."
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-[#2A7B88]" />,
      title: "HIPAA-Aligned Security",
      description: "We follow healthcare-grade data handling standards to keep your mental health information completely confidential."
    }
  ];

  return (
    <section id="safety" className="py-24 bg-white text-[#134E58]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT COLUMN: Main Visual Card with Local heart.png */}
          <div className="lg:col-span-6 relative">
            <div className="bg-[#FAF8F5] rounded-[2.5rem] p-6 sm:p-8 relative shadow-sm border border-slate-100 overflow-hidden min-h-[520px] flex flex-col justify-between">
              
              {/* Top Floating Pill Badge */}
              <div className="relative z-10 flex justify-center">
                <div className="bg-white/95 border border-slate-100 px-5 py-2 rounded-2xl shadow-sm text-xs font-bold text-slate-800 backdrop-blur-md">
                  Your personal wellness dashboard
                </div>
              </div>

              {/* Central heart.png Display Area */}
              <div className="relative z-10 my-auto flex justify-center items-center py-6">
                <img 
                  src={heartIllustration} 
                  alt="Trust and Safety Heart Illustration" 
                  className="w-full max-w-[340px] h-auto object-contain mx-auto drop-shadow-sm rounded-2xl"
                />
              </div>

              {/* Bottom Compliance Badges (3 items) */}
              <div className="relative z-10 grid grid-cols-3 gap-3 pt-4 border-t border-slate-200/60">
                <div className="bg-white/90 p-3 rounded-2xl text-center border border-slate-100 flex flex-col items-center justify-center shadow-xs">
                  <div className="w-7 h-7 rounded-full bg-[#E0F3F1] flex items-center justify-center mb-1 text-[#2A7B88]">
                    <ShieldCheck className="w-3.5 h-3.5" />
                  </div>
                  <p className="text-[11px] font-black text-slate-800 leading-tight">HIPAA Aligned</p>
                </div>

                <div className="bg-white/90 p-3 rounded-2xl text-center border border-slate-100 flex flex-col items-center justify-center shadow-xs">
                  <div className="w-7 h-7 rounded-full bg-[#E0F3F1] flex items-center justify-center mb-1 text-[#2A7B88]">
                    <Lock className="w-3.5 h-3.5" />
                  </div>
                  <p className="text-[11px] font-black text-slate-800 leading-tight">E2E Encrypted</p>
                </div>

                <div className="bg-white/90 p-3 rounded-2xl text-center border border-slate-100 flex flex-col items-center justify-center shadow-xs">
                  <div className="w-7 h-7 rounded-full bg-[#E0F3F1] flex items-center justify-center mb-1 text-[#2A7B88]">
                    <Award className="w-3.5 h-3.5" />
                  </div>
                  <p className="text-[11px] font-black text-slate-800 leading-tight">Licensed Only</p>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT COLUMN: Content */}
          <div className="lg:col-span-6 text-left">
            <div className="inline-block px-4 py-1.5 rounded-full bg-[#EAF4F3] text-[#134E58] text-xs font-bold uppercase tracking-wider mb-4 border border-[#2A7B88]/20">
              Trust & Safety
            </div>

            <h2 className="text-4xl sm:text-5xl font-black text-[#134E58] tracking-tight mb-6 leading-[1.15]">
              Your safety is our <br />
              top priority.
            </h2>

            <p className="text-[#3A6B73] text-sm sm:text-base mb-10 max-w-lg leading-relaxed font-normal">
              We built Self with the highest standards of privacy, security, and clinical integrity — because your mental health deserves nothing less.
            </p>

            <div className="space-y-6">
              {safetyFeatures.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-2xl bg-[#EAF4F3] flex items-center justify-center text-[#2A7B88] shrink-0 mt-1 border border-[#2A7B88]/20">
                    {feat.icon}
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#134E58] mb-1 leading-tight">{feat.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed font-normal">{feat.description}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}