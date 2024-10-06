

const initialState={
    cardData:[]
}
export default function CartItems(state=initialState,action){
    switch(action.type){
        case "ADD-TO-CART":
            console.log("reducer",action)
          //  const isOld = state.cardData.find(item => item.productId === action.data.productId)
          //  if(isOld){
                return {
                    ...state,
                    //state.cart.map(item=> item.productId===clickedItem.productId?{...item,amount:item.amount +1}: item)
                    cardData: [{ ...action.data, quantity1: action.data.quantity1 + 1 }]
                }
           // }
           // else {
                return {
                    ...state,
                    // return [...prev,{...clickedItem,amount:1}]
                    cardData: [{ ...action.data, quantity1: 1 }]
                    // quantity:1
                }
    
    
          //  }
            // return [
            //     ...state,
            //     {cardData: action.data}
            // ]
            default:
                return state;
    }
}