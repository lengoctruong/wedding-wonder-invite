import { HeroSection } from "@/components/HeroSection";
import { CountdownTimer } from "@/components/CountdownTimer";
import { CoupleIntro } from "@/components/CoupleIntro";
import { WeddingCalendar } from "@/components/WeddingCalendar";
import { PhotoGallery } from "@/components/PhotoGallery";
import { VenueSection } from "@/components/VenueSection";
import { RSVPForm } from "@/components/RSVPForm";
import { WishesSection } from "@/components/WishesSection";
import { ThankYouSection } from "@/components/ThankYouSection";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { GlobalFloatingElements } from "@/components/GlobalFloatingElements";
import { FireworksEffect } from "@/components/FireworksEffect";

const Index = () => {
  return (
    <div className="min-h-screen">
      <GlobalFloatingElements />
      <FireworksEffect />
      <LanguageSwitcher />
      <HeroSection />
      <CountdownTimer />
      <CoupleIntro />
      <WeddingCalendar />
      <PhotoGallery />
      <VenueSection />
      <RSVPForm />
      <WishesSection />
      <ThankYouSection />
    </div>
  );
};

export default Index;
