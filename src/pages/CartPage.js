import Layout from './../Layout/Layout';
import { useCart, useCartActions } from '../Providers/CartProvider';
import './cartPage.css';
import { Link } from 'react-router-dom';

const CartPage = () => {
    const { cart, total } = useCart()
    const dispatch = useCartActions()
    // console.log(total);

    if (!cart.length) return (
        <Layout>
            <main>
                <h2>cart is empty !</h2>
            </main>
        </Layout>
    )

    const incHandler = (cartItem) => {
        dispatch({ type: "ADD_TO_CART", payload: cartItem })
    }
    const decHandler = (cartItem) => {
        dispatch({ type: "REMOVE_PRODUCT", payload: cartItem })
    }

    return (
        <Layout>
            <main className="container">
                <section className="cartCenter">
                    <section className="cartItemList">
                        {cart.map((item) => {
                            return (<div className="cartItem">
                                <div className="itemImg">
                                    <img src={item.image} alt={item.name} />
                                </div>
                                <div>{item.name}</div>
                                <div>{item.offPrice * item.quantity}</div>
                                <div className="btnGroup">
                                    <button onClick={() => decHandler(item)}>-</button>
                                    <button >{item.quantity}</button>
                                    <button onClick={() => incHandler(item)}>+</button>
                                </div>
                            </div>
                            )
                        })}
                    </section>
                    <CartSummery cart={cart} total={total} />
                </section>
            </main>
        </Layout>
    )
}
export default CartPage;

const CartSummery = ({ cart, total }) => {
    const originalTotalPrice = cart.length ? cart.reduce((acc, curr) => acc + curr.quantity * curr.price, 0) : 0;

    return (
        <section className="cartSummery">
            <h2 style={{ marginBottom: '30px' }}>Cart Summery</h2>
            <div className="summaryItem">
                <p>original Total Price</p>
                <p>{originalTotalPrice} $</p>
            </div>
            <div className="summaryItem">
                <p>cart discount</p>
                <p>{originalTotalPrice - total} $</p>
            </div>
            <div className="summaryItem net">
                <p>net price</p>
                <p>{total} $</p>
            </div>
            <Link to="/checkout">
                <button
                    className="btn primary"
                    style={{ marginTop: '20px', width: '100%' }}>
                    Go to checkout
                </button>
            </Link>
        </section>
    )
}