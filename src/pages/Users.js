
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import '../pages/Users.css';
import ReactPaginate from "react-paginate";
import {
  fetchUsers
} from "../Actions/Actions";
import { useNavigate } from "react-router-dom";
export const Users = () => {
    const navigate= useNavigate()
    const [data,setData]= useState([])
    const [itemOffset, setItemOffset] = useState(0);

  const [forcePage, setForcePage] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [limit, setLimit] = useState(5);
  const [itemsPerPage, setItemsPerPage] = useState(limit);
  const [pageCount, setPageCount] = useState(0);
  const [currentItems, setCurrentItems] = useState([]);
    console.log("users are ",data)
    const dispatch = useDispatch();
    const users = useSelector((state) => state.users); // data is name of first reducer
   console.log(users)
   useEffect(() => {
    dispatch(fetchUsers());
    setData(users);
    // dispatch(addToCart(data))
  }, [users]);
  useEffect(() => {
    changeUrl();
  }, [limit]);
  // useEffect(()=>{
  //   navigate("home/?limit=5&&offset=0");

  // },[])
  const changeUrl = () => {
    navigate({
      pathname: "/users",
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
      pathname: "/users",
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
     <div className="">
     <table className="user_table">
                <tbody>
                    <tr
                    style={{ border: "2px solid gray",padding:"10px 0 10px 10px" }}
                    >
                        <td style={{paddingLeft:"20px"}}>userId</td>
                        <td>Name</td>
                        <td>Email</td>
                        <td>image</td>
                    </tr>
        {
        currentItems.map(user=>{
            const {userId,name,email,image}= user;
            return (<>
            
               
            <tr key={userId}
            style={{ border: "2px solid gray" }}
            >
                <td style={{paddingLeft:"20px"}}>{userId}</td>
                <td>{name}</td>
                <td>{email}</td>
                <td>
                    <img src={image} alt="" style={{width:"100px",height:"100px",
                        borderRadius:"50%"}} />
                    
                </td>

            </tr>

            </>)
        })
}
</tbody>
</table>
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
</div>
    </>
   
  )
}
