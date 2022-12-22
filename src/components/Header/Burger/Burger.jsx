import { useState } from 'react';
import { GrClose } from 'react-icons/gr';
import { GiHamburgerMenu } from 'react-icons/gi';
import {
  BurgerButton,
  BurgerMenu,
  NavDiaryLink,
  NavCalcLink,
} from './Burger.styled';

const Burger = () => {
  const [isBurgerMenuOpen, setBurgerMenuOpen] = useState(false);

  const toggleBurgerMenu = () => {
    setBurgerMenuOpen(!isBurgerMenuOpen);
  };

  return (
    <>
      <BurgerButton
        className={isBurgerMenuOpen ? 'active' : ''}
        aria-label="open burger menu"
        onClick={toggleBurgerMenu}
      >
        {isBurgerMenuOpen ? <GrClose size={20} /> : <GiHamburgerMenu size={24} />}
      </BurgerButton>
      <BurgerMenu className={isBurgerMenuOpen ? 'open' : ''}>
        <>
          <NavDiaryLink to="/diary" onClick={toggleBurgerMenu}>
            Diary
          </NavDiaryLink>
          <NavCalcLink to="calculator" onClick={toggleBurgerMenu}>
            Calculator
          </NavCalcLink>
        </>
      </BurgerMenu>
    </>
  );
};

export default Burger;
