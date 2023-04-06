import { Catalog } from "./components/Catalog";

import {Provider} from 'react-redux'
import store from "./store";


export function App() {
  return (
    <>
      <Provider store={store}>
        <Catalog/>
      </Provider>
    </>
  )
}
  
