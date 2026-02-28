import Link from "next/link";

export default function HomePage() {
  return (
    <section className="hero">
      <div className="hero-grid">
        <div className="card">
          <h1>Commenti</h1>
          <p>
            AI-powered review management for Shopee, Lazada, Facebook, and TikTok sellers. Track sentiment,
            auto-reply with brand-safe tones, and close cases faster.
          </p>
          <ul className="list">
            <li>Unified review inbox + social listening sync</li>
            <li>Negative keyword alerts for refund/broken/late delivery</li>
            <li>Case urgency timer and AI co-pilot recommendations</li>
            <li>Subscription based on token usage and AI actions</li>
          </ul>
          <Link href="/onboarding" className="cta">
            Create Account
          </Link>
        </div>
        <div className="card">
          <h3>Why sellers choose Commenti</h3>
          <p>
            Increase conversion with keyword-led response quality. Discover which words drive reach and engagement,
            then reuse successful AI prompts across channels.
          </p>
          <div className="word-cloud" style={{ marginTop: "1rem" }}>
            <span className="word" style={{ fontSize: "1.15rem" }}>conversion +23%</span>
            <span className="word" style={{ fontSize: "1rem" }}>response SLA</span>
            <span className="word" style={{ fontSize: ".95rem" }}>spam shield</span>
            <span className="word" style={{ fontSize: "1.1rem" }}>AEO ready</span>
          </div>
        </div>
      </div>
    </section>
  );
}
