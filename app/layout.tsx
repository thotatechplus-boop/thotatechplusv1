import "./../styles/globals.css";
import type { Metadata } from "next";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.thotatechplus.com"),
  title: "THOTATECH+ Software Private Limited — AI, E‑Commerce, Cloud",
  description: "Bangalore-based studio building AI-enabled, cloud-native and headless e‑commerce solutions.",
  icons: { icon: "/favicon.png" },
  openGraph: {
    title: "THOTATECH+ Software",
    description: "AI-first commerce engineering studio in Bangalore.",
    images: ["/og.png"],
    type: "website",
    url: "https://www.thotatechplus.com"
  },
  twitter: {
    card: "summary_large_image",
    title: "THOTATECH+ Software",
    description: "AI-first commerce engineering studio in Bangalore.",
    images: ["/og.png"]
  }
};

function Analytics() {
  const id = process.env.NEXT_PUBLIC_GA_ID;
  if (!id) return null;
  return (
    <>
      {/* Google Analytics 4 */}
      <script async src={`https://www.googletagmanager.com/gtag/js?id=${id}`}></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date()); gtag('config', '${id}');`,
        }}
      />
    </>
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const ld = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "THOTATECH+ Software Private Limited",
    "url": "https://www.thotatechplus.com",
    "logo": "https://www.thotatechplus.com/logo.png",
    "sameAs": [
      "https://linkedin.com/company/thotatechplus",
      "https://facebook.com/thotatechplus",
      "https://twitter.com/thotatechplus"
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "103, 4th Cross, Ayyappa Layout, Munne Kolla, Marathahalli",
      "addressLocality": "Bangalore",
      "postalCode": "560037",
      "addressCountry": "IN"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer support",
      "email": "operations@thotatechplus.com",
      "telephone": "+919886187188"
    }
  };
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
        <Analytics />
      </body>
    </html>
  );
}
