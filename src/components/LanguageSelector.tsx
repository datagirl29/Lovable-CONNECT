import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface LanguageSelectorProps {
  onLanguageSelect: (language: string) => void;
}

const languages = [
  { code: 'en', name: 'English', native: 'English' },
  { code: 'hi', name: 'Hindi', native: 'हिंदी' },
  { code: 'te', name: 'Telugu', native: 'తెలుగు' },
  { code: 'ta', name: 'Tamil', native: 'தமிழ்' },
  { code: 'bn', name: 'Bengali', native: 'বাংলা' },
  { code: 'mr', name: 'Marathi', native: 'मराठी' },
];

const LanguageSelector = ({ onLanguageSelect }: LanguageSelectorProps) => {
  return (
    <div className="min-h-screen bg-gradient-bg flex items-center justify-center p-4">
      <Card className="w-full max-w-md p-8 shadow-elegant">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-foreground mb-2">Welcome!</h2>
          <p className="text-muted-foreground">Choose your preferred language</p>
        </div>
        
        <div className="grid grid-cols-2 gap-3">
          {languages.map((language) => (
            <Button
              key={language.code}
              variant="category"
              size="lg"
              onClick={() => onLanguageSelect(language.code)}
              className="h-16 flex-col gap-1"
            >
              <span className="font-semibold">{language.native}</span>
              <span className="text-xs opacity-70">{language.name}</span>
            </Button>
          ))}
        </div>
        
        <div className="mt-6 text-center">
          <Button
            variant="ghost"
            onClick={() => onLanguageSelect('en')}
            className="text-sm text-muted-foreground"
          >
            Continue with English
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default LanguageSelector;