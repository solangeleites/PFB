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
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';


const CartProduct = () => {
  const cart = useSelector((state) => state.shop.cart);
  const total = useSelector((state) => state.shop.total);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: 'TOTAL' });
  }, [cart, dispatch]);

  return (
    <>
      {cart.map((product) => (
        <CartContainerItem key={product.id}>
          <CartItem>
            <img src={product.img} alt={product.name} />

            <CartContainerInfo>
              <CartItemTitle>{product.name}</CartItemTitle>
              <CartItemPrice >{product.price}</CartItemPrice>
            </CartContainerInfo>
          
          <CartCounter quantity={product.quantity} />

          </CartItem>
        </CartContainerItem>
      ))}
      <Divider></Divider>

      <CartContainerTotal>
        <CartTotal>Total:</CartTotal>
        <CartTotalPrice>{total}</CartTotalPrice>
      </CartContainerTotal>
    </>
  );
};


export default CartProduct;
