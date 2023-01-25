import React from 'react';
import { useSelector } from 'react-redux';
import {
  CartContainerItem,
  CartItem,
  CartContainerInfo,
  CartItemTitle,
  CartItemPrice,
  Divider,
  CartContainerTotal,
  CartTotal,
  CartTotalPrice,
} from './CartItemStyles';
import CartCounter from '../cartCounter/CartCounter';




const CartProduct = () => {
  const cart = useSelector((state) => state.shop.cart);

  return (
    <>
      {cart.map((product) => (
        <CartContainerItem key={product.id}>
          <CartItem>
            <img src={product.img} alt={product.name} />

            <CartContainerInfo>
              <CartItemTitle>{product.name}</CartItemTitle>
              <CartItemPrice>{product.price}</CartItemPrice>
            </CartContainerInfo>
          
          <CartCounter />

          </CartItem>
        </CartContainerItem>
      ))}
      <Divider></Divider>

      <CartContainerTotal>
        <CartTotal>Total:</CartTotal>
        <CartTotalPrice>$10 pe</CartTotalPrice>
      </CartContainerTotal>
    </>
  );
};


export default CartProduct;
