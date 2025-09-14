import { Card, CardContent } from "@/components/ui/card";
import brideImage from "@/assets/optimized/VHH_9850.jpg";
import groomImage from "@/assets/optimized/VHH_9946.jpg";
import backgroundImage from "@/assets/optimized/VHH_9921.jpg";
import { useTranslation } from "@/contexts/TranslationContext";

export const CoupleIntro = () => {
  const { t } = useTranslation();
  
  return (
    <section className="relative py-20">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-center bg-no-repeat bg-cover"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-black/75"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 !leading-[1.2]">
            {t('introduction')}
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Bride */}
          <Card className="max-h-[950px] shadow-elegant border-romantic/20 overflow-hidden group hover:shadow-romantic transition-all duration-300">
            <div className="relative aspect-[3/4] w-full">
              <img 
                src={brideImage} 
                alt="Sarah - The Bride" 
                loading="lazy"
                className="w-full object-contain"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-3xl font-bold mb-2">{t('brideName')}</h3>
                <p className="text-sm opacity-90">{t('bride')}</p>
              </div>
            </div>
            <CardContent className="p-6">
              <div className="space-y-4">
                <div>
                  <h5 className="font-semibold text-romantic mb-2 text-center whitespace-nowrap">Family</h5>
                                     <div className="text-sm space-y-1 text-center">
                     <p className="hidden sm:block whitespace-nowrap">{t('brideFamily')}</p>
                     <p 
                       className="block sm:hidden"
                       dangerouslySetInnerHTML={{ 
                         __html: t('brideFamily').replace(' & ', '<br />& ') 
                       }}
                     />
                   </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Groom */}
          <Card className="max-h-[950px] shadow-elegant border-romantic/20 overflow-hidden group hover:shadow-romantic transition-all duration-300">
            <div className="relative aspect-[3/4] w-full">
              <img
                src={groomImage} 
                alt="Michael - The Groom" 
                loading="lazy"
                className="w-full object-contain"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-3xl font-bold mb-2">{t('groomName')}</h3>
                <p className="text-sm opacity-90">{t('groom')}</p>
              </div>
            </div>
            <CardContent className="p-6">
              <div className="space-y-4">
                <div>
                  <h5 className="font-semibold text-romantic mb-2 text-center whitespace-nowrap">Family</h5>
                                     <div className="text-sm space-y-1 text-center">
                     <p className="hidden sm:block whitespace-nowrap">{t('groomFamily')}</p>
                     <p 
                       className="block sm:hidden"
                       dangerouslySetInnerHTML={{ 
                         __html: t('groomFamily').replace(' & ', '<br />& ') 
                       }}
                     />
                   </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Love Story Quote */}
        <div className="text-center mt-16 max-w-3xl mx-auto">
          <blockquote className="text-2xl italic text-white font-medium mb-4">
            "We may not have it all together. But together, we have it all."
          </blockquote>
          <p className="text-white/80">Truong & Nguyet</p>
        </div>
      </div>
    </section>
  );
};