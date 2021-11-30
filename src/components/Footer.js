import React from 'react';
import { useTranslation } from 'react-i18next';

import './Footer.css';

function Footer() {
  const { t } = useTranslation();

  return (
    <div className='footer-container'>
      <p className='footer-generic'>
        {t('footer.welcome')}{' '}
        <a
          href='https://github.com/0xvoider42/Software-development-project'
          target='_blank'
          rel='noreferrer'
        >
          <i className='fab fa-github'> git project</i>
        </a>
      </p>
    </div>
  );
}

export default Footer;
