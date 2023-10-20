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
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const ctx = useContext(MenuContext);
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      once: true,
    });
    AOS.refresh();
  }, []);
  
  return (
    <>
      <StyledHeader data-aos="fade-down">
        <Logo onClick={()=> navigate('/')}>
          <TitleLogo>PFB</TitleLogo>
          <TitleLogoMini> Picture for buy</TitleLogoMini>
        </Logo>
        <Navbar isOpen={ctx.isMenuOpen}>
          <NavbarList>
            <NavbarItem to='/'>Home</NavbarItem>
            <NavbarItem to='Pictures'>Pictures</NavbarItem>
            <NavbarItem to='Contact'>Contact</NavbarItem>
          </NavbarList>
        </Navbar>
        <MenuToggle></MenuToggle>
        <Cart />
      </StyledHeader>
    </>
  );
};

export default Header;
