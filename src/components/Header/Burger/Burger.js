import { useState } from 'react';
import { GrClose } from 'react-icons/gr';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FcDatabase, FcImport } from 'react-icons/fc';
import { useSelector } from 'react-redux';
import {
  BurgerButton,
  BurgerMenu,
  NavDiaryLink,
  NavCalcLink,
  AuthLink,
  ButtonWrapper,
} from './Burger.styled';
import { LangButton, ButtonContainer } from '../AuthNav/AuthNav.styled';
import { useAuth } from 'hooks/useAuth';
import { useTranslation } from 'react-i18next';
import i18n from './../../../translations/i18n';
import '/node_modules/flag-icons/css/flag-icons.min.css';
import 'react-dropdown/style.css';

const Burger = () => {
  const [isBurgerMenuOpen, setBurgerMenuOpen] = useState(false);
  const { isLoggedIn } = useAuth();
  const { t } = useTranslation();
  const theme = useSelector(state => state.theme.darkTheme);
  const toggleBurgerMenu = () => {
    setBurgerMenuOpen(!isBurgerMenuOpen);
  };


  const handleOnclick = e => {
    e.preventDefault();
    i18n.changeLanguage(e.target.value);
    localStorage.setItem('lang', e.target.value)
  };

  return (
    <>
      <ButtonWrapper>
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
          <BurgerButton
            className={isBurgerMenuOpen ? 'active' : ''}
            aria-label="burger menu"
            onClick={toggleBurgerMenu}
          >
            {isBurgerMenuOpen ? (
              <GrClose size={20} />
            ) : (
              <GiHamburgerMenu size={24} />
            )}
          </BurgerButton>
        ) : (
          <BurgerButton
            className={isBurgerMenuOpen ? 'active' : ''}
            aria-label="burger menu"
            onClick={toggleBurgerMenu}
          >
            {isBurgerMenuOpen ? (
              <FcImport size={20} />
            ) : (
              <FcDatabase size={24} />
            )}
          </BurgerButton>
        )}
      </ButtonWrapper>
      <BurgerMenu className={isBurgerMenuOpen ? 'open' : ''}>
        {isLoggedIn ? (
          <>
            <NavDiaryLink to="/diary" onClick={toggleBurgerMenu}>
              {t('Diary')}
            </NavDiaryLink>
            <NavCalcLink to="calculator" onClick={toggleBurgerMenu}>
              {t('Calculator_button')}
            </NavCalcLink>
          </>
        ) : (
          <>
            <AuthLink to="login" onClick={toggleBurgerMenu}>
              {t('Sign_in')}
            </AuthLink>
            <AuthLink to="signup" onClick={toggleBurgerMenu}>
              {t('Registration')}
            </AuthLink>
          </>
        )}
      </BurgerMenu>
    </>
  );
};

export default Burger;
