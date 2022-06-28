import React from "react";
import { useSelector } from "react-redux";
import {Link } from "react-router-dom"

const Navbar = () => {
  const { cart } = useSelector((state) => state.shop);
  return <nav className="navbar"><h1>My Shopping Cart</h1> <p>Cart item {cart.length}</p> <Link to="/cart">GO TO CART</Link> </nav>;
};

export default Navbar;
