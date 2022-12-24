import { Link, LangButton } from './AuthNav.styled';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import i18n from './../../../translations/i18n';

const AuthNav = () => {
  const { t } = useTranslation();
  const [language, setLanguage] = useState('en');

  const handleOnclick = e => {
    e.preventDefault();
    setLanguage(e.target.value);
    i18n.changeLanguage(e.target.value);
  };

  return (
    <>
      <div>
        <LangButton value="en" onClick={handleOnclick}>
          EN
        </LangButton>
        <LangButton value="uk" onClick={handleOnclick}>
          UK
        </LangButton>
      </div>
      <Link to="/login" lang={language}>
        {t('Sign_in')}
      </Link>
      <Link to="/signup" lang={language}>
        {t('Registration')}
      </Link>
    </>
  );
};

export default AuthNav;
