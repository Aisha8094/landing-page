import {
  Activity,
  Apple,
  AudioLines,
  BatteryFull,
  Bell,
  Heart,
  Home,
  MessageCircle,
  Play,
  ShieldCheck,
  Sparkles,
  UserRound,
  UsersRound,
  Wifi,
} from "lucide-react";

function Section3() {
  return (
    <section className="self-hero">
      <div className="self-hero__backdrop" aria-hidden="true" />
      <div className="self-hero__shade" aria-hidden="true" />

      <header className="site-header">
        <a className="brand" href="#" aria-label="The Self App home">
          <span className="brand__mark">
            <Sparkles size={21} strokeWidth={1.8} />
          </span>
          <span className="brand__wordmark">
            <strong>THE SELF APP</strong>
            <small>YOUR JOURNEY TO INNER PEACE</small>
          </span>
        </a>

        <nav className="main-nav" aria-label="Main navigation">
          <a href="#features">Features</a>
          <a href="#app-preview">App Preview</a>
          <a href="#trust">Trust &amp; Safety</a>
          <a href="#pricing">Pricing</a>
          <a href="#blog">Blog</a>
        </nav>

        <div className="site-header__actions">
          <a className="sign-in" href="#sign-in">Sign In</a>
          <a className="header-cta" href="#download">Download Free</a>
        </div>
      </header>

      <div className="hero-layout">
        <div className="hero-copy">
          <div className="trust-badge">
            <span className="trust-badge__dot" />
            Trusted by 500,000+ people worldwide
          </div>

          <h1 className="hero-title">
            Your Mental
            <span>Wellness,</span>
            Simplified.
          </h1>

          <p className="hero-description">
            Connect with licensed therapists, track your emotions, and build a
            healthier mind — all in one app. Free to start. Always private.
          </p>

          <div className="hero-buttons">
            <a className="store-button store-button--light" href="#app-store">
              <Apple size={20} fill="currentColor" />
              <span>
                <small>Download on the</small>
                <strong>App Store</strong>
              </span>
            </a>
            <a className="store-button store-button--glass" href="#google-play">
              <Play size={18} fill="currentColor" />
              <span>
                <small>Get it on</small>
                <strong>Google Play</strong>
              </span>
            </a>
          </div>
        </div>

        <div className="app-showcase">
          <div className="phone-frame">
            <div className="phone-screen">
              <div className="phone-status">
                <span>9:41</span>
                <span className="phone-status__icons">
                  <Wifi size={13} />
                  <BatteryFull size={15} />
                </span>
              </div>

              <div className="phone-greeting">
                <div className="avatar">W</div>
                <div>
                  <small>Good Morning</small>
                  <strong>Williams James</strong>
                </div>
                <button className="round-icon" aria-label="Notifications">
                  <Bell size={14} />
                </button>
              </div>

              <div className="support-card">
                <div>
                  <strong>Unlock AI Support</strong>
                  <small>Get personalized guidance</small>
                </div>
                <span className="upgrade-pill">Upgrade</span>
              </div>

              <div className="mood-card">
                <div className="phone-card-heading">
                  <div>
                    <strong>Mood Tracking</strong>
                    <small>24 hours</small>
                  </div>
                  <span className="phone-average"><Activity size={13} /> Avg: 4.0</span>
                </div>
                <div className="mood-tabs">
                  <span>Today</span><span>Weekly</span><span>Yearly</span>
                </div>
                <div className="mood-chart" aria-label="Mood through the day">
                  {[16, 25, 38, 45, 34, 24, 14].map((height, index) => (
                    <span
                      key={index}
                      className={`mood-bar mood-bar--${index + 1}`}
                      style={{ height: `${height}px` }}
                    />
                  ))}
                </div>
                <div className="chart-labels">
                  <span>6 AM</span><span>10 AM</span><span>2 PM</span>
                  <span>6 PM</span><span>10 PM</span><span>2 AM</span>
                </div>
                <div className="mood-checkin">
                  <Heart size={16} />
                  <div><strong>Love</strong><small>Latest check-in</small></div>
                  <span>Check-in</span>
                </div>
              </div>

              <div className="quick-links">
                <div><strong>Journal</strong><small>Write your thoughts</small></div>
                <div><strong>Self Chat</strong><small>Upgrade to unlock</small></div>
              </div>

              <div className="therapist-card">
                <UsersRound size={18} />
                <div>
                  <strong>Therapist Connection</strong>
                  <small>Find support and guidance from licensed professionals.</small>
                </div>
              </div>

              <div className="phone-nav" aria-label="App navigation">
                <Home size={14} />
                <Heart size={14} />
                <span><AudioLines size={15} /></span>
                <UsersRound size={14} />
                <UserRound size={14} />
              </div>
            </div>
          </div>

          <div className="floating-card privacy-card">
            <span className="floating-card__icon"><ShieldCheck size={17} /></span>
            <span><strong>100% Private</strong><small>End-to-end encrypted</small></span>
          </div>
          <div className="floating-card therapist-badge">
            <span className="floating-card__icon"><MessageCircle size={16} /></span>
            <span><strong>Licensed Therapists</strong><small>Verified &amp; credentialed</small></span>
          </div>
          <div className="floating-card rating-badge">
            <span className="rating-badge__star">★</span>
            <span><strong>4.8</strong><small>From 50,000+ reviews</small></span>
          </div>
        </div>
      </div>

      <div className="scroll-cue" aria-hidden="true"><span /></div>
    </section>
  );
}

export default Section3;
