import { Link, LangButton, ButtonContainer } from './AuthNav.styled';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import i18n from './../../../translations/i18n';
import '/node_modules/flag-icons/css/flag-icons.min.css';

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
      <ButtonContainer>
        <LangButton
          value="en"
          onClick={handleOnclick}
          className="fi fi-gb"
        ></LangButton>
        <LangButton
          value="uk"
          onClick={handleOnclick}
          className="fi fi-ua"
        ></LangButton>
      </ButtonContainer>
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
