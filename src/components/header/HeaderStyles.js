import styled from 'styled-components';
import { mobile, tablet } from '../../media/queries';

export const StyledHeader = styled.header`
  margin: 0 auto;
  height: 60px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 2;
  padding: 0 70px 0 37px;
  background-color: #fff;

  ${tablet} {
    padding: 0px 70px 0px 20px;
  }
`;
export const Logo = styled.div`
  height: 60px;
  width: 120px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  cursor: pointer;
`;
export const TitleLogo = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: black;
  text-transform: uppercase;
  letter-spacing: 2px;
  text-align: center;
`;
export const TitleLogoMini = styled.h6`
  font-size: 7px;
  font-weight: 500;
  color: black;
  text-transform: uppercase;
  letter-spacing: 2px;
  text-align: start;
`;

export const Navbar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;

  ${tablet} {
    background-color: white;
    position: absolute;
    width: 100%;
    top: 60px;
    right: 0;
    height: calc(100vw - 60px);
    z-index: 5;
    transition: all 0.5s ease-in-out;
    transform: ${(props) =>
      props.isOpen ? 'translateX(0%)' : 'translateX(200%)'};
  }

`;
export const NavbarList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  position: relative;

  ${tablet} {
    flex-direction: column;
    margin: 0 auto;
  }
`;
export const NavbarItem = styled.li`
  position: relative;
  font-size: 18px;
  cursor: pointer;

  &::after {
    content: '';
    height: 2px;
    width: 100%;
    background-color: black;
    position: absolute;
    bottom: -4px;
    left: -2px;
    transform: scaleX(0);
    transform-origin: bottom;
    transition: transform 0.2s ease-in-out;
  }

  &:hover::after {
    transform: scaleX(1);
    transform-origin: bottom;
  }
`;
export const NavbarLastItem = styled.li`
  position: relative;
  font-size: 18px;
  cursor: pointer;
  border: 2px solid hotpink;
  border-radius: 5px;
  padding: 2.5px 8px;

  &:hover {
    background-color: hotpink;
    transition: all 0.2s ease-in-out;
  }
`;
