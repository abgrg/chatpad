import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.abhishek.app',
  appName: 'Chatpad',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
