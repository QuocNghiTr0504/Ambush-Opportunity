// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpBackend from 'i18next-http-backend';

const hostHref = typeof window !== 'undefined' ? window.location.origin : 'https://ambushopportunity.uk/'

i18n
  .use(initReactI18next) // Passes i18n down to react-i18next
  .use(LanguageDetector)
  .use(HttpBackend) // Use the HTTP backend plugin
  .init({
    backend: {
      loadPath: `${hostHref}/assets/locales/{{lng}}/translation.json`
    },
    lng: 'en-US', // Default language
    fallbackLng: 'en-US',
    // debug: true,
    interpolation: {
      escapeValue: false // React already safes from xss
    }

  });

export default i18n;
