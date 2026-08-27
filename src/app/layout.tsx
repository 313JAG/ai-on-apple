import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aionapple.com"),
  title: "AI on Apple — Community for AI on Apple Platforms",
  description:
    "Exploring AI on Apple platforms. For builders, professionals, educators and enterprise leaders across Australia and New Zealand.",
  openGraph: {
    title: "AI on Apple",
    description:
      "Exploring AI on Apple platforms. For builders, professionals, educators and enterprise leaders across Australia and New Zealand.",
    images: [{ url: "/brand/cover.png", width: 6016, height: 4147, alt: "AI on Apple" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI on Apple",
    description:
      "Exploring AI on Apple platforms. For builders, professionals, educators and enterprise leaders across Australia and New Zealand.",
    images: ["/brand/cover.png"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} h-full scroll-smooth antialiased`}>
      <body className="min-h-full bg-[#fafafa] font-sans text-[#1d1d1f]">
        {children}
      </body>
    </html>
  );
}
