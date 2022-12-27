import { Link, LangSwitcher, LangList, LangButton } from './AuthNav.styled';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import i18n from './../../../translations/i18n';
import '/node_modules/flag-icons/css/flag-icons.min.css';

const AuthNav = () => {
  const { t } = useTranslation();
  const [droped, setDroped] = useState('');
  const [language, setLanguage] = useState('en');

  const hadleChangeLang = language => {
    i18n.changeLanguage(language);
    setLanguage(language);
  };
  return (
    <>
      <LangSwitcher onClick={() => setDroped(!droped)}>
        <LangList className={droped ? 'droped' : ''}>
          {i18n.languages.map(lang => (
            <LangButton
              className={lang === i18n.language ? 'active' : ''}
              type="button"
              onClick={() => hadleChangeLang(language)}
              key={language}
            >
              {lang}
            </LangButton>
          ))}
        </LangList>
      </LangSwitcher>

      <Link to="/login">{t('Sign_in')}</Link>
      <Link to="/signup">{t('Registration')}</Link>
      {/* {console.log(i18n.languages)} */}
    </>
  );
};

export default AuthNav;
