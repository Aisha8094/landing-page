import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Bell,
  BookHeart,
  Brain,
  Check,
  ChevronDown,
  ClipboardCheck,
  CircleHelp,
  Frown,
  Heart,
  HeartHandshake,
  LockKeyhole,
  MessageCircle,
  Moon,
  ShieldCheck,
  Search,
  Repeat2,
  Sparkles,
  Star,
  UsersRound,
  Waves,
} from "lucide-react";
import { useState } from "react";

const features = [
  {
    icon: Waves,
    title: "Guided Meditation",
    text: "Access hundreds of expertly crafted meditation sessions tailored to your needs, from stress relief to deep sleep, helping you find peace in every moment.",
  },
  {
    icon: Brain,
    title: "Mood Tracking",
    text: "Monitor your emotional well-being with intelligent mood tracking that provides personalized insights and helps you understand patterns in your mental health journey.",
  },
  {
    icon: HeartHandshake,
    title: "Expert Support",
    text: "Connect with licensed therapists and wellness coaches who provide professional guidance, support, and personalized strategies for your mental health goals.",
  },
  {
    icon: Moon,
    title: "Daily Reminders",
    text: "Stay consistent with customizable reminders that encourage healthy habits, mindfulness practices, and self-care routines throughout your day.",
  },
  {
    icon: Heart,
    title: "Community Support",
    text: "Join a supportive community of like-minded individuals sharing experiences, encouragement, and inspiration on their wellness journeys.",
  },
  {
    icon: ClipboardCheck,
    title: "Progress Analytics",
    text: "Visualize your growth with detailed analytics and insights that track your meditation streaks, mood trends, and overall wellness improvements over time.",
  },
];

const steps = [
  {
    number: "01",
    icon: Sparkles,
    title: "Sign Up & Set Goals",
    text: "Create your free account and tell us what you’re working on — stress, anxiety, sleep, or just feeling better.",
  },
  {
    number: "02",
    icon: HeartHandshake,
    title: "Enter Your Therapist Code",
    text: "Your therapist provides you with a unique code. Simply enter it to connect directly with them inside the app.",
  },
  {
    number: "03",
    icon: MessageCircle,
    title: "Start Sessions",
    text: "Begin therapy via text, audio, or video — on your terms, at your pace, from anywhere.",
  },
  {
    number: "04",
    icon: Waves,
    title: "Track Progress",
    text: "Watch your mood trends, celebrate milestones, and see real growth over time with visual insights.",
  },
];

const plans = [
  {
    name: "Free",
    price: "$0",
    description: "A supportive place to get started.",
    features: ["No AI chatbot", "Journaling", "Mood tracking", "Goal tracking", "Secure therapist linking", "Local-only data option"],
    action: "Get Started Free",
  },
  {
    name: "Core",
    price: "$9.99",
    description: "More ways to reflect and understand your patterns.",
    features: ["150 AI responses/month", "All Free features", "Limited AI chatbot access", "Reflective guidance", "AI-based reflection", "Enhanced journaling", "Therapist can view (read-only)"],
    action: "Start Core",
  },
  {
    name: "Growth",
    price: "$14.99",
    description: "Deeper insights to support meaningful progress.",
    features: ["300 AI responses/month", "All Core features", "Moderate AI chatbot engagement", "AI insights & analytics", "Advanced mood patterns", "Deeper analytics", "Therapist can view (read-only)"],
    action: "Start Growth",
    popular: true,
  },
  {
    name: "Premium",
    price: "$19.99",
    description: "The complete Self App experience, all in one place.",
    features: ["Unlimited Journeys", "All Growth features", "Unlimited AI responses", "Unlimited AI conversation", "Reflection timeline", "Goal optimization", "Advanced insights", "Priority support", "Therapist can view (read-only)"],
    action: "Start Premium",
  },
];

const articles = [
  {
    category: "MINDFULNESS",
    title: "How 10 Minutes of Daily Mindfulness Can Rewire Your Anxiety Response",
    author: "Marcus Webb",
    date: "",
    readTime: "7 min read",
    className: "article-art--mindfulness",
    icon: Waves,
    excerpt: "New research shows consistent short mindfulness sessions create measurable changes in the amygdala — the brain’s fear center. Here’s what the science says and how to start today.",
  },
  {
    category: "JOURNALING",
    title: "The Science Behind Expressive Writing and Emotional Healing",
    author: "James Okafor",
    date: "",
    readTime: "4 min read",
    className: "article-art--emotions",
    icon: BookHeart,
  },
  {
    category: "SLEEP",
    title: "Why Poor Sleep Is the Hidden Driver of Anxiety and Low Mood",
    author: "Dr. Priya Nair",
    date: "",
    readTime: "5 min read",
    className: "article-art--therapy",
    icon: Moon,
  },
  {
    category: "THERAPY",
    title: "When to Seek a Therapist vs. Using a Mental Wellness App",
    author: "Dr. Sarah Chen",
    date: "Apr 18, 2026",
    readTime: "6 min read",
    className: "article-art--mindfulness",
    icon: HeartHandshake,
  },
  {
    category: "RELATIONSHIPS",
    title: "How Healthy Relationships Directly Improve Your Mental Health",
    author: "Dr. Sarah Chen",
    date: "Apr 2, 2026",
    readTime: "5 min read",
    className: "article-art--emotions",
    icon: Heart,
  },
  {
    category: "SELF-CARE",
    title: "Building a Morning Routine That Actually Supports Your Mental Health",
    author: "James Okafor",
    date: "Mar 28, 2026",
    readTime: "4 min read",
    className: "article-art--therapy",
    icon: Sparkles,
  },
  {
    category: "BURNOUT",
    title: "Recognizing Burnout Early: 7 Signs You Shouldn’t Ignore",
    author: "Dr. Priya Nair",
    date: "Mar 22, 2026",
    readTime: "6 min read",
    className: "article-art--mindfulness",
    icon: Brain,
  },
];

const faqs = [
  {
    question: "How does Self App work?",
    answer: "Self brings mood tracking, guided wellness tools, journaling, and access to licensed therapists together in one private app.",
  },
  {
    question: "Are the therapists licensed?",
    answer: "Therapists on Self are verified professionals. You can review their experience and approach to find someone who feels right for you.",
  },
  {
    question: "Is my information private?",
    answer: "Your wellbeing is personal. Self is designed with privacy and security in mind, and your information is handled with care.",
  },
  {
    question: "Can I cancel my subscription?",
    answer: "Yes. Paid plans can be cancelled at any time, and you can continue with the free plan.",
  },
];

function SectionHeading({ eyebrow, title, highlight, description, light = false }) {
  return (
    <div className={`landing-heading${light ? " landing-heading--light" : ""}`}>
      {eyebrow && <span className="landing-eyebrow">{eyebrow}</span>}
      <h2>
        {title}
        {highlight && <span>{highlight}</span>}
      </h2>
      {description && <p>{description}</p>}
    </div>
  );
}

function LandingSections() {
  const [notificationLink, setNotificationLink] = useState("");
  const [featuredArticle, ...remainingArticles] = articles;
  const featuredSideArticles = remainingArticles.slice(0, 3);
  const recentArticles = remainingArticles.slice(3);

  function createNotificationDraft(event) {
    event.preventDefault();
    const email = new FormData(event.currentTarget).get("email");
    const subject = encodeURIComponent("Self App launch notifications");
    const body = encodeURIComponent(`Please notify me when Self App launches.\n\nMy email: ${email}`);
    setNotificationLink(`mailto:hello@self.app?subject=${subject}&body=${body}`);
  }

  return (
    <>
      <section className="problem-section section-pad" id="why-self">
        <div className="section-container">
          <SectionHeading
            eyebrow="Sound Familiar?"
            title="Mental health support"
            highlight="shouldn’t be this hard."
          />
          <div className="problem-grid">
            {[
              ["01", "Feeling overwhelmed or anxious with no clear path forward", Frown],
              ["02", "Not knowing where to start with mental health support", CircleHelp],
              ["03", "Difficulty finding trusted, affordable therapists nearby", Search],
              ["04", "Lack of consistency in self-care and daily wellness habits", Repeat2],
            ].map(([number, title, Icon]) => (
              <article className="problem-card" key={number}>
                <span className="problem-card__icon"><Icon size={21} /></span>
                <span className="problem-card__number">{number}</span>
                <h3>{title}</h3>
                <div className="problem-card__accent"><i /><i /></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="solution-section section-pad">
        <div className="section-container solution-layout">
          <div className="solution-copy">
            <span className="landing-eyebrow">THE SELF SOLUTION</span>
            <h2>One app.<br /><span>Everything you need.</span></h2>
            <p>Self App brings therapy, emotional tracking, and guided support into one seamless, compassionate experience — designed to meet you exactly where you are.</p>
            <ul>
              <li><Check size={16} />Licensed therapists</li>
              <li><Check size={16} />Daily mood tracking &amp; insights</li>
              <li><Check size={16} />Guided meditations &amp; journaling</li>
              <li><Check size={16} />AI companion, 24/7 judgment-free</li>
            </ul>
            <a className="solution-action" href="#download">Start for Free <ArrowRight size={16} /></a>
          </div>
          <div className="solution-proof">
            <div className="solution-proof__headline"><strong>89</strong><span>%</span><small>of daily trackers feel more in control within 2 weeks</small></div>
            <div className="progress-stat"><span>Daily Mood Check-ins</span><div><i style={{ width: "85%" }} /></div><strong>85%</strong></div>
            <div className="progress-stat"><span>Weekly Journal Entries</span><div><i style={{ width: "72%" }} /></div><strong>72%</strong></div>
            <div className="progress-stat"><span>Goal Milestones Reached</span><div><i style={{ width: "68%" }} /></div><strong>68%</strong></div>
            <div className="solution-trust-pills"><span>HIPAA Aligned</span><span>E2E Encrypted</span><span>Licensed Only</span></div>
          </div>
        </div>
      </section>

      <section className="features-section section-pad" id="features">
        <div className="section-container">
          <SectionHeading
            eyebrow="THE SELF SOLUTION"
            title="Everything you need to"
            highlight="feel better, every day."
            description="Built with clinical expertise and human compassion — every feature is designed to support your unique mental wellness journey."
          />
          <div className="feature-results">
            <span><strong>89%</strong><small>of users report feeling better within 2 weeks</small></span>
            <div className="feature-results__stats">
              <div className="progress-stat"><span>Anxiety Reduction</span><div><i style={{ width: "78%" }} /></div><strong>78%</strong></div>
              <div className="progress-stat"><span>Sleep Improvement</span><div><i style={{ width: "65%" }} /></div><strong>65%</strong></div>
              <div className="progress-stat"><span>Mood Stability</span><div><i style={{ width: "82%" }} /></div><strong>82%</strong></div>
            </div>
            <div className="solution-trust-pills"><span>HIPAA Aligned</span><span>E2E Encrypted</span><span>Licensed Only</span></div>
          </div>
          <div className="feature-grid">
            {features.map(({ icon: Icon, title, text }, index) => (
              <article className={`feature-card${index === 0 ? " feature-card--featured" : ""}`} key={title}>
                <span className="feature-card__icon"><Icon size={21} /></span>
                <h3>{title}</h3>
                <p>{text}</p>
                <a href="#app-preview" aria-label={`Explore ${title}`}><ArrowUpRight size={17} /></a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="steps-section section-pad" id="how-it-works">
        <div className="section-container">
          <SectionHeading
            eyebrow="Simple Process"
            title="Start feeling better"
            highlight="in 4 easy steps"
            description="No complicated setup. No waiting rooms. Just support, when you need it."
          />
          <div className="steps-grid">
            {steps.map(({ number, icon: Icon, title, text }) => (
              <article className="step-card" key={number}>
                <div className="step-card__top">
                  <span className="step-card__icon"><Icon size={22} /></span>
                  <span className="step-card__number">{number}</span>
                </div>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
          <div className="steps-cta">
            <a href="#download"><ArrowDown size={17} /> Get Started — It’s Free</a>
            <span>No credit card required. Cancel anytime.</span>
          </div>
        </div>
      </section>

      <section className="screens-section section-pad" id="app-preview">
        <div className="section-container">
          <div className="screens-heading-row">
            <SectionHeading
              eyebrow="APP PREVIEW"
              title="Every screen,"
              highlight="crafted for calm."
              light
            />
            <div className="screens-heading-aside">
              <p>A beautiful, intuitive experience designed to feel supportive — so you can focus on what matters most.</p>
              <div className="preview-metrics">
                <span><strong>4.9 <i>★</i></strong><small>App Store</small></span>
                <span><strong>500K+</strong><small>Downloads</small></span>
                <span><strong>89%</strong><small>Feel Better</small></span>
              </div>
            </div>
          </div>
          <div className="screens-devices" aria-label="Self App interface previews">
            <div className="device-frame device-frame--left">
              <div className="device-screen">
                <div className="device-status"><span>9:41</span><span>•••</span></div>
                <div className="device-screen__heading"><strong>My Connections</strong><span>＋</span></div>
                <div className="device-tabs"><span>My Support</span><span>Professionals</span></div>
                <div className="device-profile">
                  <span className="device-avatar device-avatar--one">W</span>
                  <span><strong>Williams James</strong><small>Licensed therapist</small></span>
                  <ArrowRight size={13} />
                </div>
                <div className="device-profile">
                  <span className="device-avatar device-avatar--two">S</span>
                  <span><strong>Sarah Wilson</strong><small>Wellness coach</small></span>
                  <ArrowRight size={13} />
                </div>
                <div className="device-profile">
                  <span className="device-avatar device-avatar--three">J</span>
                  <span><strong>James Miller</strong><small>Mindfulness guide</small></span>
                  <ArrowRight size={13} />
                </div>
                <div className="device-bottom-nav"><span>⌂</span><span>♡</span><span>◉</span><span>♧</span></div>
              </div>
            </div>
            <div className="device-frame device-frame--center">
              <div className="device-screen">
                <div className="device-status"><span>9:41</span><span>•••</span></div>
                <div className="device-greeting"><span className="device-avatar device-avatar--one">W</span><span><small>Good Morning</small><strong>Williams James</strong></span><Bell size={13} /></div>
                <div className="device-support"><span><small>Unlock AI Support</small><strong>Get personalized guidance</strong></span><b>Upgrade</b></div>
                <div className="device-mood">
                  <div><strong>Mood Tracking</strong><small>24 hours</small><b>Avg: 4.0</b></div>
                  <div className="device-mood-tabs"><span>Today</span><span>Weekly</span><span>Yearly</span></div>
                  <div className="device-chart">{[25, 35, 58, 82, 54, 40, 23].map((height, index) => <i key={index} style={{ height: `${height}%` }} />)}</div>
                  <div className="device-chart-labels"><span>6 AM</span><span>10 AM</span><span>2 PM</span><span>6 PM</span><span>10 PM</span></div>
                </div>
                <div className="device-journal-row"><span><strong>Journal</strong><small>Write your thoughts</small></span><span><strong>Self Chat</strong><small>Upgrade to unlock</small></span></div>
                <div className="device-therapist"><UsersRound size={14} /><span><strong>Therapist Connection</strong><small>Your therapist can track your progress</small></span></div>
                <div className="device-bottom-nav"><span>⌂</span><span>♡</span><span>◉</span><span>♧</span></div>
            </div>
            </div>
            <div className="device-frame device-frame--right">
              <div className="device-screen">
                <div className="device-status"><span>9:41</span><span>•••</span></div>
                <div className="device-screen__heading"><strong>My Journey</strong><span>⌕</span></div>
                <div className="device-tabs"><span>Dashboard</span><span>Profile</span></div>
                <div className="device-journey-cover"><span>YOUR JOURNEY</span><strong>Small steps,<br />real progress.</strong></div>
                <div className="device-journey-heading"><strong>Started journeys</strong><small>See all</small></div>
                <div className="device-journey-list"><span><Waves size={16} /><b>Finding Calm</b><small>7 day journey</small></span><span><Heart size={16} /><b>Building Balance</b><small>Daily reflection</small></span><span><Moon size={16} /><b>Restful Sleep</b><small>Evening routine</small></span></div>
                <div className="device-bottom-nav"><span>⌂</span><span>♡</span><span>◉</span><span>♧</span></div>
              </div>
            </div>
          </div>
          <div className="screens-footer">
            <span className="screens-dots"><i /><i /><i /></span>
            <div className="preview-downloads">
              <a className="store-button store-button--light" href="#app-store"><span><small>Download on the</small><strong>App Store</strong></span></a>
              <a className="store-button store-button--glass" href="#google-play"><span><small>Get it on</small><strong>Google Play</strong></span></a>
            </div>
          </div>
        </div>
      </section>

      <section className="trust-section section-pad" id="trust">
        <div className="section-container trust-layout">
          <div className="trust-illustration" aria-label="Illustration representing private, supportive care">
            <svg className="trust-artwork" viewBox="0 0 740 620" role="img" aria-label="A heart surrounded by gentle flowing lines">
              <defs>
                <linearGradient id="trust-bg" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#fffdfa" /><stop offset="1" stopColor="#fbf3df" /></linearGradient>
                <linearGradient id="trust-heart" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#ffd8c6" /><stop offset="1" stopColor="#f3ad98" /></linearGradient>
              </defs>
              <rect width="740" height="620" fill="url(#trust-bg)" />
              <path d="M8 295C56 175 132 150 238 174s153 114 251 69 160-115 230-54v247H0Z" fill="#f4d985" opacity=".26" />
              <path d="M0 400c112-22 148-161 257-180 117-21 157 115 257 96 82-16 126-95 226-90v278H0Z" fill="#c4d3b5" opacity=".31" />
              <path d="M18 143c106-87 184-79 272-20s124 93 209 37 151-89 230-27" fill="none" stroke="#b4ad96" strokeWidth="1.2" opacity=".52" />
              <path d="M-8 197c93-45 165-33 249 30s128 123 225 64 168-126 275-88" fill="none" stroke="#9b9a83" strokeWidth="1.1" opacity=".48" />
              <path d="M-18 253c94-22 165 7 233 75s117 102 204 73 168-129 296-109" fill="none" stroke="#948f79" strokeWidth="1.1" opacity=".5" />
              <path d="M-4 320c103-7 159 42 217 106s119 75 198 47 155-113 239-117 70 16 104 30" fill="none" stroke="#948f79" strokeWidth="1.1" opacity=".52" />
              <path d="M18 402c102 17 141 67 202 107s116 44 187 2 135-107 212-117 96 23 132 56" fill="none" stroke="#9b9581" strokeWidth="1.1" opacity=".46" />
              <path d="M111 41c-33 100-7 137 70 163s141 8 191-33 107-50 156-26 98 16 145-4" fill="none" stroke="#a7a38d" strokeWidth="1" opacity=".3" />
              <path d="M62 501c41-78 97-86 153-56s106 47 155 14 89-80 152-79 94 45 145 40" fill="none" stroke="#aaa48f" strokeWidth="1" opacity=".43" />
              <ellipse cx="186" cy="223" rx="108" ry="45" fill="#eac874" opacity=".17" transform="rotate(-27 186 223)" />
              <ellipse cx="550" cy="228" rx="125" ry="54" fill="#aebc9e" opacity=".16" transform="rotate(-36 550 228)" />
              <ellipse cx="558" cy="420" rx="108" ry="48" fill="#e9c17b" opacity=".17" transform="rotate(31 558 420)" />
              <path d="M370 407c-18-26-56-49-83-15-36 45 14 92 83 133 70-42 120-89 84-134-27-33-65-10-84 16Z" fill="url(#trust-heart)" stroke="#826f60" strokeWidth="1.3" />
              <path d="M370 459c-7-11-20-18-30-6-12 14 6 28 30 43 24-15 42-29 30-43-10-12-23-5-30 6Z" fill="#fffaf1" />
            </svg>
            <span className="trust-illustration__label">Your personal wellness dashboard</span>
            <div className="trust-illustration__credentials">
              <span><ShieldCheck size={18} /><b>HIPAA Aligned</b></span>
              <span><LockKeyhole size={18} /><b>E2E Encrypted</b></span>
              <span><HeartHandshake size={18} /><b>Licensed Only</b></span>
            </div>
          </div>
          <div className="trust-copy">
            <SectionHeading
              eyebrow="Trust & Safety"
              title="Your safety is our"
              highlight="top priority."
              description="We built Self with the highest standards of privacy, security, and clinical integrity — because your mental health deserves nothing less."
            />
            <div className="trust-points">
              {[
                { icon: ShieldCheck, title: "Licensed Professionals Only", text: "Every therapist on Self is verified, credentialed, and background-checked before joining our platform." },
                { icon: LockKeyhole, title: "End-to-End Encrypted", text: "All messages, sessions, and personal data are encrypted in transit and at rest. Nobody reads your conversations." },
                { icon: ClipboardCheck, title: "HIPAA-Aligned Security", text: "We follow healthcare-grade data handling standards to keep your mental health information completely confidential." },
              ].map(({ icon: Icon, title, text }) => (
                <article className="trust-point" key={title}>
                  <span><Icon size={17} /></span>
                  <div><h3>{title}</h3><p>{text}</p></div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="stories-section section-pad">
        <div className="section-container">
          <SectionHeading
            eyebrow="Real Stories"
            title="People just like you"
            highlight="are finding their way"
            description="Join half a million people who made Self part of their daily wellness routine."
          />
          <div className="stories-grid">
            {[
              { quote: "Self App helped me stay consistent with therapy and actually understand my emotions better. I finally feel like I have the tools to manage my anxiety.", name: "Maya R.", category: "Anxiety & Stress", detail: "Graduate Student, 24", tone: "lavender" },
              { quote: "I was skeptical about online therapy, but the matching was spot-on. My therapist gets me. The mood tracking showed me patterns I never noticed before.", name: "David K.", category: "Burnout Recovery", detail: "Software Engineer, 31", tone: "peach" },
              { quote: "Seeing my mood progress over weeks gave me real hope. The guided meditations before bed changed my sleep completely. I recommend it to everyone.", name: "Priya S.", category: "Sleep & Mindfulness", detail: "Marketing Manager, 28", tone: "mint" },
            ].map(({ quote, name, category, detail, tone }) => (
              <article className="story-card" key={name}>
                <div className="story-card__stars" aria-label="5 out of 5 stars">{[1, 2, 3, 4, 5].map((star) => <Star size={15} key={star} fill="currentColor" />)}</div>
                <blockquote>“{quote}”</blockquote>
                <div className="story-author">
                  <span className={`story-avatar story-avatar--${tone}`}>{name.charAt(0)}</span>
                  <span><strong>{name}</strong><small>{detail}</small></span>
                  <i>{category}</i>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="pricing-section section-pad" id="pricing">
        <div className="section-container">
          <SectionHeading
            eyebrow="SIMPLE PRICING"
            title="Choose your path"
            highlight="to wellness."
            description="Start free, upgrade when you’re ready. No hidden fees, cancel anytime."
          />
          <div className="pricing-grid">
            {plans.map((plan) => (
              <article className={`price-card${plan.popular ? " price-card--popular" : ""}`} key={plan.name}>
                {plan.popular && <span className="price-card__popular">MOST POPULAR</span>}
                <span className="price-card__name">{plan.name}</span>
                <p className="price-card__description">{plan.description}</p>
                <div className="price-card__price"><strong>{plan.price}</strong><span>{plan.price !== "$0" && "/ month"}</span></div>
                <a className={plan.popular ? "price-card__button price-card__button--primary" : "price-card__button"} href="#download">{plan.action}</a>
                <span className="price-card__includes">What’s included</span>
                <ul>{plan.features.map((feature) => <li key={feature}><Check size={15} />{feature}</li>)}</ul>
              </article>
            ))}
          </div>
          <p className="pricing-note"><span>7-day free trial on paid plans</span><span>Cancel anytime, no questions asked</span><span>No credit card for Free plan</span></p>
        </div>
      </section>

      <section className="blog-section section-pad" id="blog">
        <div className="section-container">
          <div className="blog-heading-row">
            <SectionHeading
              eyebrow="From the Blog"
              title="Insights for your"
              highlight="mental wellness."
            />
            <a className="outline-link" href="#articles">View all articles <ArrowUpRight size={16} /></a>
          </div>
          <div className="article-feature-layout" id="articles">
            <article className="article-card article-card--featured">
              <div className={`article-art ${featuredArticle.className}`}><span className="article-category-badge">{featuredArticle.category}</span></div>
              <div className="article-card__body">
                <div className="article-meta">
                  <span className="article-authorline"><i>{featuredArticle.author.charAt(0)}</i>{featuredArticle.author}</span>
                  <span>{featuredArticle.date ? `${featuredArticle.date} · ` : ""}{featuredArticle.readTime}</span>
                </div>
                <h3>{featuredArticle.title}</h3>
                <p className="article-excerpt">{featuredArticle.excerpt}</p>
                <a href="#faq">Read article <ArrowRight size={15} /></a>
              </div>
            </article>
            <div className="article-side-list">
              {featuredSideArticles.map(({ category, title, author, readTime, className, icon: Icon }) => (
                <article className="article-card article-card--compact" key={title}>
                  <div className={`article-art ${className}`}><span><Icon size={19} /></span></div>
                  <div className="article-card__body">
                    <div className="article-meta"><span className="article-category-pill">{category}</span></div>
                    <h3>{title}</h3>
                    <div className="article-meta article-meta--author"><span className="article-authorline"><i>{author.charAt(0)}</i>{author}</span><span>{readTime}</span></div>
                  </div>
                </article>
              ))}
            </div>
          </div>
          <div className="article-grid article-grid--recent">
            {recentArticles.map(({ category, title, author, date, readTime, className, icon: Icon }) => (
              <article className="article-card" key={title}>
                <div className={`article-art ${className}`}><span><Icon size={24} /></span></div>
                <div className="article-card__body">
                  <div className="article-meta"><span>{category}</span><span>{date ? `${date} · ` : ""}{readTime}</span></div>
                  <h3>{title}</h3>
                  <div className="article-author">{author}</div>
                  <a href="#faq">Read article <ArrowRight size={15} /></a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="provider-section section-pad" id="for-therapists">
        <div className="provider-intro">
          <span className="landing-eyebrow">POWERED BY NODALY</span>
          <h2>The platform behind <span>your therapist’s tools.</span></h2>
          <p>Self App is built on Nodaly — a clinical-grade platform that gives licensed therapists the tools they need to deliver thoughtful, data-informed care.</p>
        </div>
        <div className="section-container nodaly-workflow">
          <div className="workflow-panel">
            <SectionHeading
              eyebrow="A CONNECTED CARE TEAM"
              title="How Self App & Nodaly"
              highlight="work together."
              description="A seamless loop between you and your therapist — no gaps, no guesswork."
            />
            <div className="workflow-grid">
              <article><span>1</span><h3>You use Self App</h3><p>Log your mood, journal your thoughts, complete check-ins, and chat with your AI companion — all within Self App.</p></article>
              <article><span>2</span><h3>Data syncs securely</h3><p>Your progress, mood trends, and check-in data are encrypted and shared with your linked therapist in real time.</p></article>
              <article><span>3</span><h3>Therapist acts on Nodaly</h3><p>Your therapist reviews your data on Nodaly, adjusts your treatment plan, and prepares for your next session with full context.</p></article>
            </div>
          </div>
        </div>
        <div className="section-container therapist-promo">
          <div className="therapist-promo__copy">
            <span className="landing-eyebrow">FOR MENTAL HEALTH PROFESSIONALS</span>
            <h2>Nodaly was built <span>for you.</span></h2>
            <p>Nodaly is the clinical platform powering Self App on the therapist side. Manage your entire practice — session notes, treatment plans, client progress, and AI-driven insights — all in one place.</p>
            <a className="provider-link" href="mailto:hello@self.app?subject=Visit%20Nodaly">Visit Nodaly <ArrowUpRight size={16} /></a>
            <small>Free to explore. No credit card needed.</small>
          </div>
          <div className="therapist-promo__details">
            <div className="nodaly-stats">
              <span><strong>5h+</strong><small>Saved weekly</small></span>
              <span><strong>70%</strong><small>Less paperwork</small></span>
              <span><strong>3x</strong><small>Faster notes</small></span>
              <span><strong>2x</strong><small>More client time</small></span>
            </div>
            <ul>
              <li><Check size={15} />AI-generated session notes</li>
              <li><Check size={15} />Real-time client analytics</li>
              <li><Check size={15} />Smart treatment planning</li>
              <li><Check size={15} />Secure client messaging</li>
              <li><Check size={15} />Treatment reminders</li>
              <li><Check size={15} />HIPAA-aligned &amp; encrypted</li>
            </ul>
            <blockquote>“Nodaly cut my admin time in half. I spend more time with clients and less time on paperwork. It’s genuinely changed how I practice.”<cite>Dr. Amara L. · Licensed Psychologist, NYC</cite></blockquote>
          </div>
        </div>
      </section>

      <section className="faq-section section-pad" id="faq">
        <div className="section-container faq-layout">
          <div>
            <SectionHeading
              eyebrow="HERE TO HELP"
              title="A few things"
              highlight="you might wonder."
              description="Still have a question? We’re here to help you find your way."
            />
            <a className="text-link" href="mailto:hello@self.app">Talk to our team <ArrowRight size={17} /></a>
          </div>
          <div className="faq-list">
            {faqs.map(({ question, answer }) => (
              <details key={question}>
                <summary>{question}<ChevronDown size={18} /></summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="closing-section" id="download">
        <div className="closing-section__glow" />
        <span className="closing-icon"><Moon size={23} /></span>
        <span className="landing-eyebrow">FREE TO START. PRIVATE. SECURE.</span>
        <h2>Start Your Wellness<br /><span>Journey Today</span></h2>
        <p>No pressure. No judgment. Just a safe, compassionate space to explore, reflect, and grow — right in your pocket.</p>
        <div className="closing-downloads">
          <a className="store-button store-button--light" href="#app-store"><span><small>Download on the</small><strong>App Store</strong></span></a>
          <a className="store-button store-button--glass" href="#google-play"><span><small>Get it on</small><strong>Google Play</strong></span></a>
        </div>
        <form className="notify-form" onSubmit={createNotificationDraft}>
          <label htmlFor="launch-email">Or get notified when we launch new features</label>
          <div>
            <input id="launch-email" name="email" type="email" placeholder="Enter your email" required />
            <button type="submit">Notify Me <ArrowRight size={15} /></button>
          </div>
          {notificationLink && (
            <p className="notify-confirmation" role="status">
              Your email app can send the request: <a href={notificationLink}>open your email draft</a>.
            </p>
          )}
        </form>
      </section>

      <footer className="site-footer">
        <div className="section-container">
          <div className="footer-main">
            <div className="footer-brand">
              <a className="brand" href="#" aria-label="The Self App home">
                <span className="brand__mark"><Sparkles size={21} /></span>
                <span className="brand__wordmark"><strong>THE SELF APP</strong><small>YOUR JOURNEY TO INNER PEACE</small></span>
              </a>
              <p>Your mental wellness companion — therapy, mood tracking, and guided support in one private, compassionate space.</p>
            </div>
            <div className="footer-column">
              <h3>PRODUCT</h3>
              <a href="#features">Features</a><a href="#for-therapists">For Therapists</a><a href="#for-therapists">For Organizations</a><a href="#pricing">Pricing</a>
            </div>
            <div className="footer-column">
              <h3>RESOURCES</h3>
              <a href="#blog">Mental Health Blog</a><a href="#faq">Crisis Support</a><a href="#faq">Self-Help Guides</a><a href="#faq">FAQ</a>
            </div>
            <div className="footer-column">
              <h3>LEGAL &amp; ABOUT</h3>
              <a href="#faq">About Self App</a><a href="mailto:hello@self.app">Contact Support</a><a href="#privacy">Privacy Policy</a><a href="#terms">Terms of Service</a><a href="#cookies">Cookie Policy</a><a href="#accessibility">Accessibility</a>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© 2026 Humanis Arc LLC. All rights reserved.</span>
            <div><span>HIPAA</span><span>E2E Encrypted</span><span>Licensed</span></div>
            <span className="footer-made"><Heart size={13} fill="currentColor" /> Made with care</span>
          </div>
          <div className="system-status"><span />All systems operational <i /> v2.4.1</div>
        </div>
      </footer>
    </>
  );
}

export default LandingSections;
