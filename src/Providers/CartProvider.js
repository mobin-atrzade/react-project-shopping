import { useContext, useReducer, createContext } from 'react';
import cartReducer from './CartReducer';

const CartContext = createContext()
const CartContaxtDispatcher = createContext()

const CartProvider = ({ children }) => {
    const initialstate = {
        cart: [],
        total: 0
    }
    const [cart, dispatch] = useReducer(cartReducer, initialstate)

    return (
        <CartContext.Provider value={cart}>
            <CartContaxtDispatcher.Provider value={dispatch}>
                {children}
            </CartContaxtDispatcher.Provider>
        </CartContext.Provider>
    )
}
export default CartProvider;

export const useCart = () => useContext(CartContext);
export const useCartActions = () => useContext(CartContaxtDispatcher);
