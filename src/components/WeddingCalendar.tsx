import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Clock, Heart } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "@/contexts/TranslationContext";

export const WeddingCalendar = () => {
  const { t } = useTranslation();
  const weddingDate = new Date('2025-10-08');
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(weddingDate);

  const events = [
    {
      date: '2025-10-08',
      title: t('rehearsalDinner'),
      time: '5:00 PM 07-10-2025',
      location: t('groomHouse'),
      icon: <Heart className="h-4 w-4" />
    },
    {
      date: '2025-10-08',
      title: t('weddingCeremony'),
      time: '9:00 AM 08-10-2025',
      location: t('groomHouse'),
      icon: <Heart className="h-4 w-4 text-romantic" />
    },
    {
      date: '2025-10-08',
      title: t('reception'),
      time: '11:00 AM 08-10-2025',
      location: t('venue'),
      icon: <Heart className="h-4 w-4" />
    }
  ];

  return (
    <section id="calendar" className="py-4 sm:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-4 sm:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4 !leading-[1.2]">
            {t('weddingSchedule')}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t('scheduleSubtitle')}
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Calendar */}
          <Card className="shadow-elegant border-romantic/20">
            <CardHeader>
            </CardHeader>
            <CardContent className="flex flex-col justify-center items-center min-h-[180px] sm:min-h-[360px] lg:min-h-[420px] p-4 pt-4 pb-16">
              <Calendar
                mode="single"
                selected={selectedDate}
                onSelect={setSelectedDate}
                defaultMonth={weddingDate}
                className="rounded-md border-0 text-sm sm:text-base md:text-lg scale-125 sm:scale-125 lg:scale-150"
                modifiers={{
                  wedding: weddingDate,
                  rehearsal: new Date('2025-10-07')
                }}
                modifiersStyles={{
                  wedding: { 
                    backgroundColor: 'hsl(var(--romantic))', 
                    color: 'white',
                    fontWeight: 'bold'
                  },
                  rehearsal: { 
                    backgroundColor: 'hsl(var(--romantic-light))', 
                    color: 'white' 
                  }
                }}
              />
            </CardContent>
          </Card>
          
          {/* Events */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-romantic mb-6">{t('scheduleOfEvents')}</h3>
            
            {events.map((event, index) => (
              <Card key={index} className="shadow-elegant border-romantic/20 hover:shadow-romantic transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-romantic/10 rounded-lg">
                      {event.icon}
                    </div>
                    
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-romantic mb-2">
                        {event.title}
                      </h4>
                      
                      <div className="space-y-2 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4" />
                          <span>{event.time}</span>
                        </div>
                        
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4" />
                          <span>{event.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
};