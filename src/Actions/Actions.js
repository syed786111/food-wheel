import axios from "axios";

import {SET_PRODUCTS}from '../types/productTypes.js'
import {SET_USERS}from '../types/productTypes.js'
import {SET_COUNTER}from '../types/productTypes.js'
//import { Users } from "../pages/Users.js";
export const fetchUsers = () => {

  return async function (dispatch,getState) {
    const response = await axios.get(
      "http://localhost/ReactApps/food-web/UserList.php"
    );
    //state.transactions= response.data.data
    console.log(response.data);
    dispatch(setUsers(response.data));
  };
};
export const setUsers = (users = null) => {
  if (users) {
    return { type: SET_USERS, payload: users };
  }
};
export const fetchProducts = () => {

  return async function (dispatch,getState) {
    const response = await axios.get(
      "http://localhost/ReactApps/foodwheel/Product.php"
    );
    //state.transactions= response.data.data
    console.log(response.data);
    dispatch(setProducts(response.data));
  };
};
export const setProducts = (products = null) => {
  if (products) {
    return { type: SET_PRODUCTS, payload: products };
  }
};
export const addToCart=(data)=>{
  console.log("action",data)
  return {
    type:"ADD-TO-CART",
    data:data
  }
}
export const IncNUmber = (num =1) => {
  return { type: "ADD", payload: num }; // num is incerment(1) on each call
};
export const DecNUmber = (num =1) => {
  return { type: "SUB", payload: num }; // num is decremnet(1) on each call
};
// export const setCounter=(counter = 0)=>{
//   return {type:SET_COUNTER,payload:counter}
// }
