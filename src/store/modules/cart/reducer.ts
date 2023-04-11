import { Reducer } from "redux";
import {ActionTypes, ICartState } from "./types";

import produce from "immer";

const INITIAL_STATE:ICartState ={
    items: [],
    failedStockCheck: [],
}

//Todas as regras de negocio devem ficar no reducer, jamais nas actions
const cart: Reducer<ICartState> = ( state = INITIAL_STATE, action) => {
    return produce(state, draft =>{
        switch(action.type){
            case ActionTypes.addProductToCartSuccess:{
                const {product} = action.payload

                const productInCartIndex = draft.items.findIndex(item =>
                    item.product.id === product.id,
                );
                 
                if(productInCartIndex >= 0){
                    draft.items[productInCartIndex].quantity++;
                }else{
                    draft.items.push({
                        product,
                        quantity: 1,
                    })
                }

                //Trabalhando com imutabilidade sem immer 

                // return {
                //     ...state, 
                //     items: [
                //         ...state.items,{
                //             product,
                //             quantity: 1
                //         }
                //     ]
                // };
                break;
            }
            case ActionTypes.addProductToCartFailure:{
                draft.failedStockCheck.push(action.payload.productId)
                break;
            }
            default:{
                return state
            }
        }
    })
}


export default cart;