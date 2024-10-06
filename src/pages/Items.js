import React,{useState} from 'react'
import './Home.css'
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Drawer } from '@mui/material'
import Badge from '@mui/material/Badge';
import { useDispatch,useSelector } from 'react-redux'
//import { fetchProducts,IncNUmber,DecNUmber,addToCart } from '../Actions/Actions'
import { Cart } from './Cart';
 export const Items = ({item,addtocart}) => {
  //export const Items = ({item}) => {
    const dispatch= useDispatch()
    const [openDrawer, setOpenDrawer] = useState(false)
    const CartItem= useSelector((state)=> state.CartReducer)
  console.log("home cartitem",CartItem)
  const CalculateTotal1=() => 
    CartItem.reduce((ack,item)=> ack + item.amount ,0);
  return (<>
  <div >
  
        
  {/* <IconButton aria-label="cart" onClick={() => setOpenDrawer(true)} style={{
          position:"absolute",top:"110px",left:"90%",right:"20px"
        }}>
                <Badge badgeContent={()=>CalculateTotal1(CartItem).toFixed(0)} color="secondary">
                    <ShoppingCartIcon />
                </Badge>
            </IconButton> */}
   <div key={item.productId} className='item mb-4 me-4 d-flex flex-row 
   flex-md-row justify-content-between 
        aligh-items-center'>
          <div>
           id: {item.productId}
           Name:{item.name}
          
           </div>
             <div>
                <img src={item?.image} alt="" height="100" width="100" />
                <div className='d-flex  flex-row judtify-content-center'>
               <button className='btn btn-sm btn-success mt-4'
               onClick={()=>addtocart(item)}
             // onClick={()=>dispatch(addToCart({item}))}
               >Add to cart</button>

           </div>
             </div>
             </div>
            
        
        {/* )
    }
    ) */}
    
  </div>

  </>
   
        
  )
}
