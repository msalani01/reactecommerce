import { NavLink, Outlet } from "react-router-dom"
import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return (
        <nav className="NavBar">
            <NavLink to="/" className={({isActive}) => isActive ? "ActiveOption" : "Option"}>
                <h3>Ecomerce</h3>
            </NavLink>

            <div className="Categories">
                <NavLink to={"/category/Libros"} className={({isActive}) => isActive ? "ActiveOption" : "Option"}/>
                <NavLink to={"/category/Juegos de mesa"} className={({isActive}) => isActive ? "ActiveOption" : "Option"}/>
                <NavLink to={"/category/Comics"} className={({isActive}) => isActive ? "ActiveOption" : "Option"}/>

            </div>
        </nav>
    )
}

export default NavBar