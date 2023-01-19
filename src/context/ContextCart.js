import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [isOpenCart, setIsOpenCart] = useState(false);
    
    const handleOpenCart = () => {
        setIsOpenCart(!isOpenCart);
    };
    return(
        <CartContext.Provider
            value={{
                isOpenCarrito: isOpenCart,
                toggleCart: handleOpenCart,
            }}
        >
            {children}
        </CartContext.Provider>
    )

}