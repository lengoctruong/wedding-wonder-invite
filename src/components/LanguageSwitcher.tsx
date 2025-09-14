import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";
import { useTranslation } from "@/contexts/TranslationContext";

export const LanguageSwitcher = () => {
  const { language, setLanguage, t } = useTranslation();

  return (
    <div className="fixed top-4 right-4 z-50">
      <Button
        variant="secondary"
        size="sm"
        onClick={() => setLanguage(language === 'en' ? 'vi' : 'en')}
        className="bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30"
      >
        <Globe className="mr-2 h-4 w-4" />
        {language === 'en' ? t('english') : t('vietnamese')}
      </Button>
    </div>
  );
};