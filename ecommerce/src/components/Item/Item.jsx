import "./Item.css"

const Item = ({ id, name, img, price, stock }) => {
    return (
        <article className="CardItem">
            <h2 className="ItemHeader">
                {name}
            </h2>
            <picture>
                <img src={img} alt={name} className="ItemImg" />
            </picture>
            <section>
                <p className="Info">
                    Precio: ${price}
                </p>
                <p className="Info">
                    Stock disponible: {stock}
                </p>
            </section>
            <footer className="ItemFooter">
                <button className="Option">Ver detalle</button>
            </footer>
        </article>
    );
};

    



export default Item