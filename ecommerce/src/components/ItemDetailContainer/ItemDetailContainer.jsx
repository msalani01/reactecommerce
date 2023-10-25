import "./ItemDetailContainer.css"
import {useState, useEffect} from "react"
import {getProductbyId} from "../../asyncMock"
import ItemDetail from "../ItemDetail/ItemDetail"

const ItemDetailContainer = () => {
    const [products, setProduct] = useState(null)

    useEffect(() => {
        getProductbyId("1")
            .then(response => {
                setProducts(response)
            })
            .catch(error => {
                console.error(error)
            })
    }, [])

    return(
        <div className="ItemDetailContainer">
            <ItemDetail {...product}/>
        </div>
    )
}

export default ItemDetailContainer