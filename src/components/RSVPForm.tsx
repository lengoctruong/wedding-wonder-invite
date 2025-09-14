import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Heart, Users, Utensils } from "lucide-react";
import { toast } from "sonner";
import { useTranslation } from "@/contexts/TranslationContext";
import backgroundImage from "@/assets/optimized/VHH_0034.jpg";

export const RSVPForm = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    attendance: '',
    guests: '1',
    dietaryRestrictions: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.attendance) {
      toast.error("Please fill in all required fields.");
      return;
    }
    
    // Show loading state
    const loadingToast = toast.loading("Submitting RSVP...");
    
    try {
      
      // Send data to Formspree (no CORS issues)
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('phone', formData.phone);
      formDataToSend.append('attendance', formData.attendance);
      formDataToSend.append('guests', formData.guests);
      formDataToSend.append('dietaryRestrictions', formData.dietaryRestrictions);
      formDataToSend.append('message', formData.message);
      
      // Also log to console for debugging
      console.log('Submitting RSVP data:', {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        attendance: formData.attendance,
        guests: formData.guests,
        dietaryRestrictions: formData.dietaryRestrictions,
        message: formData.message
      });
      
      // Use fetch to submit without redirect
      const response = await fetch('https://formspree.io/f/myzppkbj', {
        method: 'POST',
        body: formDataToSend,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        // Dismiss loading toast and show success message
        toast.dismiss(loadingToast);
        toast.success(t('thankYou'));
        console.log('RSVP sent to Formspree successfully');
      } else {
        throw new Error('Failed to submit RSVP');
      }
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        attendance: '',
        guests: '1',
        dietaryRestrictions: '',
        message: ''
      });
      
    } catch (error) {
      // Dismiss loading toast and show error
      toast.dismiss(loadingToast);
      toast.error("Failed to submit RSVP. Please try again.");
      console.error('Error submitting RSVP:', error);
      
      // Fallback: log to console
      console.log('=== RSVP SUBMISSION (FALLBACK) ===');
      console.log('Name:', formData.name);
      console.log('Email:', formData.email);
      console.log('Phone:', formData.phone);
      console.log('Attendance:', formData.attendance);
      console.log('Number of Guests:', formData.guests);
      console.log('Dietary Restrictions:', formData.dietaryRestrictions);
      console.log('Message:', formData.message);
      console.log('Full Data Object:', formData);
      console.log('======================');
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="rsvp" className="relative py-20">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-center bg-no-repeat bg-cover"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-black/75"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight py-2 min-h-[3rem] md:min-h-[4rem]">
            {t('rsvpTitle')}
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            {t('rsvpSubtitle')}
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <Card className="shadow-elegant border-romantic/20">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-romantic flex items-center justify-center gap-2">
                <Heart className="h-6 w-6" />
                Répondez S'il Vous Plaît
              </CardTitle>
            </CardHeader>
            
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-6" name="rsvp" data-netlify="true">
                {/* Personal Information */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">{t('fullName')} *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      placeholder={t('fullName')}
                      required
                    />
                  </div>
                  
                                     <div className="space-y-2">
                     <Label htmlFor="email">{t('email')}</Label>
                     <Input
                       id="email"
                       type="email"
                       value={formData.email}
                       onChange={(e) => handleInputChange('email', e.target.value)}
                       placeholder={t('email')}
                     />
                   </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone">{t('phone')}</Label>
                  <Input
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    placeholder={t('phone')}
                  />
                </div>
                
                {/* Attendance */}
                <div className="space-y-3">
                  <Label>{t('attending')} *</Label>
                  <RadioGroup
                    value={formData.attendance}
                    onValueChange={(value) => handleInputChange('attendance', value)}
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="yes" id="yes" />
                      <Label htmlFor="yes">✨ {t('yes')}</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="no" id="no" />
                      <Label htmlFor="no">💔 {t('no')}</Label>
                    </div>
                  </RadioGroup>
                </div>
                
                {/* Number of Guests */}
                {formData.attendance === 'yes' && (
                  <div className="space-y-2">
                    <Label htmlFor="guests" className="flex items-center gap-2">
                      <Users className="h-4 w-4" />
                      {t('numberOfGuests')}
                    </Label>
                    <Select value={formData.guests} onValueChange={(value) => handleInputChange('guests', value)}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1 Guest</SelectItem>
                        <SelectItem value="2">2 Guests</SelectItem>
                        <SelectItem value="3">3 Guests</SelectItem>
                        <SelectItem value="4">4 Guests</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                )}
                
                {/* Dietary Restrictions */}
                {formData.attendance === 'yes' && (
                  <div className="space-y-2">
                    <Label htmlFor="dietary" className="flex items-center gap-2">
                      <Utensils className="h-4 w-4" />
                      {t('dietaryRestrictions')}
                    </Label>
                    <Input
                      id="dietary"
                      value={formData.dietaryRestrictions}
                      onChange={(e) => handleInputChange('dietaryRestrictions', e.target.value)}
                      placeholder={t('dietaryRestrictions')}
                    />
                  </div>
                )}
                
                {/* Message */}
                <div className="space-y-2">
                  <Label htmlFor="message">{t('message')}</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    placeholder={t('message')}
                    rows={4}
                  />
                </div>
                
                {/* Submit Button */}
                <Button 
                  type="submit" 
                  className="w-full bg-romantic hover:bg-romantic/90 text-white py-3 text-lg"
                >
                  <Heart className="mr-2 h-5 w-5" />
                  {t('submitRsvp')}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};