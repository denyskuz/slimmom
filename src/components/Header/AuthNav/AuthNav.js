import { Link } from './AuthNav.styled';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import i18n from './../../../translations/i18n';
import '/node_modules/flag-icons/css/flag-icons.min.css';
import { Dropdown } from 'semantic-ui-react';

const AuthNav = () => {
  const { t } = useTranslation();
  const [language, setLanguage] = useState('en');

  const handleOnclick = e => {
    e.preventDefault();
    setLanguage(e.target.value);
    i18n.changeLanguage(e.target.value);
    localStorage.setLanguage('locale', language);
  };
  const langdOptions = [
    {
      type: 'button',
      key: 'EN',
      text: 'EN',
      value: 'EN',
      image: { avatar: true, src: '/images/avatar/small/jenny.jpg' },
    },
    {
      type: 'button',
      key: 'UA',
      text: 'UA',
      value: 'UA',
      image: { avatar: true, src: '/images/avatar/small/elliot.jpg' },
    },
  ];
  return (
    <>
      <Dropdown
        inline
        options={langdOptions}
        defaultValue={langdOptions[0].value}
        onClick={handleOnclick}
      />
      {/* <ButtonContainer>
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
      </ButtonContainer> */}
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
