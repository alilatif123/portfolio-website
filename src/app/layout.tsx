import "../styles/index.scss";
import ThemeProvider from "@/components/provider/ThemeProvider";
import { VideoProvider } from "@/provider/VideoProvider";
import type { Metadata } from "next";

import {
  Abril_Fatface,
  DM_Sans,
  EB_Garamond,
  Kufam,
  Poppins,
  Playfair_Display,
} from "next/font/google";

export const metadata: Metadata = {
  title: "Ali Latif - Full Stack Developer & Software Engineer",
  description: "Full Stack Developer specializing in Web & Mobile Apps, AI & Automation, Backend & Databases, and Payment & Cloud integrations. Building modern, scalable solutions.",
  keywords: "Full Stack Developer, Software Engineer, Web Development, Mobile Apps, AI Automation, Backend Development",
};

// all font configure
const abril = Abril_Fatface({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-abril",
});

const dmSans = DM_Sans({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

const garamond = EB_Garamond({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-garamond",
});

const kufam = Kufam({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-kufam",
});

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

const playfair = Playfair_Display({
  weight: ["400", "500", "600", "700", "900"],
  subsets: ["latin"],
  variable: "--font-playfair",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`
        ${abril.variable}
        ${dmSans.variable}
        ${garamond.variable}
        ${kufam.variable}
        ${poppins.variable}
        ${playfair.variable}
      `}
    >
      <body suppressHydrationWarning className="scroll-smooth">
        <ThemeProvider>
          <VideoProvider>{children}</VideoProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
