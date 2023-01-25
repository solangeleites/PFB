import {
  ADD_TO_CART,
  DECREMENT,
  DELETE_ALL,
  INCREMENT,
  DELETE_ITEM,
  TOTAL,
} from '../types/index';

export const initialState = {
  products: [
    {
      id: 1,
      name: 'Angels',
      price: 1000,
      img: 'https://images.unsplash.com/flagged/photo-1572392640988-ba48d1a74457?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80',
    },
    {
      id: 2,
      name: 'Sailtboat',
      price: 2000,
      img: 'https://images.unsplash.com/photo-1582561424760-0321d75e81fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=489&q=80',
    },
    {
      id: 3,
      name: 'Persons',
      price: 3000,
      img: 'https://images.unsplash.com/photo-1618331835717-801e976710b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80',
    },
    {
      id: 4,
      name: 'Houses on slopes',
      price: 4000,
      img: 'https://images.unsplash.com/photo-1549289524-06cf8837ace5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
    },
    {
      id: 5,
      name: 'Oil on canvas',
      price: 5000,
      img: 'https://images.unsplash.com/photo-1611149916119-c6c16eb89f89?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
    },
    {
      id: 6,
      name: 'Church',
      price: 6000,
      img: 'https://images.unsplash.com/photo-1578301978162-7aae4d755744?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=377&q=80',
    },
  ],
  cart: [],
};

// export const shopReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case ADD_TO_CART:
//       return { ...state,
//                   cart: [...state.cart, action.payload] };
//     default:
//       return state;
//   }
// };
export const shopReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      // buscar si el producto ya esta en el carrito
      const index = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index !== -1) {
        // si ya existe en el carrito, aumentar la cantidad en 1
        const newCart = [...state.cart];
        newCart[index].quantity += 1;
        return { ...state, cart: newCart };
      } else {
        // si no existe en el carrito, agregar el producto con cantidad 1
        return {
          ...state,
          cart: [...state.cart, { ...action.payload, quantity: 1 }],
        };
      }
    case INCREMENT:
      // buscar el producto en el carrito
      const index2 = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index2 !== -1) {
        const newCart2 = [...state.cart];
        newCart2[index2].quantity += 1;
        return { ...state, cart: newCart2 };
      }
    case DECREMENT:
      // buscar el producto en el carrito
      const index3 = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index3 !== -1) {
        const newCart3 = [...state.cart];
        if (newCart3[index3].quantity > 0) {
          newCart3[index3].quantity -= 1;
          return { ...state, cart: newCart3 };
        }
      }
    case TOTAL:
      let total = 0;
      state.cart.forEach((item) => {
        total += item.price * item.quantity;
      });
      return { ...state, total };
    
    case DELETE_ITEM:
      // buscar el producto en el carrito
      const index4 = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index4 !== -1) {
        const shouldDelete = window.confirm(
          '¿Estás seguro de eliminar este producto?'
        );
        if (shouldDelete) {
          const newCart4 = [...state.cart];
          newCart4.splice(index4, 1);
          return { ...state, cart: newCart4 };
        }
      }
    case DELETE_ALL:
      return { ...state, cart: [] };
    default:
      return state;
  }
};
