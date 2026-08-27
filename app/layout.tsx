import type { Metadata } from "next";
import "./paper.css";

export const metadata: Metadata = {
  title: "INERATE Research — Advancing AI Systems & Capability Microkernels",
  description: "Official research publication portal for INERATE. Featuring client-side capability microkernels, deterministic prompt caching economics, and autonomous agent architectures.",
  icons: {
    icon: "/assets/research-mark.svg",
    apple: "/assets/research-mark.svg",
  },
  openGraph: {
    title: "acri: A Client-Side Capability Resolver for Tool-Augmented Language Models",
    description: "40µs in-memory capability resolution microkernel. Cuts prompt tokens by 95%, boosts Gemini 2.5 Flash accuracy from 84% to 92%.",
    url: "https://research.inerate.com",
    siteName: "INERATE Research",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "INERATE Research — Capability Microkernels for AI Agents",
    description: "40µs client-side tool resolution for LLMs without native tool search.",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700;800&family=Newsreader:ital,opsz,wght@0,6..72,300..800;1,6..72,300..800&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
