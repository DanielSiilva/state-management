// Aqui vai ficar todo o codigo de gerenciamento de estado

import { createStore } from "redux";
import rootReducer from "./modules/rootReducer";
import { ICartState } from "./modules/cart/types";

export interface IState {
    cart: ICartState
}


const store = createStore(rootReducer);

export default store;