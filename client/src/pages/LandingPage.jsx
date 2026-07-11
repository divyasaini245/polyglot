import { useNavigate } from "react-router-dom";
import polyglotLogo from "../assets/Polyglot.png";
import LandingNavbar from "../components/LandingNavbar";
import "./LandingPage.css";

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="landing-page">
      <LandingNavbar />

      <section id="home" className="hero-section">
        <img src={polyglotLogo} alt="Polyglot Logo" className="hero-logo" />
        <p className="hero-text">
          Paste any YouTube link, get an instant summary translated into your language — 70+ languages supported.
        </p>
        <button onClick={() => navigate("/auth")} className="hero-button">
          Get Started
        </button>
      </section>

      <section id="about" className="section">
        <h2 className="section-heading">About Polyglot</h2>
        <p className="about-text">
          Polyglot takes any YouTube video and turns it into a clear, translated summary in seconds.
          Just paste a link, pick your language, and let AI do the rest — no more struggling with
          content in a language you don't understand, or sitting through hours of video just to get
          the key points.
        </p>
      </section>

      <section id="how-it-works" className="section">
        <h2 className="section-heading">How It Works</h2>
        <div className="steps-container">
          <div className="step-item">
            <div className="step-number">1</div>
            <h3 className="step-title">Paste the Link</h3>
            <p className="step-desc">Copy any YouTube video link and paste it into Polyglot.</p>
          </div>
          <div className="step-item">
            <div className="step-number">2</div>
            <h3 className="step-title">Choose Your Language</h3>
            <p className="step-desc">Select from 70+ languages you want the summary in.</p>
          </div>
          <div className="step-item">
            <div className="step-number">3</div>
            <h3 className="step-title">Get Your Summary</h3>
            <p className="step-desc">Receive an instant, translated summary of the video's content.</p>
          </div>
        </div>
      </section>

      <section id="why-us" className="section">
        <h2 className="section-heading">Why Polyglot?</h2>
        <div className="cards-container">
          <div className="feature-card">
            <h3 className="feature-title">70+ Languages</h3>
            <p className="feature-desc">Get summaries in almost any language you speak, from Hindi to Japanese to Spanish.</p>
          </div>
          <div className="feature-card">
            <h3 className="feature-title">Instant Summaries</h3>
            <p className="feature-desc">No more watching hours of video — get the key points in seconds.</p>
          </div>
          <div className="feature-card">
            <h3 className="feature-title">Your History, Saved</h3>
            <p className="feature-desc">Every video you process is saved to your account, so you can revisit it anytime.</p>
          </div>
        </div>
      </section>

      <section id="contact" className="section">
        <h2 className="section-heading">Get In Touch</h2>
        <p className="contact-text">Have questions, feedback, or suggestions? Reach out anytime.</p>
        <a href="mailto:aaiankitsinha@gmail.com" className="contact-button">
          aaiankitsinha@gmail.com
        </a>
      </section>

      <footer className="landing-footer">© 2026 Polyglot. All rights reserved.</footer>
    </div>
  );
}

export default LandingPage;