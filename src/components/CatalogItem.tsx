import { useCallback } from "react";
import { IProduct } from "../store/modules/cart/types"
import { addProductToCartRequest } from "../store/modules/cart/actions";
import { useDispatch } from "react-redux";

interface CatalogItemProps {
    product: IProduct;
}

export function CataloItem({product}: CatalogItemProps){
    const dispatch = useDispatch();

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

        </article>
    )
}

function dispatch(arg0: any) {
    throw new Error("Function not implemented.");
}
