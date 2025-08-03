import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.30f6c03432614a2c9d001e6dc08c5640',
  appName: 'CONNECT',
  webDir: 'dist',
  server: {
    url: 'https://30f6c034-3261-4a2c-9d00-1e6dc08c5640.lovableproject.com?forceHideBadge=true',
    cleartext: true
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 2000,
      backgroundColor: '#8B5CF6',
      showSpinner: false
    }
  }
};

export default config;