import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpBackend from 'i18next-http-backend';

i18n
  .use(HttpBackend)               // ← loads JSON files over HTTP
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    lng: 'mr',                    // default Marathi
    fallbackLng: 'en',
    debug: import.meta.env.MODE === 'development',

    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',   // path relative to public root
    },

    interpolation: { escapeValue: false },
  });

export default i18n;