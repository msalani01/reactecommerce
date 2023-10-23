import React, { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { getProducts } from "../../asyncMock";
import "./ItemListContainer.css"
const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts()
            .then((response) => {
                setProducts(response);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    console.log(products)
    const productsComponents = products.map(prod => {
        return (
            <div key={prod.id}>
                <h1>{prod.name}</h1>
                <img src={prod.img}/>
            </div>
        )
    })

    console.log(productsComponents)
    return (
        <div className="Display">
            <h1>{greeting}</h1>
            <ItemList products={products} />
        </div>
    );
};

export default ItemListContainer;
