import { useCallback } from "react";
import { IProduct } from "../store/modules/cart/types"
import { addProductToCartRequest } from "../store/modules/cart/actions";
import { useDispatch, useSelector } from "react-redux";
import { IState } from "../store";

interface CatalogItemProps {
    product: IProduct;
}

export function CataloItem({product}: CatalogItemProps){
    const dispatch = useDispatch();

    const hasFailedStockCheck = useSelector<IState, boolean>(state =>{
        return state.cart.failedStockCheck.includes(product.id)
    })

    const handleAddProductToCart = useCallback(() => {
        dispatch(addProductToCartRequest(product))
    }, [dispatch, product])

    return (
        <article key={product.id}>
            <strong>{product.title}</strong> {" - "}
            <span>{product.price}</span> {'  '}

            <button 
                type="button"
                onClick={handleAddProductToCart}
            > 
                Comprar
            </button>

            {hasFailedStockCheck && 
                <span style={{color: 'red'}}> Falta de estoque </span>
            }

        </article>
    )
}

function dispatch(arg0: any) {
    throw new Error("Function not implemented.");
}
