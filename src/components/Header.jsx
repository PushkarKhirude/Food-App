import React from "react";
import "./Header.css";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
  const cartItems = useSelector((store) => store.cart.items);
  //console.log(cartItems);

  return (
    <div className="header  border-b border-b-amber-200 sticky top-0 z-50 bg-white shadow-md">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="app-logo" />
      </div>

      <div className="nav-items font-bold text-lg w-9/12 md:text-2xl md:w-7/12 ">
        <div className="flex justify-between h-full text-center">
          <div className=" w-full my-auto  cursor-pointer bg-amber-100 hover:bg-amber-500  rounded-lg py-2 mx-2">
            <Link to="/">Home</Link>
          </div>
          <div className=" w-full my-auto cursor-pointer bg-amber-100 hover:bg-amber-500  rounded-lg py-2 mx-2">
            <Link to="/contact">Contact Us</Link>
          </div>
          <div className="borer w-full my-auto cursor-pointer bg-amber-100 hover:bg-amber-500  rounded-lg py-2 mx-2">
            <Link to="/cart">Cart ({cartItems.length})</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
