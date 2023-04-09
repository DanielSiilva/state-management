import { useEffect, useState } from "react"
import { IProduct } from "../store/modules/cart/types"
import api from "../service/api"

import { CataloItem } from "./CatalogItem";


export function Catalog (){
    const [catalog, setCatalog] = useState<IProduct[]>([])



    useEffect(()=> {
        api.get('/products').then(response => {
            setCatalog(response.data)
        })
    }, [])

    
    return (
        <main>
            <h1>Catalog</h1>

            {catalog.map(product => (
                <CataloItem key={product.id} product={product}/>
            ))}
        </main>
    )
}