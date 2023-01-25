import React from 'react';
import {
  CardPicture,
  ContainerPicture,
  ButtonPicture,
} from './SectionPictureStyles';
import { initialState } from '../../reducers/counterReducer';
import store  from '../../store' ;
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
const SectionPicture = () => {

  const addToCart = (product) => {
    console.log(product.name + '' + product.price);
    store.dispatch({ type: "ADD_TO_CART", payload: product });
  }

  
  useEffect(() => {
    AOS.init({
      once: true,
    });
    AOS.refresh();
  }, []);
  

  return (

    <ContainerPicture data-aos='fade-down'>
      

      {initialState.products.map(product => (
        <CardPicture key={product.id}>
          <img src={product.img} alt={product.name}/>
          <h2>{product.name}</h2>
          <p>{product.price}</p>
          <ButtonPicture key = {product.id} onClick={() => addToCart(product)}>Add</ButtonPicture>
        </CardPicture>
      ))}
    </ContainerPicture>
  );
};

export default SectionPicture;
