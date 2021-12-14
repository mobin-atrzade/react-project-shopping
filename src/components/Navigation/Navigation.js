import { NavLink } from 'react-router-dom';
import './navigation.css'

const Navigation = () => {
    return (
        <header className="main-Navigation">
            <nav>
                <ul>
                    <li>
                        <NavLink to="/" activeClassName="activeLink" exact>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/cart" activeClassName="activeLink">
                            Cart
                        </NavLink>
                    </li>
                </ul>
                <div>mobin shopping</div>
            </nav>
        </header>
    )
}

export default Navigation;