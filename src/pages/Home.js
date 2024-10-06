import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProducts,
  
  IncNUmber,
  DecNUmber,
  addToCart,
} from "../Actions/Actions";
import IconButton from "@mui/material/IconButton";
import { Button } from "antd";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Drawer } from "@mui/material";
import Badge from "@mui/material/Badge";
import ReactPaginate from "react-paginate";

import "./Home.css";
//import { Button } from 'bootstrap'
import { Cart } from "./Cart";
import { Items } from "./Items";
import Navbar from "../components/Navbar";
import { Slider1 } from "../components/Slider1";
import Navbar1 from "../components/Navbar1";
import { useNavigate } from "react-router-dom";
export const Home = () => {
  const navigate = useNavigate();
  const [openDrawer, setOpenDrawer] = useState(false);
  const [cart, setCart] = useState([]);
  const [data, setData] = useState([]);
  const [cartItem, setCartItem] = useState([]);
  const [oder, setOrder] = useState(false);
  const [itemOffset, setItemOffset] = useState(0);

  const [forcePage, setForcePage] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [limit, setLimit] = useState(5);
  const [itemsPerPage, setItemsPerPage] = useState(limit);
  const [pageCount, setPageCount] = useState(0);
  const [currentItems, setCurrentItems] = useState([]);
  // const [itemsPerPage,setItemsPerPage]  = useState(limit)
  console.log(cart);
  const dispatch = useDispatch();
  const products = useSelector((state) => state.data); // data is name of first reducer
  const counter = useSelector((state) => state.CountReducer);
  //const CartItem= useSelector((state)=> state.CartReducer)
  //console.log("home cartitem",CartItem)
  //const CartItem= useSelector((state)=> state.CartReducer)
  //console.log("home cartitem cart item",CartItem)
  // counterReducer is the name of second reducer
  console.log("counter is", counter.count);

  console.log(products);
  useEffect(() => {
    changeUrl();
  }, [limit]);
  // useEffect(()=>{
  //   navigate("home/?limit=5&&offset=0");

  // },[])
  const changeUrl = () => {
    navigate({
      pathname: "/home",
      search:
        "?" +
        new URLSearchParams({ limit: limit }).toString() +
        "&&" +
        new URLSearchParams({ offset: itemOffset }).toString(),
    });
  };

  useEffect(
    (e) => {
      // Fetch items from another resources.
      const endOffset = parseInt(itemOffset) + parseInt(itemsPerPage);
      console.log(endOffset);
      console.log(`Loading items from ${itemOffset} to ${endOffset}`);
      // const current=items
      // console.log(current)
      console.log(data.slice(itemOffset, endOffset));

      setCurrentItems(data.slice(itemOffset, endOffset));
      //setCurrentItems(items.slice(5, 10));
      setPageCount(Math.ceil(data.length / limit));
    },
    [itemOffset, limit, currentItems, itemsPerPage]
  );

  const handleRemoveFromCart = (id) => {
    setCartItem((prev) =>
      prev.reduce((ack, item) => {
        if (item.productId === id) {
          if (item.amount === 1) return ack; // empty array
          return [...ack, { ...item, amount: item.amount - 1 }];
        } else {
          return [...ack, item];
        }
      }, [])
    );
  };
  const handleAdd1 = (el, productId) => {
    // let obj=cart.find(item => item.productId === productId);
    // if(obj){
    //   return cart; // true line
    // }
    // return setCart([...cart,el]) // true line axact
  };
  const handleAddToCart = (clickedItem) => {
    //setOpenDrawer(true)
    setCartItem((prev) => {
      // console.log("items in cart",[...prev])
      const isItemInCart = prev.find(
        (item) => item.productId === clickedItem.productId
      );
      if (isItemInCart) {
        return prev.map((item) =>
          item.productId === clickedItem.productId
            ? { ...item, amount: item.amount + 1 }
            : item
        );
      }
      return [...prev, { ...clickedItem, amount: 1 }];
    });
  };

  useEffect(() => {
    dispatch(fetchProducts());
    setData(products);
    // dispatch(addToCart(data))
  }, [products]);
  const CalculateTotal = (items) =>
    items.reduce((ack, item) => ack + item.amount, 0);
  const CalculateTotal1 = (items) =>
    items.reduce((ack, item) => ack + item.amount, 0);
  console.log("order is", oder);

  const handlePageClick = (event) => {
    let selected = event && event.selected;
    console.log(event.selected);
    console.log(selected);
    //    setCouter(selected)
    //  setCurrentPage(parseInt(event&& event.selected))

    setForcePage(selected);

    const newOffset = parseInt(selected) * limit;

    console.log("newOffset", newOffset);
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);

    navigate({
      pathname: "/home",
      search:
        "?" +
        new URLSearchParams({ limit: limit }).toString() +
        "&&" +
        new URLSearchParams({ offset: newOffset }).toString(),
    });
  };
  const handleLimit = (e) => {
    e.preventDefault();
    setLimit(e.target.value);
    setItemOffset(0);

    setItemsPerPage(e.target.value);
    setForcePage(0);
    setCurrentPage(0);
  };
  return (
    <>
      {/* {oder ? <Navbar1 /> : <Navbar />} */}

      <header className="contents header">
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
          
          <div>
            <IconButton
              aria-label="cart"
              onClick={() => setOpenDrawer(true)}
              style={{
                position: "absolute",
                top: "-30px",
                left: "90%",
                right: "20px",
              }}
            >
              <Badge
                badgeContent={CalculateTotal(cartItem).toFixed(0)}
                color="secondary"
              >
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
          </div>
        </div>
      </header>
      <div
        className="slider-box"
      >
        <Slider1 />
      </div>
      {/* <Slider1 /> */}
      {/* <div style={{marginBottom:"30px"}}>
        <p>{counter.count}</p>
                <a title="increment" onClick={() => dispatch(IncNUmber())}>add</a>
        <a title="decrement" onClick={() => dispatch(DecNUmber())}>Decrement</a>
        
        </div> */}

      <div className="wrapper mt-5">
        {currentItems?.map((el) => (
          // const {productId,name,image} = el;
          <Items item={el} addtocart={handleAddToCart} key={el.productId} />
        ))}
      </div>
      <Drawer
        anchor="right"
        onClose={() => setOpenDrawer(false)}
        open={openDrawer}
        PaperProps={{
          sx: {
            height: 700,
            marginTop: "110px",
          },
        }}
      >
        {/* <Cart cartItems={cartItem} addtocart={handleAddToCart}
removeitem={handleRemoveFromCart}

 /> */}
        <Cart
          cartItems={cartItem}
          addtocart={handleAddToCart}
          removeitem={handleRemoveFromCart}
        />
      </Drawer>
      <ul
        className="d-flex flex-wrap justify-content-center"
        style={{ marginTop: "100px", listStyle: "none" }}
      >
        <li style={{ position: "relative", top: "10px", left: "-20px" }}>
          <select
            style={{ height: "50px" }}
            //  value={limit}
            name="limit"
            //  placeholder={placeholder}
            onChange={(e) => handleLimit(e)}
          >
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
          </select>
        </li>
        <li style={{ position: "relative", top: "10px" }}>
          <div>
            <ReactPaginate
              // className='d-flex flex-wrap p-0'
              pageClassName="page-item"
              pageLinkClassName="page-link"
              previousClassName="page-item"
              previousLinkClassName="page-link"
              nextClassName="page-item"
              nextLinkClassName="page-link"
              breakClassName="page-item"
              breakLabel="..."
              nextLabel="   >"
              itemsPerPage={itemsPerPage}
              onPageChange={(event) => handlePageClick(event)}
              pageRangeDisplayed={null}
              forcePage={forcePage}
              pageCount={pageCount}
              previousLabel="<     "
              renderOnZeroPageCount={null}
              breakLinkClassName="page-link"
              containerClassName="pagination"
              activeClassName="active"
            />
          </div>
        </li>
      </ul>
    </>
  );

  // )
};
