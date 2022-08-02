import './ItemDetail.css'

const ItemDetail =(product)=>{
    return(
    <div className="detalle" key={product.id}>
        <h3>{product.name}</h3> 
        <img src={product.img}></img>
        <p>Stock: {product.stock}</p>
        <button className="botonProducto">Ver detalles</button>
        <p>${product.price}</p>
    </div>
    )
}

export default ItemDetail
