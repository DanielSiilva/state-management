// Aqui vai ficar todo o codigo de gerenciamento de estado

import { createStore } from "redux";
import rootReducer from "./modules/rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";

import { ICartState } from "./modules/cart/types";

export interface IState {
    cart: ICartState
}


const store = createStore(
    rootReducer,
    composeWithDevTools()
);

//composeWithDevTools  p/ usarmos a extensão no navegador e analizar as ações do redux

export default store;