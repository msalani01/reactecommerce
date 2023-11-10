import CartWidget from "../CartWidget/CartWidget";
import {NavLink, Link} from 'react-router-dom'

const NavBar = () => {
    return (
        <nav className="NavBar">
            <Link to='/'>
                <h3>Ecommerce</h3>
            </Link>
            <div className="Categories">
                <NavLink to={'/category/Libros'} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}/>
                <NavLink to={'/category/Juegosdemesa'} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}/>
                <NavLink to={'/category/Comics'} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}/>
            </div>
        </nav>
    )
}

export default NavBar