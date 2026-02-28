import Link from "next/link";

const navItems = [
  ["/dashboard", "Dashboard"],
  ["/reviews", "Review Inbox"],
  ["/alerts", "Alerts & Flags"],
  ["/cases", "Case Dealing"],
  ["/training", "AI Training"],
  ["/onboarding", "Onboarding"]
];

export function AppShell({ children, title }: { children: React.ReactNode; title: string }) {
  return (
    <div className="shell">
      <aside className="sidebar">
        <div className="logo">Commenti</div>
        {navItems.map(([href, label]) => (
          <Link key={href} href={href} className={`nav-link${title === label ? " active" : ""}`}>
            {label}
          </Link>
        ))}
        <div style={{ marginTop: "1rem", fontSize: ".8rem", opacity: "0.85" }}>
          Plan: Growth · 72K tokens used
        </div>
      </aside>
      <main className="content">{children}</main>
    </div>
  );
}
