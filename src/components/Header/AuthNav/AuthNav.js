import { LinkDark, Link, LangButton, ButtonContainer } from './AuthNav.styled';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import i18n from './../../../translations/i18n';
import '/node_modules/flag-icons/css/flag-icons.min.css';
import 'react-dropdown/style.css';

const AuthNav = () => {
  const { t } = useTranslation();
  const [language, setLanguage] = useState('en');
  const theme = useSelector(state => state.theme.darkTheme);

  const handleOnclick = e => {
    e.preventDefault();
    setLanguage(e.target.value);
    i18n.changeLanguage(e.target.value);
    localStorage.setLanguage('locale', language);
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
      {!theme? (
        <>
          <Link to="/login" lang={language}>
            {t('Sign_in')}
          </Link>
          <Link to="/signup" lang={language}>
            {t('Registration')}
          </Link>
        </>
      ) : (
          <>
            <LinkDark to="/login" lang={language}>
              {t('Sign_in')}
            </LinkDark>
            <LinkDark to="/signup" lang={language}>
              {t('Registration')}
            </LinkDark>
          </>
      )}
      
    </>
  );
};

export default AuthNav;
