
import Item from "../Item/Item"

const ItemList = ({products}) => {
    return(
        <div className="ListGroup">
            {products.map(prod => <Item key ={prod.id} {...prod}/>)}
            <img src=""/>           

            
        </div>
    )
}

export default ItemList