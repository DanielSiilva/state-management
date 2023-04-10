// Aqui vai ficar todo o codigo de gerenciamento de estado

import { createStore, applyMiddleware } from "redux";
import rootReducer from "./modules/rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from 'redux-saga'

import { ICartState } from "./modules/cart/types";
import rootSaga from "./modules/rootSaga";

export interface IState {
    cart: ICartState
}

const sagaMiddleware = createSagaMiddleware()

const middleware = [sagaMiddleware]


const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(
            ...middleware
        )
    )
);

//composeWithDevTools  p/ usarmos a extensão no navegador e analizar as ações do redux

sagaMiddleware.run(rootSaga)

export default store;