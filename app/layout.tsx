import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Typhon - Premium Roofing & Steel Structure Solutions in South India",
  description:
    "Typhon specializes in space frames, PEB buildings, tensile roofing, sandwich panel systems, and steel fabrication across Kerala, Tamil Nadu, and Karnataka. High-quality, durable roofing and structural solutions built for generations.",
  alternates: {
    canonical: "http://typhon-web.vercel.app",
  },
  openGraph: {
    title:
      "Typhon - Premium Roofing & Steel Structure Solutions in South India",
    description:
      "Typhon specializes in space frames, PEB buildings, tensile roofing, sandwich panel systems, and steel fabrication across Kerala, Tamil Nadu, and Karnataka. High-quality, durable roofing and structural solutions built for generations.",
    url: "http://typhon-web.vercel.app",
    siteName: "Typhon",
    images: [
      {
        url: "/assets/common/home.webp",
        width: 1200,
        height: 630,
        alt: "Typhon - Premium Roofing & Steel Structure Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Typhon - Premium Roofing & Steel Structure Solutions in South India",
    description:
      "Typhon specializes in space frames, PEB buildings, tensile roofing, sandwich panel systems, and steel fabrication across Kerala, Tamil Nadu, and Karnataka. High-quality, durable roofing and structural solutions built for generations.",
    images: ["/assets/common/home.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-white">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Typhon - Built for Generations",
              description:
                "Typhon provides premium roofing and steel structure solutions including space frames, PEB buildings, tensile roofing, steel fabrication, and sandwich panel systems across Kerala, Tamil Nadu, and Karnataka.",
              url: "https://www.typhonstructures.com/",
              logo: "https://www.typhonstructures.com/logo.png",
              image: "https://www.typhonstructures.com/og-image.webp",
              areaServed: ["Kerala", "Tamil Nadu", "Karnataka"],
              sameAs: [
                "https://www.facebook.com/typhon",
                "https://www.instagram.com/typhon",
                "https://www.linkedin.com/company/typhon",
              ],
            }),
          }}
        />
      </head>
      <body className={`${montserrat.variable} antialiased`}>{children}</body>
    </html>
  );
}
