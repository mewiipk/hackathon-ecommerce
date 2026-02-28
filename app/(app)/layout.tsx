import { LanguagePicker } from "@/components/LanguagePicker";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="topbar" style={{ padding: "0.8rem 1.4rem 0" }}>
        <div className="pill">TikTok Shop onboarding journey active</div>
        <LanguagePicker />
      </div>
      {children}
    </>
  );
}
