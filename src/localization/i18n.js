import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translations: require('./en.json'),
    },
    ru: {
      translations: require('./ru.json'),
    },
  },
  fallbackLng: 'en',
  debug: true,

  ns: ['translations'],
  defaultNS: 'translations',

  react: {
    wait: true,
  },
});

export default i18n;
