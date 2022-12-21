import { useState } from 'react';
import { GrClose } from 'react-icons/gr';
import { GiHamburgerMenu } from 'react-icons/gi';
import {
  BurgerButton,
  BurgerMenu,
  NavDairyLink,
  NavCalcLink,
} from './Burger.styled';

const Burger = () => {
  const [burgerMenuOpen, setBurgerMenuOpen] = useState(false);

  const toggleBurgerMenu = () => {
    setBurgerMenuOpen(!burgerMenuOpen);
  };

  return (
    <>
      <BurgerButton
        className={burgerMenuOpen ? 'active' : ''}
        aria-label="Open burger menu"
        onClick={toggleBurgerMenu}
      >
        {burgerMenuOpen ? <GrClose size={20} /> : <GiHamburgerMenu size={24} />}
      </BurgerButton>
      <BurgerMenu open={burgerMenuOpen}>
        {''}
        <>
          <NavDairyLink to="/dairy" onClick={toggleBurgerMenu}>
            Dairy
          </NavDairyLink>
          <NavCalcLink to="calculator" onClick={toggleBurgerMenu}>
            Calculator
          </NavCalcLink>
        </>
      </BurgerMenu>
    </>
  );
};

export default Burger;
