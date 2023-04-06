// Aqui vai ficar todo o codigo de gerenciamento de estado

import { createStore } from "redux";
import rootReducer from "./modules/rootReducer";

const store = createStore(rootReducer);

export default store;