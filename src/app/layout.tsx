import type { Metadata } from "next";
import { Noto_Serif, Plus_Jakarta_Sans } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

const notoSerif = Noto_Serif({
  subsets: ["latin"],
  variable: "--font-noto-serif",
  style: ["normal", "italic"],
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Tend Postpartum Care | Seattle, WA",
    template: "%s | Tend Postpartum Care",
  },
  description:
    "Postpartum doula care in Seattle, WA—practical and emotional support for early motherhood.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${notoSerif.variable} ${plusJakarta.variable} h-full scroll-smooth antialiased`}
    >
      <body className="selection:bg-secondary-container min-h-full font-(family-name:--font-plus-jakarta)">
        <SiteHeader />
        <div className="pt-24 md:pt-28">{children}</div>
        <SiteFooter />
      </body>
    </html>
  );
}
