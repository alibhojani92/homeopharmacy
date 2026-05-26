import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Shri Sainath Homoeopathic Pharmacy",
  description: "Buy Homeopathic Medicines Online",

  openGraph: {
    title: "Shri Sainath Homoeopathic Pharmacy",
    description: "Buy Homeopathic Medicines Online",
    url: "https://homeopharmacy.aliraza-19d.workers.dev",
    siteName: "Shri Sainath Homoeopathic Pharmacy",
    images: [
      {
        url: "/opengraph-image.webp",
        width: 1200,
        height: 630,
        alt: "Shri Sainath Homoeopathic Pharmacy",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Shri Sainath Homoeopathic Pharmacy",
    description: "Buy Homeopathic Medicines Online",
    images: ["/opengraph-image.webp"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
