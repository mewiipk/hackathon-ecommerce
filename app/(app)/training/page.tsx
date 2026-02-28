import { AppShell } from "@/components/AppShell";

export default function TrainingPage() {
  return (
    <AppShell title="AI Training">
      <h2>Train LLM / Data Feeding</h2>
      <div className="grid" style={{ gridTemplateColumns: "1fr 1fr", marginTop: "1rem" }}>
        <section className="card">
          <h3>CSV Upload</h3>
          <p>Upload keyword-response pairs to fine tune response style per shop and language.</p>
          <button className="pill">Upload .csv</button>
        </section>
        <section className="card">
          <h3>AI Performance Tracking</h3>
          <ul className="list">
            <li>Acceptance rate: 84%</li>
            <li>Edit distance: 16%</li>
            <li>Resolved without escalation: 73%</li>
            <li>Social listening samples imported: 12,421</li>
          </ul>
        </section>
      </div>
    </AppShell>
  );
}
