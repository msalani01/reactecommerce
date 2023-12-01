import CartWidget from "../CartWidget/CartWidget";
import { NavLink, Link } from 'react-router-dom';
import './NavBar.css'; 

const NavBar = () => {
    return (
        <nav className="NavBar">
            <Link to='/'>
                <h3>Libroverso</h3>
            </Link>
            <div className="Categories">
                <NavLink to={'/category/Libros'} activeclassname='ActiveOption'>Libros</NavLink>
                <NavLink to={'/category/Juegosdemesa'} activeclassname='ActiveOption'>Juegos de mesa</NavLink>
                <NavLink to={'/category/Comics'} activeclassname='ActiveOption'>Comics</NavLink>
            </div>
        </nav>
    );
}

export default NavBar;
