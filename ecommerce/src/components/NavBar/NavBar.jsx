import { NavLink, Link } from "react-router-dom"
import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return (
        <nav className="NavBar">
            <Link to="/" className={({isActive}) => isActive ? "ActiveOption" : "Option"}>
                <h3>Ecomerce</h3>
            </Link>


            <div className="Categories">
                <Link to={"/category/Libros"} className={({isActive}) => isActive ? "ActiveOption" : "Option"}/>
                <Link to={"/category/Juegosdemesa"} className={({isActive}) => isActive ? "ActiveOption" : "Option"}/>
                <Link to={"/category/Comics"} className={({isActive}) => isActive ? "ActiveOption" : "Option"}/>

            </div>
            <CartWidget/>
        </nav>
    )
}

export default NavBar