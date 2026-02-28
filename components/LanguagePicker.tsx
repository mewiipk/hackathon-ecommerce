const languages = ["English", "ไทย", "Bahasa", "Malay", "中文", "Tiếng Việt"];

export function LanguagePicker() {
  return (
    <select className="pill" aria-label="Language option">
      {languages.map((language) => (
        <option key={language}>{language}</option>
      ))}
    </select>
  );
}
