import React from 'react'
import { CartContainerHandler, CartQuantity, CartSpanState } from './CartCounterStyles'
import { useDispatch } from 'react-redux'
import { increment, decrement } from '../../actions/counterActions'

const CartCounter = ({quantity, id}) => {
  const dispatch = useDispatch()

  return (
  <CartContainerHandler>
    <CartQuantity onClick={() => dispatch(decrement(id)) }>-</CartQuantity>
    <CartSpanState>{quantity}</CartSpanState>
    <CartQuantity onClick={() => dispatch(increment(id)) } >+</CartQuantity>
</CartContainerHandler>
  )
}

export default CartCounter