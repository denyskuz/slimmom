import { Link, LangButton, ButtonContainer } from './AuthNav.styled';
import React from 'react';
import { useTranslation } from 'react-i18next';

import i18n from './../../../translations/i18n';
import '/node_modules/flag-icons/css/flag-icons.min.css';
import 'react-dropdown/style.css';

const AuthNav = () => {
  const { t } = useTranslation();

  const handleOnclick = e => {
    e.preventDefault();
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
          value="ua"
          onClick={handleOnclick}
          className="fi fi-ua"
        ></LangButton>
      </ButtonContainer>
        <>
          <Link to="/login">{t('Sign_in')}</Link>
          <Link to="/signup">{t('Registration')}</Link>
        </>
    </>
  );
};

export default AuthNav;
