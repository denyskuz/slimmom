
import { Link, LangSwitcher, LangList, LangButton } from './AuthNav.styled';

import { LinkDark, Link, LangButton, ButtonContainer } from './AuthNav.styled';

import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import i18n from './../../../translations/i18n';
import i18next from 'i18next';
import { MdOutlineLanguage } from 'react-icons/md';

const AuthNav = () => {
  const { t } = useTranslation();

  const [droped, setDroped] = useState('');

  const [language, setLanguage] = useState('en');
  const theme = useSelector(state => state.theme.darkTheme);


  const hadleChangeLang = language => {
    console.log('language', language);
    i18next.changeLanguage(language);
  };
  console.log('i18next', i18next.languages);
  console.log('i18next', i18next.language);
  console.log('i18next', i18next);
  return (
    <>

      <LangSwitcher onClick={() => setDroped(!droped)}>
        <LangList className={droped ? 'droped' : ''}>
          {i18next.languages.map(lang => (
            <LangButton
              className={lang === i18next.language ? 'active' : ''}
              type="button"
              onClick={() => hadleChangeLang(lang)}
              key={lang}
            >
              {lang}
              <MdOutlineLanguage />
            </LangButton>
          ))}
        </LangList>
      </LangSwitcher>

      <Link to="/login">{t('Sign_in')}</Link>
      <Link to="/signup">{t('Registration')}</Link>

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
      {!theme ? (
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
