import { LinkDark, Link, LangButton, ButtonContainer } from './AuthNav.styled';
import React from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import i18n from './../../../translations/i18n';
import '/node_modules/flag-icons/css/flag-icons.min.css';
import 'react-dropdown/style.css';

const AuthNav = () => {
  const { t } = useTranslation();
  const theme = useSelector(state => state.theme.darkTheme);

  const handleOnclick = e => {
    e.preventDefault();
    i18n.changeLanguage(e.target.value);
    localStorage.setItem('lang', e.target.value);
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
          value="ua"
          onClick={handleOnclick}
          className="fi fi-ua"
        ></LangButton>
      </ButtonContainer>
      {!theme ? (
        <>
          <Link to="/login">{t('Sign_in')}</Link>
          <Link to="/signup">{t('Registration')}</Link>
        </>
      ) : (
        <>
          <LinkDark to="/login">{t('Sign_in')}</LinkDark>
          <LinkDark to="/signup">{t('Registration')}</LinkDark>
        </>
      )}
    </>
  );
};

export default AuthNav;
