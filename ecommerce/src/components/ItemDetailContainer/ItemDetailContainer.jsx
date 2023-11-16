import "./ItemDetailContainer.css";
import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { getDoc, doc } from "firebase/firestore";
import { db } from '../../Services/Firebase/firebaseConfig'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const { itemId } = useParams()

    useEffect(() => {
        setLoading(true)

        const docRef = doc(db, 'products', itemId)

        getDoc(docRef)
            .then(response => {
                const data = response.data();
                setProduct({ id: response.id, ...data });
            })
            .catch(error => {
                console.error(error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [itemId]);

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <div className="ItemDetailContainer">
            {product ? <ItemDetail {...product} /> : <p>Product not found</p>}
        </div>
    )
}

export default ItemDetailContainer;
