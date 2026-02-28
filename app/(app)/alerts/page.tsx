import { AppShell } from "@/components/AppShell";

export default function AlertsPage() {
  return (
    <AppShell title="Alerts & Flags">
      <h2>Alert & Flag System</h2>
      <div className="grid" style={{ gridTemplateColumns: "1fr 1fr", marginTop: "1rem" }}>
        <section className="card">
          <h3>Live Alerts</h3>
          <ul className="list">
            <li><span className="bad">High:</span> 19 negative reviews in last 30 mins</li>
            <li><span className="bad">High:</span> "refund" keyword +230% vs WoW</li>
            <li>Medium: unusual review spike on TikTok</li>
            <li>Medium: video flagged for policy violation</li>
          </ul>
        </section>
        <section className="card">
          <h3>Negative Content Dealer</h3>
          <p>AI spam remover auto-hides toxic comments until a case owner responds. Email alerts can be enabled by severity and platform.</p>
          <div style={{ marginTop: "0.7rem" }}>
            <span className="pill">email: on-call@shop.com</span>
          </div>
        </section>
      </div>
    </AppShell>
  );
}
