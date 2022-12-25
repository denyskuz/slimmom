import { useState } from 'react';
import { GrClose } from 'react-icons/gr';
import { GiHamburgerMenu } from 'react-icons/gi';
import {
  BurgerButton,
  BurgerMenu,
  NavDiaryLink,
  NavCalcLink,
} from './Burger.styled';

import { useTranslation } from 'react-i18next';

const Burger = () => {
  const [isBurgerMenuOpen, setBurgerMenuOpen] = useState(false);

  const toggleBurgerMenu = () => {
    setBurgerMenuOpen(!isBurgerMenuOpen);
  };
  const { t } = useTranslation();
  return (
    <>
      <BurgerButton
        className={isBurgerMenuOpen ? 'active' : ''}
        aria-label="open burger menu"
        onClick={toggleBurgerMenu}
      >
        {isBurgerMenuOpen ? (
          <GrClose size={20} />
        ) : (
          <GiHamburgerMenu size={24} />
        )}
      </BurgerButton>
      <BurgerMenu className={isBurgerMenuOpen ? 'open' : ''}>
        <>
          <NavDiaryLink to="/diary" onClick={toggleBurgerMenu}>
            {t('Diary')}
          </NavDiaryLink>
          <NavCalcLink to="calculator" onClick={toggleBurgerMenu}>
            {t('Calculator_button')}
          </NavCalcLink>
        </>
      </BurgerMenu>
    </>
  );
};

export default Burger;
