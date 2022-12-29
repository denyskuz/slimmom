import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import { TRANSLATIONS_UK } from './uk/translations';
import { TRANSLATIONS_EN } from './en/translations';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: TRANSLATIONS_EN,
      },
      ua: {
        translation: TRANSLATIONS_UK,
      },
      debug: false,
      detection: {
        order: ['localStorage', 'cookie'],
        caches: ['localStorage', 'cookie'],
      },
    },
    interpolation: {
      escapeValue: false,
    },
  });

const defaultLang = localStorage.getItem('lang') || 'ua';
i18n.changeLanguage(defaultLang);

export default i18n;
