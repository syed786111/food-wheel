import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export const Home1 = () => {
    const navigate= useNavigate()
   
    useEffect(()=>{
        navigate({
            pathname: "/home",
            search:
              "?" +
              new URLSearchParams({ limit: 5 }).toString() +
              "&&" +
              new URLSearchParams({ offset: 0 }).toString(),
          });
    },[])
  return (
    <div></div>
  )
}
