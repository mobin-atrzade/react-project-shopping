export function CheckInCart(cart, product) {
    return cart.find(c => c.id === product.id)
}