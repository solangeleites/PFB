import React, { useContext } from 'react';
import MenuToggle from '../menuToggle/MenuToggle';
import {
  StyledHeader,
  Logo,
  Navbar,
  NavbarList,
  NavbarItem,
  TitleLogo,
  TitleLogoMini,
} from './HeaderStyles';
import { MenuContext } from '../../context/Context';
import Cart from '../cart/Cart';

const Header = () => {
  const ctx = useContext(MenuContext);
  return (
    <>
      <StyledHeader>
        <Logo>
          <TitleLogo>PFB</TitleLogo>
          <TitleLogoMini> Picture for buy</TitleLogoMini>
        </Logo>
        <Navbar isOpen={ctx.isMenuOpen}>
          <NavbarList>
            <NavbarItem>Home</NavbarItem>
            <NavbarItem>Pictures</NavbarItem>
            <NavbarItem>Contact</NavbarItem>
          </NavbarList>
        </Navbar>
        <MenuToggle></MenuToggle>
        <Cart />
      </StyledHeader>
    </>
  );
};

export default Header;
