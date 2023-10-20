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
            <img src="https://images.unsplash.com/photo-1660939067106-96388303a6e2?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt ="pictureforbuy"/>
            </HeroImage>
            <HeroCard> 
                <HeroTitle>Welcome to our online painting store. We are dedicated to the sale of paintings. We offer modern paintings, abstracts and reproductions of famous paintings</HeroTitle>
            </HeroCard>
    </HeroContainer>
    </>
  )
}

export default Hero