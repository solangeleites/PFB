import React from 'react'
import { HeroCard, HeroContainer, HeroTitle, HeroImage } from './HeroStyles'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Hero = () => {

  useEffect(() => {
    AOS.init({
      once: true,
    });
    AOS.refresh();
  }, []);
  
  return (
    <>
    <HeroContainer data-aos="fade-down">
            <HeroImage>
            <img src="https://plus.unsplash.com/premium_photo-1664640458877-712a0ab9baa9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"/>
            </HeroImage>
            <HeroCard> 
                <HeroTitle>Welcome to our online painting store. We are dedicated to the sale of paintings. We offer modern paintings, abstracts and reproductions of famous paintings</HeroTitle>
            </HeroCard>
    </HeroContainer>
    </>
  )
}

export default Hero