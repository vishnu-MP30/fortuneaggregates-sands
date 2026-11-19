import type { Metadata } from "next";
import { Montserrat, Quicksand } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://fortuneaggregatesands.com"),
  title: "Fortune Aggregates and Sands | Aggregates & M-Sand in Mangaluru",
  description:
    "Strength You Can Build On. IS 383 graded blue metal, washed M-Sand, chips and GSB in Mangaluru, Karnataka. Quarried, crushed and screened in-house.",
  icons: {
    icon: "/brand/icon-badge.png",
    apple: "/brand/icon-badge.png",
  },
  openGraph: {
    title: "Fortune Aggregates and Sands | Strength You Can Build On",
    description:
      "IS 383 graded blue metal, washed M-Sand, chips and GSB in Mangaluru, Karnataka. Quarried, crushed and screened in-house.",
    url: "https://fortuneaggregatesands.com",
    siteName: "Fortune Aggregates and Sands",
    images: [
      {
        url: "/brand/icon-badge.png",
        width: 512,
        height: 512,
        alt: "Fortune Aggregates and Sands Seal",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Fortune Aggregates and Sands",
  telephone: "+91 84228 19302",
  email: "fortuneaggregatesands@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Sashtav Rd, Yedapadavu",
    addressLocality: "Mangaluru",
    addressRegion: "Karnataka",
    postalCode: "574144",
    addressCountry: "IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-IN"
      data-theme="light"
      className={`${montserrat.variable} ${quicksand.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col overflow-x-hidden [font-family:var(--font-body)] bg-[var(--bg-base)] text-[var(--text-body)]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                function removeNetlifyBadge() {
                  var sel = '#nl-badge-frame, iframe#nl-badge-frame, #netlify-badge, [id*="netlify-badge"], .netlify-badge, [class*="netlify-badge"], #netlify-drawer, netlify-drawer, #netlify-drawer-frame, iframe[name="netlify-drawer-frame"], iframe[id*="netlify-drawer"], [data-netlify-deploy-id], [data-netlify-drawer]';
                  var els = document.querySelectorAll(sel);
                  for (var i = 0; i < els.length; i++) {
                    els[i].remove();
                  }
                }
                if (typeof document !== 'undefined') {
                  document.addEventListener('DOMContentLoaded', removeNetlifyBadge);
                  if (window.MutationObserver) {
                    var observer = new MutationObserver(removeNetlifyBadge);
                    observer.observe(document.documentElement, { childList: true, subtree: true });
                  }
                }
              })();
            `,
          }}
        />
        {children}
      </body>
    </html>
  );
}
