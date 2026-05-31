import { AboutSection, TickerSection } from "@/components/sections/about-ticker";
import { BookingSection } from "@/components/sections/booking-section";
import { HeroSection, MainNav } from "@/components/sections/hero-nav";
import { FooterSection, LocationSection } from "@/components/sections/location-footer";
import { GallerySection, ServicesSection } from "@/components/sections/services-gallery";

export default function Home() {
  return (
    <>
      <MainNav />
      <HeroSection />
      <TickerSection />
      <AboutSection />
      <ServicesSection />
      <GallerySection />
      <BookingSection />
      <LocationSection />
      <FooterSection />
    </>
  );
}
