import { AppShell } from "@/components/AppShell";
import { bars, dashboardStats, reviewRows, words } from "@/lib/mock-data";

export default function DashboardPage() {
  return (
    <AppShell title="Dashboard">
      <h2>Seller Intelligence Dashboard</h2>
      <div className="grid stats" style={{ marginTop: "1rem" }}>
        {dashboardStats.map((item) => (
          <article className="card" key={item.label}>
            <h3>{item.label}</h3>
            <div className="big">{item.value}</div>
            <div className="trend">{item.trend}</div>
          </article>
        ))}
      </div>

      <div className="grid" style={{ gridTemplateColumns: "1.5fr 1fr", marginTop: "1rem" }}>
        <section className="card">
          <h3>Sentiment Trend (WoW / MoM / YoY)</h3>
          <div className="chart-bars" style={{ marginTop: "1rem" }}>
            {bars.map((value, index) => (
              <div key={index} className="bar" style={{ height: `${value}%` }} />
            ))}
          </div>
        </section>
        <section className="card">
          <h3>Frequent Keywords</h3>
          <div className="word-cloud" style={{ marginTop: "0.8rem" }}>
            {words.map((word) => (
              <span key={word.text} className="word" style={{ fontSize: `${word.size}rem` }}>
                {word.text}
              </span>
            ))}
          </div>
        </section>
      </div>

      <section className="card" style={{ marginTop: "1rem" }}>
        <h3>Recent Reviews</h3>
        <table className="table" style={{ marginTop: "0.6rem" }}>
          <thead>
            <tr>
              <th>Platform</th>
              <th>Review</th>
              <th>Keyword</th>
              <th>Sentiment</th>
            </tr>
          </thead>
          <tbody>
            {reviewRows.map((row, index) => (
              <tr key={index}>
                <td>{row.platform}</td>
                <td>{row.review}</td>
                <td>{row.keyword}</td>
                <td><span className={`badge ${row.sentiment}`}>{row.sentiment}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </AppShell>
  );
}
