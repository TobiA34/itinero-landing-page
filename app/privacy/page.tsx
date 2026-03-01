export const metadata = {
  title: "Privacy Policy"
};

export default function PrivacyPage() {
  return (
    <main style={{ padding: "70px 0" }}>
      <div className="container">
        <h1 className="h1" style={{ fontSize: 44 }}>Privacy</h1>
        <p className="lead">
          Replace this with your official Privacy Policy text (or link to your hosted policy).
        </p>

        <div className="card" style={{ maxWidth: 880 }}>
          <h3 style={{ marginTop: 0 }}>Quick template</h3>
          <p style={{ color: "var(--muted)", lineHeight: 1.7 }}>
            Itinero is designed to be privacy-friendly.
            This placeholder page exists so you can pass basic expectations for a public landing page.
            <br /><br />
            Add sections like:
            • Data collected (if any) • Analytics • Account data • Contact • Deletion requests
          </p>
        </div>
      </div>
    </main>
  );
}
