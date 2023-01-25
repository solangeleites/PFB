import { ADD_TO_CART, DELETE_ITEM, DELETE_ALL, INCREMENT, DECREMENT, TOTAL } from '../types/index';

export const addToCart = () => ({type: ADD_TO_CART});


export const deleteItem = () => ({type: DELETE_ITEM});

export const deleteAllCart = () => ({type: DELETE_ALL});

// ---------------------------------------------------

export const increment = () => ({type: INCREMENT});

export const decrement = () => ({type: DECREMENT});

export const calculateTotal = () => ({type: TOTAL});


