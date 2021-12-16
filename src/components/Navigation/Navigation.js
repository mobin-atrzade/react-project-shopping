import { NavLink } from 'react-router-dom';
import './navigation.css'
import { useCart } from '../../Providers/CartProvider';

const Navigation = () => {
    const { cart } = useCart()

    return (
        <header className="main-Navigation">
            <nav>
                <ul>
                    <li>
                        <NavLink to="/" activeClassName="activeLink" exact>
                            Home
                        </NavLink>
                    </li>
                    <li className="cartLink">
                        <NavLink to="/cart" activeClassName="activeLink">
                            Cart
                        </NavLink>
                        <span>{cart.length}</span>
                    </li>
                </ul>
                <div>mobin shopping</div>
            </nav>
        </header>
    )
}
export default Navigation;