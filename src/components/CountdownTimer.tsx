import { useState, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { useTranslation } from "@/contexts/TranslationContext";

export const CountdownTimer = () => {
  const { t } = useTranslation();
  const weddingDate = new Date('2025-10-08T11:00:00');
  
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  
  const [isWeddingDay, setIsWeddingDay] = useState(false);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = weddingDate.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      } else {
        // Wedding day has arrived!
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0
        });
        setIsWeddingDay(true);
        
        // Start fireworks effect
        if (typeof window !== 'undefined' && (window as any).startFireworks) {
          (window as any).startFireworks();
        }
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    { label: t('days'), value: timeLeft.days },
    { label: t('hours'), value: timeLeft.hours },
    { label: t('minutes'), value: timeLeft.minutes },
    { label: t('seconds'), value: timeLeft.seconds }
  ];

  return (
    <section id="countdown" className="py-8 sm:py-20 bg-gradient-to-br from-background to-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4 leading-tight py-2 min-h-[3rem] md:min-h-[4rem]">
            {isWeddingDay ? t('countdownTitleDDay') : t('countdownTitle')}
          </h2>
          <p className="text-lg text-muted-foreground">
            {isWeddingDay ? t('countdownDDay') : t('countdownSubtitle')}
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {timeUnits.map((unit, index) => (
            <Card key={unit.label} className={`shadow-elegant animate-fade-in-up border-romantic/20 ${isWeddingDay ? 'animate-bounce-celebration' : ''}`} style={{ animationDelay: `${index * 0.1}s` }}>
              <CardContent className="p-6 text-center">
                <div className={`text-4xl md:text-5xl font-bold text-romantic mb-2 ${isWeddingDay ? 'animate-pulse text-yellow-500' : 'animate-pulse-romantic'}`}>
                  {unit.value.toString().padStart(2, '0')}
                </div>
                <div className="text-sm md:text-base text-muted-foreground font-medium">
                  {unit.label}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-8 sm:mt-12">
          <p className="text-xl italic text-romantic font-medium">
            {isWeddingDay ? "💕 Today is the beginning of forever! 💕" : '"The best is yet to come"'}
          </p>
        </div>
      </div>
    </section>
  );
};