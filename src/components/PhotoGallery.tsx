import { useState, useCallback, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Heart } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { toast } from "sonner";
import { useTranslation } from "@/contexts/TranslationContext";
import { useRef } from "react";
import backgroundImage from "@/assets/optimized/VHH_8874A.jpg";
import useEmblaCarousel from 'embla-carousel-react';
import VHH_0034 from "@/assets/optimized/VHH_0034.jpg";
import VHH_0096 from "@/assets/optimized/VHH_0096.jpg";
import VHH_8560 from "@/assets/optimized/VHH_8560.jpg";
import VHH_8874 from "@/assets/optimized/VHH_8874.jpg";
import VHH_9215 from "@/assets/optimized/VHH_9215.jpg";
import VHH_9187 from "@/assets/optimized/VHH_9187.jpg";
import VHH_9366 from "@/assets/optimized/VHH_9366.jpg";
import VHH_9503 from "@/assets/optimized/VHH_9503.jpg";
import VHH_9746 from "@/assets/optimized/VHH_9746.jpg";
import VHH_9881 from "@/assets/optimized/VHH_9881.jpg";
import VHH_01 from "@/assets/optimized/VHH_01.jpg";
import VHH_02 from "@/assets/optimized/VHH_02.jpg";
import VHH_03 from "@/assets/optimized/VHH_03.jpg";
import VHH_04 from "@/assets/optimized/VHH_04.jpg";
import VHH_05 from "@/assets/optimized/VHH_05.jpg";
import VHH_06 from "@/assets/optimized/VHH_06.jpg";
import VHH_07 from "@/assets/optimized/VHH_07.jpg";
import VHH_08 from "@/assets/optimized/VHH_08.jpg";
import VHH_09 from "@/assets/optimized/VHH_09.jpg";
import VHH_10 from "@/assets/optimized/VHH_10.jpg";
import VHH_11 from "@/assets/optimized/VHH_11.jpg";
import VHH_12 from "@/assets/optimized/VHH_12.jpg";
import VHH_13 from "@/assets/optimized/VHH_13.jpg";
import VHH_14 from "@/assets/optimized/VHH_14.jpg";
import VHH_15 from "@/assets/optimized/VHH_15.jpg";
import VHH_16 from "@/assets/optimized/VHH_16.jpg";

export const PhotoGallery = () => {
  const { t } = useTranslation();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'center',
    containScroll: 'trimSnaps',
    slidesToScroll: 1,
    dragFree: true
  });
  
  const importedImages = [
    VHH_0034, VHH_0096, VHH_8560, VHH_8874, VHH_9215, VHH_9187, VHH_9366, VHH_9503, VHH_9746, VHH_9881,
    VHH_01, VHH_02, VHH_03, VHH_04, VHH_05, VHH_06, VHH_07, VHH_08, VHH_09, VHH_10, VHH_11, VHH_12, VHH_13, VHH_14, VHH_15, VHH_16
  ];
  const galleryImages = importedImages.map((img, index) => ({
    src: img,
    alt: `Photo ${index + 1}`,
    category: "gallery"
  }));

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  // Listen for slide changes
  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCurrentSlide(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, onSelect]);



  return (
         <section id="gallery" className="relative py-16 mt-8">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-center bg-no-repeat bg-cover"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-black/75"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight py-2 min-h-[3rem] md:min-h-[4rem]">
            {t('ourMemories')}
          </h2>
        </div>

                          {/* Main Gallery */}
         <div className="max-w-7xl mx-auto relative px-4 sm:px-8 md:px-16">
           <div className="embla overflow-visible" ref={emblaRef}>
                            <div className="embla__container flex items-start pt-8 sm:pt-16 pb-4 sm:pb-8">
                 {galleryImages.map((image, index) => (
                   <div
                     key={index}
                     className="embla__slide flex-[0_0_85%] sm:flex-[0_0_60%] md:flex-[0_0_50%] min-w-0 pl-2 sm:pl-4 pr-2 sm:pr-4 -ml-4 sm:-ml-8 md:-ml-16"
                   >
                                       <div
                                            className={`aspect-[4/5] overflow-hidden rounded-lg shadow-lg transition-all duration-500 group relative bg-transparent ${
                        index === currentSlide 
                          ? 'transform scale-100 opacity-100 sm:cursor-default cursor-pointer hover:shadow-xl z-30' 
                          : index === (currentSlide + 1) % galleryImages.length
                          ? 'transform scale-75 sm:scale-75 opacity-40 -z-10 translate-x-4 sm:translate-x-8'
                          : index === (currentSlide - 1 + galleryImages.length) % galleryImages.length
                          ? 'transform scale-75 sm:scale-75 opacity-40 -z-10 -translate-x-4 sm:-translate-x-8'
                          : 'transform scale-50 sm:scale-50 opacity-20 -z-20'
                      }`}
                      onClick={() => index === currentSlide && window.innerWidth < 640 && setSelectedImage(image.src)}
                   >
                     <img
                       src={image.src}
                       alt={image.alt}
                       loading="lazy"
                       className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                     />
                     
                   </div>
                 </div>
               ))}
             </div>
           </div>
           
           {/* Navigation Buttons */}
           <Button
             variant="outline"
             size="icon"
             className="absolute left-1 sm:left-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full shadow-lg z-20 h-8 w-8 sm:h-10 sm:w-10"
             onClick={scrollPrev}
           >
             <ChevronLeft className="h-3 w-3 sm:h-4 sm:w-4" />
           </Button>
           
           <Button
             variant="outline"
             size="icon"
             className="absolute right-1 sm:right-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full shadow-lg z-20 h-8 w-8 sm:h-10 sm:w-10"
             onClick={scrollNext}
           >
             <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4" />
           </Button>
         </div>
        {/* Image Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
                                                   <div className="relative max-w-2xl max-h-[80vh] sm:max-w-4xl">
                             <img
                 src={selectedImage}
                 alt="Selected"
                 loading="lazy"
                 className="w-full h-full object-contain rounded-lg shadow-2xl"
               />
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-2 right-2 bg-black/50 text-white hover:bg-black/70"
                onClick={() => setSelectedImage(null)}
              >
                <ChevronRight className="h-6 w-6 rotate-45" />
              </Button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};