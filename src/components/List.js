import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export const List = () => {
   const navigate=useNavigate()
   useEffect(()=>{
    navigate({
        pathname: "/users",
        search:
          "?" +
          new URLSearchParams({ limit: 5 }).toString() +
          "&&" +
          new URLSearchParams({ offset: 0 }).toString(),
      });
},[])
  return (
    <div>list</div>
  )
}
