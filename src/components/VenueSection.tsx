import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock, Car, Utensils } from "lucide-react";
import venueImage from "@/assets/optimized/VHH_9803_text.jpg";
import { useTranslation } from "@/contexts/TranslationContext";

export const VenueSection = () => {
  const { t } = useTranslation();
  
  const openMap = () => {
    window.open('https://www.google.com/maps/place/Nh%C3%A0+h%C3%A0ng+ti%E1%BB%87c+c%C6%B0%E1%BB%9Bi+sao+mai/@11.1594903,107.2606274,17z/data=!3m1!4b1!4m6!3m5!1s0x3174f52cd3fcf547:0x2a2effd6c8aa3bf9!8m2!3d11.1594903!4d107.2632023!16s%2Fg%2F11strd501g?entry=ttu&g_ep=EgoyMDI1MDcyNy4wIKXMDSoASAFQAw%3D%3D', '_blank');
  };

  return (
    <section id="venue" className="py-20 bg-gradient-to-br from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4 leading-tight py-2 min-h-[3rem] md:min-h-[4rem]">
            {t('venueTitle')}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t('venueSubtitle')}
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Venue Image */}
            <div className="rounded-lg overflow-hidden">
              <img 
                src={venueImage} 
                alt="Wedding Venue - Grand Ballroom" 
                className="w-full h-auto object-contain block"
              />
            </div>
            
            {/* Venue Details */}
            <div className="space-y-6">
              <div>
                <h3 className="text-3xl font-bold text-romantic mb-4">
                  {t('venue')}
                </h3>
                <p className="text-lg text-muted-foreground mb-6">
                  {t('venueSubtitle')}
                </p>
              </div>
              
              {/* Venue Information */}
              <Card className="shadow-elegant border-romantic/20">
                <CardContent className="p-6 space-y-5">
                  <div className="flex items-start gap-4">
                    <MapPin className="h-6 w-6 text-romantic mt-1" />
                    <div>
                      <h4 className="font-semibold text-romantic text-lg">{t('addressLabel')}</h4>
                      <p className="text-muted-foreground text-base">
                        {t('venue')}<br />
                        {t('address')}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <Phone className="h-6 w-6 text-romantic mt-1" />
                    <div>
                      <h4 className="font-semibold text-romantic text-lg">{t('contact')}</h4>
                      <p className="text-muted-foreground text-base">
                        {t('contactInfo')} (+84) 969-313-528<br />
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <Clock className="h-6 w-6 text-romantic mt-1" />
                    <div>
                      <h4 className="font-semibold text-romantic text-lg">{t('schedule')}</h4>
                      <p className="text-muted-foreground text-base">
                        {t('weddingCeremony')}: 9:00 AM<br />
                        {t('reception')}: 11:00 AM
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/*/!* Practical Information *!/*/}
              {/*<div className="grid md:grid-cols-2 gap-4">*/}
              {/*  <Card className="border-romantic/20">*/}
              {/*    <CardContent className="p-4">*/}
              {/*      <div className="flex items-center gap-2 mb-2">*/}
              {/*        <Car className="h-4 w-4 text-romantic" />*/}
              {/*        <h4 className="font-semibold text-romantic">{t('parking')}</h4>*/}
              {/*      </div>*/}
              {/*      <p className="text-sm text-muted-foreground">*/}
              {/*        {t('parkingInfo')}*/}
              {/*      </p>*/}
              {/*    </CardContent>*/}
              {/*  </Card>*/}
              {/*  */}
              {/*  <Card className="border-romantic/20">*/}
              {/*    <CardContent className="p-4">*/}
              {/*      <div className="flex items-center gap-2 mb-2">*/}
              {/*        <Utensils className="h-4 w-4 text-romantic" />*/}
              {/*        <h4 className="font-semibold text-romantic">{t('catering')}</h4>*/}
              {/*      </div>*/}
              {/*      <p className="text-sm text-muted-foreground">*/}
              {/*        {t('cateringInfo')}*/}
              {/*      </p>*/}
              {/*    </CardContent>*/}
              {/*  </Card>*/}
              {/*</div>*/}
              
              {/* Mini Map */}
              <Card className="shadow-elegant border-romantic/20 overflow-hidden">
                <CardContent className="p-0">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3855.596045631053!2d108.94206310297025!3d14.903849713492463!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3168f985174882e9%3A0x36dea74df5e025e3!2zTmjDoCB2xINuIGjDs2EgdGjDtG4gSOG7mWkgQW4gMQ!5e0!3m2!1svi!2s!4v1757773366076!5m2!1svi!2s"
                    width="100%"
                    height="320"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Wedding Venue Location"
                    className="w-full h-80"
                  />
                </CardContent>
              </Card>
              
              {/* Map Button */}
              <Button 
                onClick={openMap}
                className="w-full bg-romantic hover:bg-romantic/90 text-white py-3"
              >
                <MapPin className="mr-2 h-5 w-5" />
                {t('getDirections')}
              </Button>
            </div>
          </div>
          
          {/* Additional Information */}
          {/*<Card className="mt-12 bg-romantic/5 border-romantic/30">*/}
          {/*  <CardContent className="p-8 text-center">*/}
          {/*    <h3 className="text-2xl font-bold text-romantic mb-4">*/}
          {/*      Transportation & Accommodation*/}
          {/*    </h3>*/}
          {/*    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">*/}
          {/*      <div>*/}
          {/*        <h4 className="font-semibold text-romantic mb-2">Hotel Accommodation</h4>*/}
          {/*        <p className="text-muted-foreground">*/}
          {/*          Special rates available for wedding guests. Contact the hotel directly */}
          {/*          and mention the "Smith-Johnson Wedding" for discounted rates.*/}
          {/*        </p>*/}
          {/*      </div>*/}
          {/*      <div>*/}
          {/*        <h4 className="font-semibold text-romantic mb-2">Transportation</h4>*/}
          {/*        <p className="text-muted-foreground">*/}
          {/*          The venue is easily accessible by car or taxi. */}
          {/*          We recommend rideshare services for your convenience.*/}
          {/*        </p>*/}
          {/*      </div>*/}
          {/*    </div>*/}
          {/*  </CardContent>*/}
          {/*</Card>*/}
        </div>
      </div>
    </section>
  );
};