import React from 'react';
import {
  CardPicture,
  ContainerPicture,
  ButtonPicture,
} from './SectionPictureStyles';

import { initialState } from '../../reducers/counterReducer';
import store  from '../../store' ;

const SectionPicture = () => {

  const addToCart = (product) => {
    console.log(product.name + '' + product.price);
    store.dispatch({ type: "ADD_TO_CART", payload: product });
  }

  return (
    <ContainerPicture>
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
