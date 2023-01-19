import React from 'react';
import Header from './components/header/Header';
import {Main} from './components/globalComponents/GlobalComponents';
import Hero from './components/hero/Hero';
import SectionPicture from './components/section/SectionPicture';

const App = () => {
  return (
    <>
      <Header />
      <Main>
        <Hero />
        <SectionPicture />
      </Main>
    </>
  );
};

export default App;
