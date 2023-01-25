import React from 'react';
import {
  CartTitle,
  ContainerIcon,
  ContainerProducts,
  CartButton,
} from './CartStyles';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { useContext } from 'react';
import { CartContext } from '../../context/ContextCart';
import CartProduct from '../cartItem/CartProduct';
import { useDispatch } from 'react-redux';
import { deleteAllCart } from '../../actions/counterActions';


const Cart = () => {
  const ctx = useContext(CartContext);
  const dispatch = useDispatch();


  return (
    <>
      <ContainerIcon onClick={ctx.toggleCart}>
        <AiOutlineShoppingCart />
      </ContainerIcon>

      <ContainerProducts clicked={ctx.isOpenCarrito}>
        <CartTitle>Tus productos</CartTitle>
        <CartProduct />
        {/* <CartEmptyMsg>The cart is empty</CartEmptyMsg> */}
        <CartButton>Comprar</CartButton>
        <CartButton onClick={ () => dispatch(deleteAllCart())}>Vaciar carrito</CartButton>
      </ContainerProducts>
    </>
  );
};

export default Cart;
