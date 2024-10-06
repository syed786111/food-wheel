import React from "react";
import { BrowserRouter as Router1, Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { About } from "../pages/About";
import { Contact } from "../pages/Contact";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { Services } from "../pages/Services";
import { List } from "../components/List";
import { Home1 } from "../pages/Home1";
import { Users } from "../pages/Users";

export const Router = () => {
  return (
    <div>
      <Router1>
        {/* <Appbar2  /> */}

        <Routes>
          <Route exact path="/Home" element={<Home />} />
          <Route exact path="/Home1" element={<Home1 />} />

          <Route exact path="/" element={<List />} />
          <Route path="/Users" exact element={<Users />} />

          <Route path="/About" exact element={<About />} />
        
          <Route path="/Services" exact element={<Services />} />

          <Route exact path="/Register" element={<Register />}></Route>

          <Route exact path="/contact" element={<Contact />}></Route>
          <Route exact path="/login" element={<Login />} />
        </Routes>
      </Router1>
    </div>
  );
};
