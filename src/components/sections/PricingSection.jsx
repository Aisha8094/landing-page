import React from 'react';
import { Bot, Sparkles } from 'lucide-react';

export default function PricingSection() {
  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "",
      aiAccess: "No AI chatbot",
      highlight: false,
      buttonText: "Get Started Free",
      features: [
        "Unlimited Journeys",
        "Journaling",
        "Mood tracking",
        "Goal tracking",
        "Reflection timeline",
        "Secure therapist linking",
        "Local-only data option",
        "Therapist can view (read-only)"
      ]
    },
    {
      name: "Core",
      price: "$9.99",
      period: "/month",
      aiAccess: "150 AI responses/month",
      highlight: false,
      buttonText: "Start Core",
      features: [
        "All Free features",
        "Limited AI chatbot access",
        "Reflective guidance",
        "AI-based reflection",
        "Enhanced journaling",
        "Therapist can view (read-only)"
      ]
    },
    {
      name: "Growth",
      price: "$14.99",
      period: "/month",
      aiAccess: "300 AI responses/month",
      highlight: true,
      popularTag: "Most Popular",
      buttonText: "Start Growth",
      features: [
        "All Core features",
        "Moderate AI chatbot engagement",
        "AI insights & analytics",
        "Advanced mood patterns",
        "Goal optimization",
        "Therapist can view (read-only)"
      ]
    },
    {
      name: "Premium",
      price: "$19.99",
      period: "/month",
      aiAccess: "Unlimited AI responses",
      highlight: false,
      buttonText: "Start Premium",
      features: [
        "All Growth features",
        "Unlimited AI conversation",
        "Deeper analytics",
        "Advanced insights",
        "Priority support",
        "Therapist can view (read-only)"
      ]
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-[#F4FBFB] text-[#0B1F24]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <div className="inline-block px-4 py-1.5 rounded-full bg-white text-[#1A4D56] text-xs font-bold border border-slate-200/60 shadow-sm mb-4">
          • Simple Pricing
        </div>

        <h2 className="text-4xl sm:text-6xl font-black tracking-tight mb-4 text-[#0B1F24]">
          Choose your path <br />
          <span className="text-[#26A69A]">to wellness</span>
        </h2>

        <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto mb-20 leading-relaxed">
          Start free, upgrade when you're ready. No hidden fees, cancel anytime.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch text-left">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 relative ${
                plan.highlight
                  ? 'bg-[#0F353C] text-white shadow-2xl scale-105 border-2 border-[#26A69A]/40 z-10'
                  : 'bg-white text-[#0B1F24] border border-slate-100 shadow-sm hover:shadow-md'
              }`}
            >
              {plan.popularTag && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#26A69A] text-white text-[11px] font-extrabold px-4 py-1 rounded-full shadow-md flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5" /> {plan.popularTag}
                </div>
              )}

              <div>
                <div className="flex justify-between items-center mb-6">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-bold ${
                      plan.highlight
                        ? 'bg-white/10 text-white'
                        : 'bg-slate-100 text-slate-700'
                    }`}
                  >
                    {plan.name}
                  </span>
                  {plan.highlight && (
                    <span className="w-6 h-6 rounded-full bg-[#26A69A]/30 flex items-center justify-center text-[#26A69A] text-xs font-bold">
                      ✓
                    </span>
                  )}
                </div>

                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-4xl sm:text-5xl font-black tracking-tight">
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span
                      className={`text-xs font-medium ${
                        plan.highlight ? 'text-slate-300' : 'text-slate-400'
                      }`}
                    >
                      {plan.period}
                    </span>
                  )}
                </div>

                <div
                  className={`p-3.5 rounded-2xl mb-6 flex items-center gap-3 border ${
                    plan.highlight
                      ? 'bg-white/10 border-white/10 text-slate-200'
                      : 'bg-slate-50 border-slate-100 text-slate-700'
                  }`}
                >
                  <Bot className="w-5 h-5 shrink-0 text-[#26A69A]" />
                  <div>
                    <p className="text-[10px] text-slate-400 font-medium uppercase tracking-wider">
                      AI Access
                    </p>
                    <p className="text-xs font-bold">{plan.aiAccess}</p>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2.5 text-xs">
                      <span
                        className={`font-bold mt-0.5 ${
                          plan.highlight ? 'text-[#26A69A]' : 'text-emerald-500'
                        }`}
                      >
                        ✓
                      </span>
                      <span
                        className={
                          plan.highlight ? 'text-slate-200' : 'text-slate-600'
                        }
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                className={`w-full py-3.5 px-4 rounded-xl font-bold text-xs transition-all shadow-sm ${
                  plan.highlight
                    ? 'bg-[#26A69A] text-white hover:opacity-90'
                    : 'bg-white text-[#0B1F24] border border-slate-200 hover:bg-slate-50'
                }`}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}