import "./globals.css";
import type { Metadata } from "next";

const APP_NAME = "Itinero";
const APP_STORE_URL = "https://apps.apple.com/us/app/itinero/id6757012086";
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://itinero.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Itinero – Travel Itinerary Planner App for iPhone",
    template: "%s | Itinero"
  },
  description:
    "Itinero is a travel itinerary planner app for iPhone that helps you create, organise and edit day-by-day trips in seconds. A minimalist trip planner app for real travellers.",
  keywords: [
    "travel itinerary planner",
    "itinerary planner app",
    "trip planner app",
    "travel planning app",
    "holiday planner app",
    "day by day trip planner",
    "Itinero"
  ],
  applicationName: APP_NAME,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: SITE_URL + "/",
    title: "Itinero – Travel Itinerary Planner App for iPhone",
    description:
      "Itinero is a travel itinerary planner app that lets you create, organise and edit day-by-day trips in seconds, with a minimal, clean interface.",
    siteName: APP_NAME,
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Itinero – Travel itinerary planner app" }],
    locale: "en_GB"
  },
  twitter: {
    card: "summary_large_image",
    title: "Itinero – Travel Itinerary Planner App for iPhone",
    description:
      "Use Itinero, a travel itinerary planner app, to build a clean, day-by-day trip plan in seconds.",
    images: ["/og.png"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1
    }
  },
  other: {
    "apple-itunes-app": "app-id=6757012086, app-argument=" + APP_STORE_URL
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.png" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,600;0,9..40,700;1,9..40,400&display=swap" rel="stylesheet" />
      </head>
      <body>
        <a href="#main-content" className="skipLink">Skip to main content</a>
        {children}
      </body>
    </html>
  );
}
