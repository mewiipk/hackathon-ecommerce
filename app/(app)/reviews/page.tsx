import { AppShell } from "@/components/AppShell";
import { reviewRows } from "@/lib/mock-data";

export default function ReviewsPage() {
  return (
    <AppShell title="Review Inbox">
      <h2>Review Table with Filters</h2>
      <div className="card" style={{ marginTop: "1rem" }}>
        <div style={{ display: "flex", gap: ".5rem", marginBottom: ".8rem" }}>
          <span className="pill">Platform: All</span>
          <span className="pill">Sentiment: All</span>
          <span className="pill">Keyword: refund</span>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th>Platform</th>
              <th>Review</th>
              <th>AI Suggestion</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            {reviewRows.map((row, idx) => (
              <tr key={idx}>
                <td>{row.platform}</td>
                <td>{row.review}</td>
                <td>"Thanks for sharing. We are fixing this now and will DM support options."</td>
                <td><button className="pill">Open editor</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AppShell>
  );
}
