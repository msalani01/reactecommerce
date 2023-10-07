import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return (
        <nav>
            <h3>Ecommerce</h3>
            <div>
                <button>Libros</button>
                <button>Juegos de Mesa</button>
                <button>Comics</button>
            </div>
            <CartWidget/>
        </nav>
    )
}

export default NavBar