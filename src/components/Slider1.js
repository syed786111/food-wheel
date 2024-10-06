import { Padding } from "@mui/icons-material";
import React from "react";
import Slider from "react-slick";
import "../components/Slider.css";
export const Slider1 = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
  };
  return (
    <Slider {...settings}>
      <div>
      <div className="slide-text">
          Zinger Burger
          <div>Price: 600 PKR.</div>
        </div>
        <img
          src="/images/zinger8.png"
          alt=""
          className="slide-img"
        />
      </div>
      <div>
      <div className="slide-text">
          Reggi Burger
          <div>Price: 500 PKR.</div>
        </div>
        <img
          src="/images/italianpiza.webp"
          className="slide-img"
        />
      </div>
      <div>
      <div className="slide-text">
          Reggi Burger
          <div>Price: 500 PKR.</div>
        </div>
        <img
          src="/images/italianpiza.webp"
         className="slide-img"
        />
      </div>
      <div>
      <div className="slide-text">
          Reggi Burger
          <div>Price: 500 PKR.</div>
        </div>
        <img
          src="/images/italianpiza.webp"
          className="slide-img"
        />
      </div>
      <div>
      <div className="slide-text">
          Reggi Burger
          <div>Price: 500 PKR.</div>
        </div>
        <img
          src="/images/italianpiza.webp"
         className="slide-img"
        />
      </div>
      <div>
        <div className="slide-text">
          Reggi Burger
          <div>Price: 500 PKR.</div>
        </div>
        <img
          src="/images/italianpiza.webp"
          className="slide-img"
        />
      </div>
    </Slider>
  );
};
