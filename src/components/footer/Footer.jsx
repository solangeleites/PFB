import React from 'react';
import {
  ContainerSocial,
  FooterColumn,
  FooterContainer,
  FooterContainerText,
  FooterContainerTextLast
} from './FooterStyles';

import {Logo, TitleLogo, TitleLogoMini} from '../../components/header/HeaderStyles';
  import {AiOutlineFacebook, AiOutlineInstagram, AiFillTwitterSquare } from 'react-icons/ai';


const Footer = () => {
  return (
    <FooterColumn>
    <FooterContainer>
      <FooterContainerText>
        <h3>Terms of use</h3>
        <p>Privacy policy</p>
        <p>Cookie policy</p>
        <p>Aplication </p>
      </FooterContainerText>
      <FooterContainerText>
        <h3>Company</h3>
        <p>About us</p>
        <p>Blog</p>
        <p>Careers</p>
      </FooterContainerText>
      <FooterContainerText>
        <h3>Support</h3>
        <p>Help center</p>
        <p>Report a bug</p>
        <p>FAQ</p>
      </FooterContainerText>
      <FooterContainerText>
        <h3>Contact</h3>
        <p>Facebook</p>
        <p>Twitter</p>
        <p>Instagram</p>
      </FooterContainerText>
      <FooterContainerTextLast>
        <Logo>
          <TitleLogo>PFB</TitleLogo>
          <TitleLogoMini>Picture for buy</TitleLogoMini>
        </Logo>
        <ContainerSocial>
        <span><AiOutlineFacebook></AiOutlineFacebook></span>
        <span><AiOutlineInstagram></AiOutlineInstagram></span>
        <span><AiFillTwitterSquare></AiFillTwitterSquare></span>
        </ContainerSocial>

      </FooterContainerTextLast>
        </FooterContainer>
        <p>© 2021 - All rights reserved</p>
      </FooterColumn>
  );
};

export default Footer;
