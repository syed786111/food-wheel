import React, { Children, useState } from "react";
import { BrowserRouter as Router1, Routes, Route } from "react-router-dom";
import { Button, Grid, Menu, Space, theme } from "antd";

import { MenuOutlined } from "@ant-design/icons";
import "../App.css";
import SubMenu from "antd/es/menu/SubMenu";

const { useToken } = theme;
const { useBreakpoint } = Grid;

export default function Navbar1() {
  const { token } = useToken();
  const screens = useBreakpoint();

  const menuItems = [
    {
      // label: "home",
      label: (
        <a href="/Home" className="navlink">
          Home
        </a>
      ),
      key: "about",
    },
    {
      // label: "home",
      label: (
        <a href="/Services" className="navlink">
          Order
        </a>
      ),
      key: "order",
    },

    {
      // label: "about",
      label: (
        <a href="/about" className="navlink">
          About
        </a>
      ),
      key: "about",
    },
    {
      label: (
        <a href="/Login" className="navlink">
          Login
        </a>
      ),
      key: "login",
    },
    {
      label: (
        <a href="/Register" className="navlink">
          Signup
        </a>
      ),
      key: "alipay",
    },
    {
      label: <p className="navlink">Contact</p>,
      key: "contact",
      children: [
        {
          label: (
            <a href="/contact" className="navlink">
              Contact
            </a>
          ),
          key: "contact",
        },
        {
          label: "Ant Design Charts",
          key: "2",
        },
      ],
    },
    {
      label: <p className="navlink">Settings</p>,
      key: "alipay",
    },
  ];

  const [current, setCurrent] = useState("projects");
  const [toggle, setToggle] = useState(false);

  console.log("toggle is", toggle);

  const onClick = (e) => {
    setCurrent(e);
  };

  const styles = {
    container: {
      alignItems: "center",
      position: "absolute",
      display: "flex",
      justifyContent: "space-between",
      margin: "0 auto",
      padding: "0px",
      // backgroundColor:"red",
      width: "100%",
      top: "0px",

      // maxWidth: token.screenXL,
      // padding: screens.md ? `0px ${token.paddingLG}px` : `0px ${token.padding}px`
    },
    header: {
      backgroundColor: token.colorBgContainer,

      // borderBottom: `${token.lineWidth}px ${token.lineType} ${token.colorSplit}`,
      // position: "relative"
    },
    logo: {
      display: "block",
      height: token.sizeLG,
      left: "50%",
      position: screens.md ? "static" : "absolute",
      top: "50%",
      transform: screens.md ? " " : "translate(-50%, -50%)",
    },

    menu: {
      width: screens.sm ? "inherit" : token.sizeXXL,
    },
    menuContainer: {
      alignItems: "center",
      display: "flex",

      width: "100%",
    },
  };

  return (
    <>
      <div className="d-flex justify-content-between align-items-center ps-4 pe-4">
        <div>
          <img
            src="../images/foodlogo.webp"
            alt="ff"
            style={{ height: "70px", width: "70px", borderRadius: "50%" }}
          />
        </div>
        <div>
          <Menu
            style={styles.menu}
            mode="horizontal"
            items={menuItems}
            onClick={onClick}
            selectedKeys={screens.md ? [current] : ""}
            overflowedIndicator={
              <Button type="text" onClick={() => setToggle(!toggle)}>
                {toggle ? (
                  <i class="fa fa-times" aria-hidden="true"></i>
                ) : (
                  <i class="fa fa-solid fa-bars"></i>
                )}
              </Button>
            }
          ></Menu>
        </div>
      </div>

      {/* <div style={styles.container} >
          <div
            style={styles.menuContainer}
            
          >
            
            <Space>
              <img
                src="../images/foodlogo.webp"
                alt="ff"
                style={{ height: "70px", width: "70px", borderRadius: "50%" }}
              />
            </Space>
                
            
            <Menu
              style={styles.menu}
             
              mode="horizontal"
              items={menuItems}
              onClick={onClick}
              selectedKeys={screens.md ? [current] : ""}
              overflowedIndicator={
                <Button type="text" onClick={() => setToggle(!toggle)}>
                  {toggle ? (
                    <i class="fa fa-times" aria-hidden="true"></i>
                  ) : (
                    <i class="fa fa-solid fa-bars"></i>
                  )}
                </Button>
              }
            >
              
            </Menu>
           
            
            
           
          </div>

          
        </div> */}
    </>
  );
}

{
  /* <Space>
            {screens.md ? <Button type="text">Log in</Button> : ""}
            {screens.md ? <Button type="primary">Sign up</Button> : ""}
          </Space> */
}
