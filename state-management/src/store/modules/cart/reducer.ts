import { Reducer } from "redux";
import {ICartState } from "./types";

import produce from "immer";

const INITIAL_STATE:ICartState ={
    items: []
}


const cart: Reducer<ICartState> = ( state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'ADD_PRODUCT_TO_CART':{
            const {product} = action.payload

            return produce(state, draft => {
                draft.items.push({
                    product,
                    quantity: 1,
                })
            });

            // return {
            //     ...state, 
            //     items: [
            //         ...state.items,{
            //             product,
            //             quantity: 1
            //         }
            //     ]
            // };

        }
        default:{
            return state
        }
    }
     
}


export default cart;