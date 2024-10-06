import { combineReducers } from "redux";
import { CountReducer } from "../Reducers/CounterReducer";
import {ProductReducer} from "../Reducers/ProductReducer"
import CartItems from '../Reducers/AddToCartreducer'
import { UserReducer } from "./UserReducer";

export const rootReducer = combineReducers({
  CountReducer: CountReducer,
  data:ProductReducer,
  users:UserReducer,
  CartReducer: CartItems
});