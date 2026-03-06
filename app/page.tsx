import Image from "next/image";
import { RevealOnScroll } from "./components/RevealOnScroll";

const APP_STORE_URL = "https://apps.apple.com/us/app/itinero/id6757012086";
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://itinero.app";
const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "";
const WHATSAPP_URL = WHATSAPP_NUMBER ? `https://wa.me/${WHATSAPP_NUMBER.replace(/\D/g, "")}` : null;

function JsonLd() {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Itinero",
    "url": SITE_URL,
    "logo": SITE_URL + "/logo.png",
    "description": "Travel itinerary planner app for iPhone. Plan day-by-day trips in one place.",
    "sameAs": [APP_STORE_URL]
  };

  const mobileApp = {
    "@context": "https://schema.org",
    "@type": "MobileApplication",
    "name": "Itinero",
    "operatingSystem": "iOS",
    "applicationCategory": "TravelApplication",
    "url": SITE_URL + "/",
    "downloadUrl": APP_STORE_URL,
    "description": "Itinero is a travel itinerary planner app for iPhone that helps you create, organise and edit day-by-day trips in seconds. A minimalist trip planner app for real travellers.",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
    "author": { "@type": "Person", "name": "Tobi Adegoroye" }
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Itinero",
    "url": SITE_URL,
    "description": "Plan better trips with Itinero. Create, organise and edit travel itineraries in seconds. The minimalist travel itinerary planner app.",
    "publisher": { "@type": "Organization", "name": "Itinero", "url": SITE_URL }
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Itinero – Travel itinerary planner app", "item": SITE_URL + "/" }]
  };

  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is Itinero?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Itinero is a travel itinerary planner app for iPhone that helps you turn messy trip ideas into a clean, day-by-day plan. You can keep flights, stays and activities in one simple itinerary instead of scattered notes and screenshots."
        }
      },
      {
        "@type": "Question",
        "name": "Who is the Itinero itinerary planner app for?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Itinero is built for real travellers: solo trips, couples weekends, football away days and longer breaks. If you like having a clear trip planner app instead of 40 open tabs, Itinero is designed for you."
        }
      },
      {
        "@type": "Question",
        "name": "Is Itinero free to download?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. You can download the Itinero travel itinerary planner app for free from the Apple App Store. The core experience is focused on giving you a clean, fast way to plan your trips."
        }
      }
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(mobileApp) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
    </>
  );
}

export default function Page() {
  return (
    <>
      <JsonLd />
      <header className="nav">
        <div className="container navInner">
          <div className="brand">
            <Image
              src="/logo.png"
              alt="Itinero – Travel itinerary planner app"
              width={34}
              height={34}
              className="appLogo"
              priority
            />
            <span>Itinero</span>
            <span className="badge">Travel itinerary planner</span>
          </div>

          <input type="checkbox" id="nav-toggle" className="navToggle" />
          <label htmlFor="nav-toggle" className="navToggleButton" aria-label="Open menu">
            <span />
            <span />
            <span />
          </label>

          <div className="ctaRow navLinks">
            <a className="btn btnGhost" href="#app-screens">Screens</a>
            <a className="btn btnGhost" href="#features">Features</a>
            <a className="btn btnGhost" href="#use-cases">Use cases</a>
            <a className="btn btnGhost" href="/blog">Blog</a>
            <a className="btn btnPrimary" href={APP_STORE_URL} target="_blank" rel="noopener noreferrer">
              Download on the App Store
            </a>
          </div>
        </div>
      </header>

      <main id="main-content" role="main">
        <RevealOnScroll>
        <section className="hero" aria-labelledby="hero-heading">
          <div className="container heroGrid">
            <div>
              <div className="badge heroStagger heroStagger1">Travel itinerary planner app for real trips.</div>
              <h1 id="hero-heading" className="h1 heroStagger heroStagger2">Travel itinerary planner app that turns messy trip ideas into a clean itinerary.</h1>
              <p className="lead heroStagger heroStagger3">
                Itinero is a simple travel itinerary planner app for people who like organised trips,
                not 40 open tabs. Build a day-by-day plan that actually feels realistic.
              </p>

              <div className="ctaRow heroStagger heroStagger4" style={{ marginTop: 14 }}>
                <a className="btn btnPrimary" href={APP_STORE_URL} target="_blank" rel="noopener noreferrer">
                  Download on the App Store
                </a>
                <a className="btn" href="#how-it-works">See how it works</a>
                <a className="btn btnGhost" href="/blog">Read itinerary planning guide</a>
              </div>

              <div className="kpiRow heroStagger heroStagger5">
                <div className="kpi"><strong>Day-by-day</strong> planning</div>
                <div className="kpi"><strong>Clean</strong> Apple-style UI</div>
                <div className="kpi"><strong>Edit</strong> anytime</div>
              </div>
            </div>

            <div className="phoneCard" aria-label="App preview">
              <div className="mock">
                <div className="mockHeader">
                  <div>
                    <div className="mockTitle">Paris • 3 days</div>
                    <div className="rowMeta">Everything in one itinerary</div>
                  </div>
                  <span className="pill">Today</span>
                </div>

                <div className="mockList">
                  <div className="row">
                    <div className="rowLeft">
                      <span className="dot" />
                      <div>
                        <div style={{ fontWeight: 650 }}>Louvre Museum</div>
                        <div className="rowMeta">Tickets • Metro • Notes</div>
                      </div>
                    </div>
                    <div className="time">10:00</div>
                  </div>

                  <div className="row">
                    <div className="rowLeft">
                      <span className="dot" />
                      <div>
                        <div style={{ fontWeight: 650 }}>Food spot (saved)</div>
                        <div className="rowMeta">Address • Map • Reminder</div>
                      </div>
                    </div>
                    <div className="time">13:00</div>
                  </div>

                  <div className="row">
                    <div className="rowLeft">
                      <span className="dot" />
                      <div>
                        <div style={{ fontWeight: 650 }}>Evening plans</div>
                        <div className="rowMeta">Flexible • Editable anytime</div>
                      </div>
                    </div>
                    <div className="time">19:30</div>
                  </div>
                </div>

                <div style={{ marginTop: 14, display: "flex", gap: 10, flexWrap: "wrap" }}>
                  <span className="pill">Add activity</span>
                  <span className="pill">Reorder</span>
                  <span className="pill">Share soon</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="app-screens" className="section screensSection" aria-labelledby="screens-heading">
          <div className="container">
            <h2 id="screens-heading" className="h2 reveal">See Itinero in action</h2>
            <p className="sub reveal">Plan trips, manage currency, and customise your experience — all in one app.</p>
            <div className="iphoneFrameWrap reveal">
              <div className="iphoneFrame">
                <div className="iphoneFrameInner">
                  <Image src="/screen-1.jpeg" alt="Itinero app – Settings and preferences" width={390} height={844} />
                </div>
              </div>
              <div className="iphoneFrame">
                <div className="iphoneFrameInner">
                  <Image src="/screen-2.jpeg" alt="Itinero app – Currency and options" width={390} height={844} />
                </div>
              </div>
              <div className="iphoneFrame">
                <div className="iphoneFrameInner">
                  <Image src="/screen-3.jpeg" alt="Itinero app – App features" width={390} height={844} />
                </div>
              </div>
              <div className="iphoneFrame">
                <div className="iphoneFrameInner">
                  <Image src="/screen-4.jpeg" alt="Itinero app – More screens" width={390} height={844} />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="section" aria-labelledby="how-heading">
          <div className="container">
            <h2 id="how-heading" className="h2 reveal">Travel planning shouldn’t feel like admin.</h2>
            <p className="sub reveal">
              Notes apps and screenshots are fine until you land. Itinero keeps flights, stays and
              ideas in one place so you can stop re-building the plan every time you open your phone.
            </p>

            <div className="grid3">
              <div className="card reveal">
                <h3>1) Create your trip</h3>
                <p>Name your trip, add dates, and start building the plan.</p>
              </div>
              <div className="card reveal">
                <h3>2) Add days + activities</h3>
                <p>Restaurants, museums, stadium tours, anything — structured day-by-day.</p>
              </div>
              <div className="card reveal">
                <h3>3) Edit anytime</h3>
                <p>Plans change. Reorder and update your itinerary in seconds.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="section" aria-labelledby="features-heading">
          <div className="container">
            <h2 id="features-heading" className="h2 reveal">Built to be your one trip home screen.</h2>
            <p className="sub reveal">
              Itinero is a minimalist <strong>travel itinerary planner app</strong> you can open at the
              airport, in a taxi or outside a stadium and instantly see what’s next. No clutter, no
              complicated views to learn.
            </p>

            <div className="grid3">
              <div className="card reveal">
                <h3>Day-by-day itineraries</h3>
                <p>Build a full trip schedule without spreadsheets or chaos.</p>
              </div>
              <div className="card reveal">
                <h3>Locations & activities</h3>
                <p>Keep your must-dos organised — food, culture, football, nightlife, whatever.</p>
              </div>
              <div className="card reveal">
                <h3>Edit on the fly</h3>
                <p>Change times, reorder plans, and keep it flexible.</p>
              </div>
              <div className="card reveal">
                <h3>Private by default</h3>
                <p>Your trips are yours. No weird social feed, no noise.</p>
              </div>
              <div className="card reveal">
                <h3>Fast, Apple-style UI</h3>
                <p>Designed to feel native, clean and satisfying to use.</p>
              </div>
              <div className="card reveal">
                <h3>Built for real travellers</h3>
                <p>Weekend breaks, big trips, solo travel, couples trips — it scales with you.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="use-cases" className="section" aria-labelledby="use-cases-heading">
          <div className="container split">
            <div>
              <h2 id="use-cases-heading" className="h2 reveal">For solo trips, away days and everything in between.</h2>
              <p className="sub reveal">
                Itinero works whether you’re planning a quick weekend, a football away day or a longer
                break. Use it as your <strong>trip planner app</strong> for anything that deserves more
                than a half-finished notes list:
              </p>
              <div className="grid3" style={{ gridTemplateColumns: "repeat(2, 1fr)" }}>
                <div className="card reveal"><h3>Solo travel</h3><p>Keep it structured, keep it chill.</p></div>
                <div className="card reveal"><h3>Couples trips</h3><p>One plan, no confusion.</p></div>
                <div className="card reveal"><h3>City breaks</h3><p>2–4 day itineraries done right.</p></div>
                <div className="card reveal"><h3>Away days</h3><p>Match + food + plans, organised.</p></div>
              </div>
              <a className="btn btnPrimary" href={APP_STORE_URL} target="_blank" rel="noopener noreferrer" style={{ marginTop: 18 }}>
                Get Itinero
              </a>
            </div>

            <div className="card reveal" style={{ borderRadius: 26 }}>
              <h3 style={{ marginTop: 0 }}>One app, your whole trip</h3>
              <p style={{ color: "var(--muted)", lineHeight: 1.6 }}>
                Itinero is the <strong>itinerary planner app</strong> that keeps day-by-day plans in one place.
                No spreadsheets, no scattered notes — just a clean <strong>travel itinerary planner</strong> that works when you’re on the road.
              </p>
              <a className="btn" href="#features" style={{ marginTop: 10 }}>
                See features
              </a>
            </div>
          </div>
        </section>

        <section className="section" aria-labelledby="faq-heading">
          <div className="container">
            <h2 id="faq-heading" className="h2 reveal">Itinero travel itinerary planner app – FAQ</h2>
            <div className="grid3">
              <div className="card reveal">
                <h3>What is Itinero?</h3>
                <p className="sub">
                  Itinero is a travel itinerary planner app for iPhone that turns scattered trip ideas
                  into a simple, day-by-day plan you can actually follow on the road.
                </p>
              </div>
              <div className="card reveal">
                <h3>Who is Itinero for?</h3>
                <p className="sub">
                  If you like organised trips, not 40 open tabs, Itinero is for you – solo trips, couples
                  weekends, football away days and longer holidays.
                </p>
              </div>
              <div className="card reveal">
                <h3>Is Itinero free?</h3>
                <p className="sub">
                  Yes, you can download the Itinero itinerary planner app free on the Apple App Store and
                  start planning your next trip in minutes.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="card reveal" style={{ borderRadius: 26, padding: 22 }}>
              <h2 className="h2" style={{ marginTop: 0 }}>Ready to plan your next trip?</h2>
              <p className="sub" style={{ marginBottom: 16 }}>
                Download Itinero, the travel itinerary planner app for iPhone, and turn travel chaos into a clean itinerary you can actually follow.
              </p>
              <div className="ctaRow">
                <a className="btn btnPrimary" href={APP_STORE_URL} target="_blank" rel="noopener noreferrer">
                  Download on the App Store
                </a>
                {WHATSAPP_URL && (
                  <a className="btn btnWhatsapp" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp">
                    <Image src="/whatsapp.svg" alt="" width={22} height={22} className="whatsappIcon" />
                    Chat on WhatsApp
                  </a>
                )}
                <a className="btn" href="/privacy">Privacy</a>
              </div>
            </div>
          </div>
        </section>
        </RevealOnScroll>
      </main>

      <footer className="footer">
        <div className="container footerInner">
          <div>© {new Date().getFullYear()} Itinero</div>
          <div className="smallLinks">
            <a href="/privacy">Privacy</a>
            <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer">App Store</a>
            {WHATSAPP_URL && (
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="footerWhatsapp" aria-label="WhatsApp">
                <Image src="/whatsapp.svg" alt="" width={20} height={20} />
                WhatsApp
              </a>
            )}
          </div>
        </div>
      </footer>
    </>
  );
}
