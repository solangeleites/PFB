import React from 'react'
import { CartContainerHandler, CartQuantity, CartSpanState } from './CartCounterStyles'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { increment, decrement } from '../../actions/counterActions'

const CartCounter = () => {
  const dispatch = useDispatch()

  const counter = useSelector(state => state.shop.cart[0])
  console.log(counter)

  return (
  <CartContainerHandler>
    <CartQuantity onClick={() => dispatch(decrement()) }>-</CartQuantity>
    <CartSpanState>{counter.quantity}</CartSpanState>
    <CartQuantity onClick={() => dispatch(increment()) } >+</CartQuantity>
</CartContainerHandler>

  )
}

export default CartCounter