import React from 'react';
import { useTranslation } from 'react-i18next';
import './Hero.css';
import '../App.css';
function Hero() {
  const { t } = useTranslation();

  return (
    <div className='hero-container'>
      <h1>{t('hero.slogan')} </h1>
    </div>
  );
}

export default Hero;
