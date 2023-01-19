import React from 'react'
import { HeroCard, HeroContainer, HeroTitle, HeroImage } from './HeroStyles'
const Hero = () => {
  return (
    <>
    <HeroContainer>
            <HeroImage>
            <img src="https://plus.unsplash.com/premium_photo-1664640458877-712a0ab9baa9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"/>
            </HeroImage>
            <HeroCard> 
                <HeroTitle>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, fuga?</HeroTitle>
            </HeroCard>
    </HeroContainer>
    </>
  )
}

export default Hero