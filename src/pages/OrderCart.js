import React ,{useState} from 'react'
import { fetchProducts,IncNUmber,DecNUmber,addToCart } from '../Actions/Actions'
export const OrderCart = ({item,addtocart,removeitem}) => {
    const [Oamount,setOamount]= useState(item.amount * item.price)
   const [pid,setPid] =useState(item.productId)
   const [quantity,setQuantity] =useState(item.amount)
  return (
    <div>
         <div style={{marginLeft:"0px",width:"100%"}} className='cartItem'>
            <h5>Name:{item.name}</h5>
            <h5>Pid:{item.productId}
            
            </h5>
            <div className="information">
            <p>price: PKR.{item.price}</p>
            <p>Quantity:{item.amount}</p>
            <p>Total: PKR{item.amount * item.price}</p>
            </div>
        </div>
        <div>
        <button onClick={()=>addtocart(item)}
            className='btn btn-sm btn-success'
            >
            +
        </button>
        {item.amount}
        <button onClick={()=>removeitem(item.productId)}
             className='btn btn-sm btn-danger'
            >
            -
        </button>
        </div>
        
    </div>
  )
}
