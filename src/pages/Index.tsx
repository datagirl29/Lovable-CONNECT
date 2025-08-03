import { useState } from "react";
import SplashScreen from "@/components/SplashScreen";
import LanguageSelector from "@/components/LanguageSelector";
import HomePage from "@/components/HomePage";
import LearnPage from "@/components/LearnPage";
import BuildPage from "@/components/BuildPage";
import GovernmentPage from "@/components/GovernmentPage";

const Index = () => {
  const [currentScreen, setCurrentScreen] = useState<'splash' | 'language' | 'home' | 'learn' | 'build' | 'government'>('splash');
  const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null);

  const handleSplashComplete = () => {
    setCurrentScreen('language');
  };

  const handleLanguageSelect = (language: string) => {
    setSelectedLanguage(language);
    setCurrentScreen('home');
  };

  const handleNavigate = (page: string) => {
    setCurrentScreen(page as any);
  };

  const handleBack = () => {
    setCurrentScreen('home');
  };

  if (currentScreen === 'splash') {
    return <SplashScreen onComplete={handleSplashComplete} />;
  }

  if (currentScreen === 'language') {
    return <LanguageSelector onLanguageSelect={handleLanguageSelect} />;
  }

  if (currentScreen === 'home') {
    return <HomePage onNavigate={handleNavigate} />;
  }

  if (currentScreen === 'learn') {
    return <LearnPage onBack={handleBack} />;
  }

  if (currentScreen === 'build') {
    return <BuildPage onBack={handleBack} />;
  }

  if (currentScreen === 'government') {
    return <GovernmentPage onBack={handleBack} />;
  }

  return null;
};

export default Index;
