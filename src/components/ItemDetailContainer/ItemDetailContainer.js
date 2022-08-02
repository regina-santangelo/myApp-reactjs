import { useState, useEffect } from "react"
import { getItem } from "../../asyncMock"
import ItemDetail from "../ItemDetail/ItemDetail"
import './ItemDetailContainer.css'


const ItemDetailContainer = (props)=> {
    const [products, setProducts]= useState([])
    const [loading , setLoading] = useState(true)

    useEffect(()=>{
        getItem().then(response =>{
            setProducts(response)
        }).catch(error =>{
            console.log('error')
        }).finally(()=>{
            setLoading(false)
        })
    }, [])

    if(loading){
        return <h2>Espera mientras cargamos los productos...</h2>
    }
        
    return(
       <ItemDetail/>
    )
}

export default ItemDetailContainer