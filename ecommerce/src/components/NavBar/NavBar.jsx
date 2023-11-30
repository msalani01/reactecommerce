import CartWidget from "../CartWidget/CartWidget";
import { NavLink, Link } from 'react-router-dom';
import './NavBar.css'; // Import del archivo CSS

const NavBar = () => {
    return (
        <nav className="NavBar">
            <Link to='/'>
                <h3>Libroverso</h3>
            </Link>
            <div className="Categories">
                <NavLink to={'/category/Libros'} activeClassName='ActiveOption'>Libros</NavLink>
                <NavLink to={'/category/Juegosdemesa'} activeClassName='ActiveOption'>Juegos de mesa</NavLink>
                <NavLink to={'/category/Comics'} activeClassName='ActiveOption'>Comics</NavLink>
            </div>
        </nav>
    );
}

export default NavBar;
