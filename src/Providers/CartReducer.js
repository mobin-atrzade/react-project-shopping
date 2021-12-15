function addProductToCart(state, action) {
    // console.log(action, state);
    //state.cart ? ! => item.qty ++ // push to cart
    const updatedCart = [...state.cart];
    const updatedItemIndex = updatedCart.findIndex((item) => item.id === action.payload.id);
    if (updatedItemIndex < 0) {
        updatedCart.push({ ...action.payload, quantity: 1 })
    } else {
        const updatedItem = { ...updatedCart[updatedItemIndex] }
        updatedItem.quantity++;
        updatedCart[updatedItemIndex] = updatedItem;
    }
    return {
        ...state,
        cart: updatedCart,
        total: state.total + action.payload.price
    }
}
function removeProductFromCart(state, action) {
    const updatedCart = [...state.cart];
    const updatedItemIndex = updatedCart.findIndex(
        (item) => item.id === action.payload.id
    );
    const updatedItem = { ...updatedCart[updatedItemIndex] };
    if (updatedItem.quantity === 1) {
        const filteredCart = updatedCart.filter(
            item => item.id !== action.payload.id)
        return {
            ...state,
            cart: filteredCart,
            total: state.total - action.payload.price
        }
    } else {
        updatedItem.quantity--;
        updatedCart[updatedItemIndex] = updatedItem;
        return {
            ...state,
            cart: updatedCart,
            total: state.total - action.payload.price
        }
    }
}



const cartReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_CART": return addProductToCart(state, action)
        case "REMOVE_PRODUCT": return removeProductFromCart(state, action)
        default: return state;
    }
}
export default cartReducer;