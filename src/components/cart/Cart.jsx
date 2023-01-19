import React from 'react'
import { CartTitle, ContainerIcon, ContainerProducts, CartEmptyMsg } from './CartStyles'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import { useContext } from 'react'
import { CartContext } from '../../context/ContextCart'


const Cart = () => {
  const ctx = useContext(CartContext)
  return (
    <>
    <ContainerIcon onClick={ctx.toggleCart} >
        <AiOutlineShoppingCart />
    </ContainerIcon>
    <ContainerProducts clicked= {ctx.isOpenCarrito} >
    <CartTitle>Tus productos</CartTitle>
    <CartEmptyMsg>The cart is empty</CartEmptyMsg>
    </ContainerProducts>
    </>
  )
}

export default Cart