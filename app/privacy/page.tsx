import Link from "next/link";
import { BackButton } from "../components/BackButton";

export const metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for Itinero, the travel itinerary planner app. How we handle your data, what we collect, and your rights."
};

export default function PrivacyPage() {
  return (
    <>
      <header className="nav">
        <div className="container navInner">
          <Link href="/" className="brand" aria-label="Itinero home">
            Itinero
          </Link>
          <BackButton />
        </div>
      </header>
      <main id="main-content" style={{ padding: "70px 0" }}>
        <div className="container">
          <div style={{ marginBottom: 24 }}>
            <BackButton />
          </div>
          <h1 className="h1" style={{ fontSize: 44 }}>Privacy Policy</h1>
          <p className="lead" style={{ marginBottom: 32 }}>
            Last updated: March 2026. This page explains how Itinero (“I”, “me”, “the app”) handles information when you use the
            Itinero travel itinerary planner app for iPhone and when you visit this website.
          </p>

          <div className="card" style={{ maxWidth: 880, marginBottom: 20 }}>
            <h3 style={{ marginTop: 0 }}>1. Who is responsible</h3>
            <p style={{ color: "var(--muted)", lineHeight: 1.7 }}>
              Itinero is developed and operated by Tobi Adegoroye. I act as the data controller for any personal information that
              is collected or processed in connection with the app and this website.
            </p>
          </div>

          <div className="card" style={{ maxWidth: 880, marginBottom: 20 }}>
            <h3 style={{ marginTop: 0 }}>2. Data collected in the iOS app</h3>
            <p style={{ color: "var(--muted)", lineHeight: 1.7 }}>
              The itinerary data you create in the app (trip names, dates, activities, notes and similar content) is stored locally
              on your device. I do not run a separate Itinero account system and I do not upload your itineraries to my own
              servers. Apple may collect diagnostic or usage information about your device and app usage in line with your iOS
              settings and Apple’s own privacy policy.
            </p>
          </div>

          <div className="card" style={{ maxWidth: 880, marginBottom: 20 }}>
            <h3 style={{ marginTop: 0 }}>3. Data collected on this website</h3>
            <p style={{ color: "var(--muted)", lineHeight: 1.7 }}>
              When you visit the Itinero marketing site, the hosting provider automatically receives standard log information such
              as your IP address, browser type, approximate location, the pages you visit and the time of your visit. This
              information is used to keep the site secure and to understand basic usage. If I enable privacy‑friendly analytics in
              future, it will be used in aggregate form only to see how many people visit and which pages are most helpful.
            </p>
          </div>

          <div className="card" style={{ maxWidth: 880, marginBottom: 20 }}>
            <h3 style={{ marginTop: 0 }}>4. Contact and support</h3>
            <p style={{ color: "var(--muted)", lineHeight: 1.7 }}>
              If you contact me about Itinero (for example by email or via a contact form), I will receive the information you
              choose to provide such as your name, email address and the content of your message. I use this information only to
              respond to you and to improve the app or site where relevant.
            </p>
          </div>

          <div className="card" style={{ maxWidth: 880, marginBottom: 20 }}>
            <h3 style={{ marginTop: 0 }}>5. How your data is used</h3>
            <p style={{ color: "var(--muted)", lineHeight: 1.7 }}>
              I use your data to: (a) provide the core functionality of the app, (b) operate and protect the website, and (c)
              respond to feedback and support requests. I do not sell your data, do not share it with advertisers, and do not use
              it to build marketing profiles.
            </p>
          </div>

          <div className="card" style={{ maxWidth: 880, marginBottom: 20 }}>
            <h3 style={{ marginTop: 0 }}>6. Data retention and deletion</h3>
            <p style={{ color: "var(--muted)", lineHeight: 1.7 }}>
              Your itineraries stay on your device until you delete them in the app or uninstall the app. I do not keep separate
              copies of your trips. Messages or emails you send to me may be kept for as long as reasonably necessary to handle
              your request and keep basic records, after which they may be archived or deleted.
            </p>
          </div>

          <div className="card" style={{ maxWidth: 880, marginBottom: 20 }}>
            <h3 style={{ marginTop: 0 }}>7. Your rights</h3>
            <p style={{ color: "var(--muted)", lineHeight: 1.7 }}>
              Depending on where you live (for example in the UK or EU), you may have rights such as access to the personal data I
              hold about you, the ability to ask for corrections, deletion or to object to certain uses. If you would like to make
              a request, contact me using the details below and I will do my best to help.
            </p>
          </div>

          <div className="card" style={{ maxWidth: 880 }}>
            <h3 style={{ marginTop: 0 }}>8. Contact</h3>
            <p style={{ color: "var(--muted)", lineHeight: 1.7 }}>
              For any questions about this policy or how Itinero handles data, contact Tobi Adegoroye using the contact details
              provided on this website or in the Itinero listing on the Apple App Store.
            </p>
          </div>
        </div>
      </main>
      <footer className="footer">
        <div className="container footerInner">
          <div>© {new Date().getFullYear()} Itinero</div>
          <div className="smallLinks">
            <Link href="/privacy">Privacy</Link>
            <a href="https://apps.apple.com/us/app/itinero/id6757012086" target="_blank" rel="noopener noreferrer">App Store</a>
          </div>
        </div>
      </footer>
    </>
  );
}
