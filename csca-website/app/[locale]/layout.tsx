import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { getMessages, setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import "../globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "CSCA Ltd | Construction Supply & Commission Agent",
    template: "%s | CSCA Ltd",
  },
  description:
    "Construction Supply and Commission Agent Ltd — trusted real estate, construction supply, car rental and leasing services in Kigali, Rwanda.",
  keywords: [
    "real estate Rwanda",
    "construction Kigali",
    "car rental Kigali",
    "property Rwanda",
    "CSCA Ltd",
    "construction supply Rwanda",
    "commission agent Rwanda",
    "Kigali real estate",
    "Rwanda construction services",
    "Kigali car rental",
    "Rwanda property management",
    "Kugura inzu mu Rwanda",
    "Kugura ubutaka mu Rwanda",
    "Kugura imodoka mu Rwanda",
    "Kugura ibikoresho by'ubwubatsi mu Rwanda",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "CSCA Ltd",
    title: "CSCA Ltd | Construction Supply & Commission Agent",
    description:
      "Trusted real estate, construction, car rental and leasing services in Kigali, Rwanda.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  setRequestLocale(locale);

  const messages = await getMessages();
  const isRTL = locale === "ar";

  return (
    <html
      lang={locale}
      dir={isRTL ? "rtl" : "ltr"}
      className={`${manrope.variable} ${inter.variable}`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-screen bg-white text-[#1a1c1c] font-body antialiased">
        <NextIntlClientProvider messages={messages} locale={locale}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
