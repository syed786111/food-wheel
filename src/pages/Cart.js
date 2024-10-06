import React from 'react'
import { OrderCart } from './OrderCart';
import { useDispatch,useSelector } from 'react-redux'

export const Cart = ({cartItems,
  addtocart,removeitem}) => {
 // const dispatch=useDispatch()
  //const CartItem= useSelector((state)=> state.CartReducer)
 // console.log("in cart cartitem",CartItem)
  const CalculateTotal=(cartItems) => 
    cartItems.reduce((ack,item)=> ack + item.amount * item.price,0);
    const GrossTotal=CalculateTotal(cartItems).toFixed(2);
   
   
  return (<>
  
  <div className='cart ps-2 pe-2'>
  <p>
    {
      cartItems?.length === 0 ? "cart is empty" : ""
    }
  </p>
        {
            cartItems?.map(el=>{
              //  const {productId,name,image}= el;
                return(<>
                <OrderCart item={el} key={el.productId} 
                addtocart={addtocart}
                //addtocart={()=>
                //dispatch(addToCart({el}))}
                removeitem={removeitem}
                />
                {/* <div key={el.productId} >
                    <div>
                    id:{el.productId}
                    Nmae: {el.name}
                    price:{el.price}
                    </div>
                    <div>
                        <img src={el.image } alt=" " height="100" width="100" />
                        <div>
                    <button onClick={()=> addtocart(el)}>
                    add
                </button>
                    </div>
                    </div>
                    
                   
                </div> */}
                
                </>)
            })
        }
        <h2>
                Gross Total:{GrossTotal}
             </h2>
    </div>
  </>
    
  )
}
