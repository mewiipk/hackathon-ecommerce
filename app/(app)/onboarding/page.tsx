import { AppShell } from "@/components/AppShell";

export default function OnboardingPage() {
  return (
    <AppShell title="Onboarding">
      <h2>Account Creation & Channel Connection</h2>
      <div className="grid" style={{ gridTemplateColumns: "1fr 1fr", marginTop: "1rem" }}>
        <section className="card">
          <h3>1) Register</h3>
          <p>Email, mobile, or Google OAuth.</p>
          <ul className="list">
            <li>Shop name and timezone</li>
            <li>Team member invites</li>
            <li>Default AI persona (friendly, premium, casual)</li>
          </ul>
        </section>
        <section className="card">
          <h3>2) Connect Platforms</h3>
          <ul className="list">
            <li>Shopee API connected</li>
            <li>Lazada API connected</li>
            <li>Facebook comments listener</li>
            <li>TikTok shop + live comments</li>
          </ul>
        </section>
      </div>
      <section className="card" style={{ marginTop: "1rem" }}>
        <h3>Sync policy</h3>
        <p>Commenti syncs reviews every 5 minutes, pushes negative alerts immediately, and runs hourly keyword clustering for insights and SEO/AEO seeding.</p>
      </section>
    </AppShell>
  );
}
