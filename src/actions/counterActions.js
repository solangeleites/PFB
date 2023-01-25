import { ADD_TO_CART, DELETE_ITEM, DELETE_ALL, INCREMENT, DECREMENT, TOTAL } from '../types/index';

export const addToCart = () => ({type: ADD_TO_CART});


export const deleteItem = () => ({type: DELETE_ITEM});

export const deleteAllCart = () => ({type: DELETE_ALL});

// ---------------------------------------------------

export const increment = (id) => ({type: INCREMENT, payload: {id}});

export const decrement = (id) => ({type: DECREMENT, payload: {id}});

export const calculateTotal = () => ({type: TOTAL});


