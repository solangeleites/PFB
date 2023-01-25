import React from 'react'
import { CartContainerHandler, CartQuantity, CartSpanState } from './CartCounterStyles'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { increment, decrement } from '../../actions/counterActions'

const CartCounter = () => {
  const dispatch = useDispatch()

 const quantity = useSelector(state => state.counter.quantity)

  return (
  <CartContainerHandler>
    <CartQuantity onClick={() => dispatch(decrement()) }>-</CartQuantity>
    <CartSpanState>{quantity}</CartSpanState>
    <CartQuantity onClick={() => dispatch(increment()) } >+</CartQuantity>
</CartContainerHandler>

  )
}

export default CartCounter