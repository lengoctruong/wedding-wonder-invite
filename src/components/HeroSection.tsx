import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Clock } from "lucide-react";
import { FloatingElements } from "./FloatingElements";
import { useTranslation } from "@/contexts/TranslationContext";
import HeroImage from "./HeroImage";

export const HeroSection = () => {
  const { t } = useTranslation();
  
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <HeroImage />
        <div className="absolute inset-0 bg-black/20"></div>
      </div>
      
      {/* Floating Elements */}
      <FloatingElements />
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 max-w-4xl mx-auto py-8 sm:py-0">
        {/* Save the Date */}
        <div className="animate-fade-in-up mb-1 sm:mb-8">
          <p className="text-base sm:text-lg md:text-xl font-light tracking-wider mb-1 sm:mb-4 opacity-90">
            {t('saveTheDate')}
          </p>
          
          {/* Names */}
          <div className="flex justify-center mb-4 sm:mb-6">
            <h1 className="font-alex-brush text-2xl sm:text-4xl md:text-6xl lg:text-8xl xl:text-11xl leading-tight text-center break-words md:whitespace-nowrap">
              Ngọc Trường & Như Nguyệt
            </h1>
          </div>
          
          {/* Date */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 mb-6 sm:mb-8 border border-white/20">
            <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light mb-1 sm:mb-2">
              {t('wednesday')}
            </div>
            <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-allura">
              08
            </div>
            <div className="text-lg sm:text-xl md:text-2xl">
              <span className="text-lg sm:text-xl md:text-2xl">{t('october')}</span> <span className="text-xl sm:text-2xl md:text-3xl">2025</span>
            </div>
            <div className="text-base sm:text-lg md:text-xl mt-1 sm:mt-4 font-light">
              <span className="text-lg sm:text-xl md:text-2xl">11:00</span> <span className="text-base sm:text-lg md:text-xl">AM</span>
            </div>
          </div>
          
          {/* Venue */}
          <div className="mb-1 sm:mb-8">
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-1 sm:mb-2">
              {t('weddingCeremony')}
            </h3>
            <p className="text-base sm:text-lg opacity-90">
              {t('venue')}
            </p>
            <p className="text-sm sm:text-base opacity-80">
              {t('address')}
            </p>
          </div>
          
          {/* Action Buttons - Reordered */}
          <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center">
            <Button 
              variant="outline" 
              size="lg"
              className="bg-transparent border-white/40 text-white hover:bg-white/20 text-sm sm:text-base"
              onClick={() => scrollToSection('countdown')}
            >
              <Clock className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
              {t('countdown')}
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="bg-transparent border-white/40 text-white hover:bg-white/20 text-sm sm:text-base"
              onClick={() => scrollToSection('venue')}
            >
              <MapPin className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
              {t('viewVenue')}
            </Button>
            <Button 
              variant="secondary" 
              size="lg" 
              className="bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30 text-sm sm:text-base"
              onClick={() => scrollToSection('rsvp')}
            >
              <Calendar className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
              {t('rsvp')}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-0 sm:bottom-8 left-1/2 transform -translate-x-1/2 text-white">
        <div className="animate-bounce-gentle">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};