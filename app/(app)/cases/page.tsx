import { AppShell } from "@/components/AppShell";

export default function CasesPage() {
  return (
    <AppShell title="Case Dealing">
      <h2>Manual Case Dealing + Urgency Timer</h2>
      <section className="card" style={{ marginTop: "1rem" }}>
        <table className="table">
          <thead>
            <tr>
              <th>Case</th>
              <th>Priority</th>
              <th>Timer</th>
              <th>AI Recommendation</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Order #4421 broken item</td>
              <td><span className="badge negative">Negative</span></td>
              <td className="bad">02:40:19</td>
              <td>Offer replacement + express shipping + apology token</td>
            </tr>
            <tr>
              <td>Order #5930 delivery feedback</td>
              <td><span className="badge neutral">Neutral</span></td>
              <td>00:42:10</td>
              <td>Ask for preferred redelivery slot, maintain warm tone</td>
            </tr>
          </tbody>
        </table>
      </section>
      <section className="card" style={{ marginTop: "1rem" }}>
        <h3>Time management SLA</h3>
        <ul className="list">
          <li>Negative review: respond within 15 minutes</li>
          <li>Neutral review: respond within 2 hours</li>
          <li>Positive review: respond within 24 hours</li>
        </ul>
      </section>
    </AppShell>
  );
}
