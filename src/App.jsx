import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Products } from "./Redux/Shoping/action";
import ProductCard from "./component/ProductCard";
import Navbar from "./component/Navbar";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const { product } = useSelector((state) => state.shop);

  useEffect(
    () => async () => {
      const res = await fetch("https://api.escuelajs.co/api/v1/products");
      const data = await res.json();
      dispatch(Products(data));
    },
    []
  );

  return (
    <>
      {/* <h1>App</h1> */}

      <Navbar />
      <ProductCard product={product} />
    </>
  );
}

export default App;
