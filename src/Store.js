import { applyMiddleware, legacy_createStore as createStore } from "redux";
//import reducers from "./Reducers/ProdutReducer";
import {rootReducer} from './Reducers/rootReducer'
import {thunk} from "redux-thunk";



// Create store with the reducers and
// apply thunk as a middleware
  export const store = createStore(rootReducer, applyMiddleware(thunk));