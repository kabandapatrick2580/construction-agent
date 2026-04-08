import { setRequestLocale } from "next-intl/server";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import ProcessTimeline from "@/components/ProcessTimeline";
import ContactSection from "@/components/ContactSection";
import VideoSection from "@/components/VideoSection";
import Footer from "@/components/Footer";
import CookieConsentBanner from "@/components/CookieConsentBanner";
import JsonLd from "@/components/JsonLd";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <JsonLd />
      <Navbar locale={locale} />
      <main>
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <WhyChooseUs />
        <ProcessTimeline />
        <VideoSection />
        <ContactSection />
      </main>
      <Footer />
      <CookieConsentBanner />
    </>
  );
}
