import React from "react";
import {
Star,
Bell,
Wifi,
BatteryFull,
Sparkles,
ArrowUpRight,
} from "lucide-react";

const LandingPreview = () => {
const customers = [
{
name: "Alex Morgan",
image: "https://i.pravatar.cc/100?img=12",
},
{
name: "Sarah Wilson",
image: "https://i.pravatar.cc/100?img=47",
},
{
name: "James Miller",
image: "https://i.pravatar.cc/100?img=13",
},
{
name: "Emma Davis",
image: "https://i.pravatar.cc/100?img=44",
},
];

return ( <section className="relative overflow-hidden bg-[#071b1c] px-6 py-20 text-white sm:px-10 lg:px-20">
{/* Background glow */} <div className="pointer-events-none absolute left-1/4 top-20 h-80 w-80 rounded-full bg-[#327276]/20 blur-[100px]" />

  <div className="relative mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">

    {/* LEFT: Customer Reviews */}
    <div className="space-y-8">
      <div>
        <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-teal-200">
          <Sparkles size={16} />
          Trusted by thousands
        </span>

        <h2 className="mt-6 max-w-xl text-4xl font-bold leading-tight sm:text-5xl">
          Experience smarter
          <span className="block text-[#4aa8ad]">
            digital solutions.
          </span>
        </h2>

        <p className="mt-5 max-w-lg text-base leading-7 text-white/60">
          Discover a better way to manage your daily activities with
          intelligent tools, personalized assistance, and a seamless
          experience.
        </p>
      </div>

      {/* Avatars and rating */}
      <div className="flex flex-wrap items-center gap-5">
        <div className="flex items-center pl-2">
          {customers.map((customer, index) => (
            <img
              key={customer.name}
              src={customer.image}
              alt={customer.name}
              className={`h-8 w-8 rounded-full border-2 border-[#173738] object-cover ${
                index > 0 ? "-ml-2" : ""
              }`}
            />
          ))}
        </div>

        <div>
          <div className="flex items-center gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                size={13}
                className="fill-amber-400 text-amber-400"
              />
            ))}

            <span className="ml-1 text-xs font-semibold text-white/80">
              4.8
            </span>
          </div>

          <p className="mt-1 text-xs text-white/60">
            From 50,000+ reviews
          </p>
        </div>
      </div>

      {/* CTA */}
      <button className="inline-flex items-center gap-2 rounded-xl bg-[#327276] px-6 py-3 font-medium transition hover:bg-[#419195]">
        Get Started
        <ArrowUpRight size={18} />
      </button>
    </div>

    {/* RIGHT: Mobile App Mockup */}
    <div className="relative flex justify-center py-8">
      {/* Green glow behind phone */}
      <div className="absolute -inset-8 rounded-full bg-gradient-to-br from-[#327276]/30 to-[#4aa8ad]/20 blur-3xl" />

      {/* Outer phone */}
      <div className="relative z-10 w-[300px] rounded-[44px] border border-white/20 bg-white/10 p-[10px] shadow-[0_40px_100px_rgba(0,0,0,0.35)] backdrop-blur-xl">

        {/* Phone screen */}
        <div className="min-h-[606px] overflow-hidden rounded-[36px] border border-white/10 bg-white/[0.06]">

          {/* Status bar */}
          <div className="flex items-center justify-between px-5 pb-2 pt-3 text-[11px] font-semibold">
            <span>9:41</span>

            <div className="flex items-center gap-1.5">
              <Wifi size={13} />
              <BatteryFull size={15} />
            </div>
          </div>

          {/* Profile header */}
          <div className="flex items-center justify-between px-4 py-3">
            <div className="flex items-center gap-2.5">
              <img
                src="https://i.pravatar.cc/100?img=12"
                alt="User profile"
                className="h-9 w-9 rounded-full border-2 border-white/40 object-cover"
              />

              <div>
                <p className="text-[10px] text-white/60">
                  Good Morning!
                </p>

                <h3 className="text-sm font-bold">
                  Williams James
                </h3>
              </div>
            </div>

            <button
              aria-label="Notifications"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-white/25 bg-white/[0.12] transition hover:bg-white/20"
            >
              <Bell size={15} />
            </button>
          </div>

          {/* AI Support card */}
          <div className="px-3 pb-4">
            <div className="flex items-center justify-between rounded-2xl border border-white/25 bg-white/[0.12] px-4 py-3 backdrop-blur-md">
              <div>
                <h4 className="text-xs font-bold">
                  Unlock AI Support
                </h4>

                <p className="mt-1 text-[10px] text-white/60">
                  Get personalized guidance
                </p>
              </div>

              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#4aa8ad]/25">
                <Sparkles size={19} className="text-teal-200" />
              </div>
            </div>
          </div>

          {/* Dashboard content */}
          <div className="space-y-4 px-4 pb-5">
            <div className="flex items-center justify-between">
              <h4 className="text-sm font-semibold">
                Your Overview
              </h4>

              <span className="text-[10px] text-white/50">
                This week
              </span>
            </div>

            {/* Stats cards */}
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-2xl border border-white/10 bg-white/[0.07] p-3">
                <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-xl bg-teal-400/15">
                  <Sparkles size={16} className="text-teal-200" />
                </div>

                <p className="text-[10px] text-white/55">
                  Tasks completed
                </p>

                <p className="mt-1 text-xl font-bold">24</p>

                <p className="mt-1 text-[10px] text-teal-300">
                  +12% this week
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.07] p-3">
                <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-xl bg-amber-400/15">
                  <Star size={16} className="text-amber-300" />
                </div>

                <p className="text-[10px] text-white/55">
                  Productivity
                </p>

                <p className="mt-1 text-xl font-bold">94%</p>

                <p className="mt-1 text-[10px] text-teal-300">
                  Excellent progress
                </p>
              </div>
            </div>

            {/* Activity card */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.07] p-4">
              <div className="flex items-center justify-between">
                <h4 className="text-xs font-semibold">
                  Recent Activity
                </h4>

                <ArrowUpRight size={15} className="text-white/50" />
              </div>

              <div className="mt-4 space-y-4">
                {[
                  {
                    title: "Daily goals completed",
                    time: "Today, 10:30 AM",
                  },
                  {
                    title: "AI assistant updated",
                    time: "Today, 09:15 AM",
                  },
                  {
                    title: "Weekly report generated",
                    time: "Yesterday",
                  },
                ].map((activity) => (
                  <div
                    key={activity.title}
                    className="flex items-start gap-3"
                  >
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-[#4aa8ad]" />

                    <div>
                      <p className="text-[11px] font-medium">
                        {activity.title}
                      </p>

                      <p className="mt-1 text-[10px] text-white/45">
                        {activity.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom navigation */}
            <div className="flex justify-around border-t border-white/10 pt-4 text-[10px] text-white/60">
              <span className="font-semibold text-teal-200">
                Home
              </span>
              <span>Activity</span>
              <span>Explore</span>
              <span>Profile</span>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</section>

);
};

export default LandingPreview;
