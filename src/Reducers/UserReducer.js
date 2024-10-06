// import { SET_PRODUCTS } from "../types/productTypes.js";
// import { combineReducers } from 'redux'
export const InitilalState=[]
    

// export const InitilalState={cart:[],
//     counter:0
// };

 export const UserReducer=(state=InitilalState,action)=> {
    switch(action.type){
        case "SET_USERS":
        return [...action.payload]
      //  return {...state.cart,...action.payload}
        default:
            return state;

    }

} 
