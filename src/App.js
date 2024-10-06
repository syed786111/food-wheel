import React,{useState} from 'react'
import { Home } from './pages/Home'
import { Provider } from "react-redux";
import {store} from '../src/Store.js'
import {Button} from 'antd'
import { Router } from './components/Router.js';
import Navbar from './components/Navbar.js';
import Navbar1 from './components/Navbar1.js';
export const App = () => {
  const [oder, setOrder] = useState(false);
  
  return (
    <div>
      {oder ? <Navbar1 /> : <Navbar />}
      <div className="d-flex justify-content-between align-items-center ps-2 ps-md-5 pe-5">
            <Button type="primary" ghost onClick={() => setOrder(!oder)}>
              Order Now
            </Button>
          </div>
    
      <Provider store={store}>
      <Router >
      
       {/* <Navbar /> */}
      <Home />
      </Router>
      
      </Provider>
      
    </div>
  )
}
