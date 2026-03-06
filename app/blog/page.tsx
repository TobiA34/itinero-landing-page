import type { Metadata } from "next";
import Link from "next/link";
import { BackButton } from "../components/BackButton";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://itinero.app";
const APP_STORE_URL = "https://apps.apple.com/us/app/itinero/id6757012086";

export const metadata: Metadata = {
  title: "Travel Itinerary Planner App Guide – How to Plan Better Trips with Itinero",
  description:
    "Learn how to plan a travel itinerary step by step using the Itinero travel itinerary planner app. Tips for building day-by-day trips, avoiding stress, and staying organised.",
  keywords: [
    "travel itinerary planner app",
    "itinerary planner app",
    "trip planner app",
    "travel planning app",
    "holiday planner app",
    "day by day trip planner",
    "how to plan a trip",
    "Itinero app"
  ],
  alternates: {
    canonical: "/blog"
  },
  openGraph: {
    type: "article",
    url: SITE_URL + "/blog",
    title: "Travel Itinerary Planner App Guide – Plan Better Trips with Itinero",
    description:
      "A practical guide to planning your next trip using the Itinero travel itinerary planner app. Learn how to build clear, flexible day-by-day plans.",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Itinero – Travel itinerary planner app"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Travel Itinerary Planner App Guide – Plan Better Trips with Itinero",
    description:
      "Learn how to plan better trips with the Itinero travel itinerary planner app.",
    images: ["/og.png"]
  }
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Travel Itinerary Planner App Guide – How to Plan Better Trips with Itinero",
  description:
    "A step-by-step guide to planning stress-free trips using the Itinero travel itinerary planner app, including how to build day-by-day itineraries.",
  image: SITE_URL + "/og.png",
  datePublished: "2025-03-01",
  dateModified: "2025-03-01",
  author: {
    "@type": "Person",
    name: "Tobi Adegoroye"
  },
  publisher: {
    "@type": "Organization",
    name: "Itinero",
    logo: {
      "@type": "ImageObject",
      url: SITE_URL + "/logo.png"
    }
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": SITE_URL + "/blog"
  }
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Itinero – Travel itinerary planner app",
      "item": SITE_URL + "/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Travel itinerary planner app guide",
      "item": SITE_URL + "/blog"
    }
  ]
};

export default function BlogPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <main className="section" style={{ paddingTop: 56 }}>
        <div className="container" style={{ maxWidth: 760 }}>
          <div style={{ marginBottom: 24 }}>
            <BackButton />
          </div>
          <p className="badge" style={{ marginBottom: 16 }}>
            Itinero blog • Travel itinerary planner tips
          </p>
          <h1 className="h1" style={{ fontSize: "clamp(32px, 3.3vw, 46px)" }}>
            How to plan a stress‑free trip with a travel itinerary planner app
          </h1>
          <p className="sub" style={{ marginBottom: 28 }}>
            If you{" "}
            <strong>plan trips using screenshots, notes apps and random links</strong>,
            it works until you actually land at your destination. In this guide we’ll
            show you how to use a{" "}
            <strong>travel itinerary planner app</strong> like Itinero to keep
            everything in one simple, day‑by‑day plan.
          </p>

          <p className="sub" style={{ marginBottom: 28 }}>
            The examples below use the <strong>Itinero itinerary planner app</strong>,
            but the ideas apply to any <strong>trip planner app</strong> you use.
          </p>

          <h2 className="h2">Why use a travel itinerary planner app at all?</h2>
          <p className="sub">
            A dedicated <strong>travel planning app</strong> gives you three big
            advantages over spreadsheets and notes:
          </p>
          <ul className="sub" style={{ paddingLeft: 20, marginBottom: 28 }}>
            <li>
              <strong>Everything in one place</strong> – flights, hotel details,
              activities and notes are grouped by day in a single itinerary.
            </li>
            <li>
              <strong>Clear time‑based schedule</strong> – you can see what’s
              happening in the morning, afternoon and evening at a glance.
            </li>
            <li>
              <strong>Easy changes on the go</strong> – good itinerary apps let you
              reorder, edit or delete plans in seconds when real life happens.
            </li>
          </ul>

          <h2 className="h2">Step 1 – Define the shape of your trip</h2>
          <p className="sub">
            Before you touch any <strong>itinerary planner app</strong>, answer three
            quick questions:
          </p>
          <ol className="sub" style={{ paddingLeft: 20, marginBottom: 28 }}>
            <li>How many days are you away for?</li>
            <li>What’s the main goal of the trip (football, food, culture, reset)?</li>
            <li>How busy do you actually want each day to feel?</li>
          </ol>
          <p className="sub" style={{ marginBottom: 28 }}>
            In Itinero, this becomes a single trip with named days. Instead of a long
            list of “things to do”, you get a <strong>day‑by‑day trip planner</strong>{" "}
            that matches your energy and time.
          </p>

          <h2 className="h2">Step 2 – Add the non‑negotiables first</h2>
          <p className="sub">
            Good <strong>holiday planner apps</strong> help you anchor the important
            pieces of your itinerary:
          </p>
          <ul className="sub" style={{ paddingLeft: 20, marginBottom: 28 }}>
            <li>Match tickets or event times.</li>
            <li>Restaurant reservations you’ve already booked.</li>
            <li>Check‑in / check‑out windows and flights or trains.</li>
          </ul>
          <p className="sub" style={{ marginBottom: 28 }}>
            In Itinero you can add these as fixed‑time activities on the right days.
            Your <strong>travel itinerary planner</strong> becomes a realistic picture
            of what’s locked in and what is flexible.
          </p>

          <h2 className="h2">Step 3 – Fill the gaps with flexible ideas</h2>
          <p className="sub">
            Once the anchors are in place, use your{" "}
            <strong>trip planner app</strong> to drop in ideas for:
          </p>
          <ul className="sub" style={{ paddingLeft: 20, marginBottom: 28 }}>
            <li>Cafés and food spots you’d like to try.</li>
            <li>Museums, stadium tours and attractions.</li>
            <li>Neighbourhoods you simply want to walk around.</li>
          </ul>
          <p className="sub" style={{ marginBottom: 28 }}>
            The key is to avoid over‑scheduling. A good{" "}
            <strong>travel itinerary planner app</strong> like Itinero makes it easy
            to keep one or two anchor activities per day and leave breathing room
            around them.
          </p>

          <h2 className="h2">Step 4 – Keep money and time in one view</h2>
          <p className="sub">
            Many people plan visually but forget to plan by budget and time. When you
            use an <strong>itinerary planner app</strong>:
          </p>
          <ul className="sub" style={{ paddingLeft: 20, marginBottom: 28 }}>
            <li>
              Store ticket prices and booking references inside the itinerary items.
            </li>
            <li>
              Use a single <strong>currency setting</strong> so everything is shown
              consistently.
            </li>
          </ul>
          <p className="sub" style={{ marginBottom: 28 }}>
            Itinero’s settings screen lets you pick a base currency so all of your
            example prices and notes feel coherent. This sounds small, but it keeps
            your <strong>trip planning app</strong> easy to scan when you’re tired or
            jet‑lagged.
          </p>

          <h2 className="h2">Step 5 – Make it easy to change your mind</h2>
          <p className="sub">
            The best <strong>travel planning apps</strong> are built for changes:
          </p>
          <ul className="sub" style={{ paddingLeft: 20, marginBottom: 28 }}>
            <li>Drag items up or down if the order of the day changes.</li>
            <li>Move an activity to a different day instead of rewriting it.</li>
            <li>Keep “maybe” ideas in the itinerary but mark them as flexible.</li>
          </ul>
          <p className="sub" style={{ marginBottom: 28 }}>
            With Itinero you can quickly edit times and notes so your{" "}
            <strong>day by day trip planner</strong> always matches reality instead of
            staying frozen like a static document.
          </p>

          <h2 className="h2">Step 6 – Keep everything accessible on your phone</h2>
          <p className="sub" style={{ marginBottom: 28 }}>
            A <strong>travel itinerary planner app</strong> works best when it’s easy
            to open in seconds – on the train, in a taxi or outside a stadium. That’s
            why Itinero focuses on a clean, Apple‑style interface with large text,
            clear times and a simple structure.
          </p>

          <h2 className="h2">Why Itinero is built this way</h2>
          <p className="sub" style={{ marginBottom: 28 }}>
            Itinero is designed for real travellers – solo trips, couples weekends,
            football away days and longer breaks. Instead of trying to do everything,
            it specialises in being a simple, reliable{" "}
            <strong>itinerary planner app</strong>:
          </p>
          <ul className="sub" style={{ paddingLeft: 20, marginBottom: 28 }}>
            <li>Day‑by‑day layout that feels like your calendar.</li>
            <li>Fast editing so you can adjust plans mid‑trip.</li>
            <li>Private by default – no public social feed or noise.</li>
          </ul>

          <div className="card" style={{ marginTop: 32, borderRadius: 22 }}>
            <h2 className="h2" style={{ marginTop: 0 }}>
              Try the Itinero itinerary planner app
            </h2>
            <p className="sub" style={{ marginBottom: 16 }}>
              If you want a clean, focused{" "}
              <strong>travel itinerary planner app</strong> that keeps your trips
              organised without the chaos, Itinero is built for you.
            </p>
            <div className="ctaRow">
              <a className="btn btnPrimary" href={APP_STORE_URL} target="_blank" rel="noreferrer">
                Download Itinero on the App Store
              </a>
              <Link className="btn btnGhost" href="/">
                Back to landing page
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

