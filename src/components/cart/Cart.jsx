import React from 'react';
import {
  CartTitle,
  ContainerIcon,
  ContainerProducts,
  CartButton,
  CartEmptyMsg,
} from './CartStyles';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { useContext } from 'react';
import { CartContext } from '../../context/ContextCart';
import CartProduct from '../cartItem/CartProduct';
import { useDispatch } from 'react-redux';
import { deleteAllCart } from '../../actions/counterActions';
import { useSelector } from 'react-redux';

const Cart = () => {
  const ctx = useContext(CartContext);
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.shop.cart.length);
  console.log(cart)


  return (
    <>
      <ContainerIcon onClick={ctx.toggleCart}>
        <AiOutlineShoppingCart />
      </ContainerIcon>

      <ContainerProducts clicked={ctx.isOpenCarrito}>
        <CartTitle>Tus productos</CartTitle>
          {cart === 0 && 
         <CartEmptyMsg>The cart is empty</CartEmptyMsg>}
        <CartProduct />
        <CartButton>Comprar</CartButton>
        <CartButton onClick={ () => dispatch(deleteAllCart())}>Vaciar carrito</CartButton>
      </ContainerProducts>
    </>
  );
};

export default Cart;
