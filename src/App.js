import React from 'react';
import Header from './components/header/Header';
import { Main } from './components/globalComponents/GlobalComponents';
import Hero from './components/hero/Hero';
import SectionPicture from './components/section/SectionPicture';
import store from './store';
import { Provider } from 'react-redux';
import Footer from './components/footer/Footer';

const App = () => {


  return (
    <>
      <Provider store={store}>
        <Header  />
        <Main>
          <Hero />
          <SectionPicture />
          <Footer />
        </Main>
      </Provider>
    </>
  );
};

export default App;
