import React, { useEffect } from "react";
import { removeFromCart, adjustQty } from "../Redux/Shoping/action";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { Link } from "react-router-dom";

function Cart() {
  const dispatch = useDispatch();

  const { cart } = useSelector((state) => state.shop);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);
  return (
    <div className="cart_page">
      <h3>
        <Link to="/">Home Page</Link>
      </h3>
      <h2>Cart</h2>
      <div className="cart_items">
        {cart &&
          cart.map((item) => (
            <div className={item.id}>
              <div>
                <img src={item.category.image} width={200} />
                <h1>{item.title}</h1>
                <strong>
                  <p> ${item.price}</p>
                </strong>
                <div className="cartItem__qty">
                  <button onClick={()=>dispatch(adjustQty(item.id))}>+</button>
                 {item.qty}
                 <button onClick={()=> item.qty > 1 && dispatch({type:"DEC",
                 
                payload: item})}>-</button>
                </div>
                <button onClick={() => dispatch(removeFromCart(item.id))}>
                  Remove from cart
                </button>
              </div>
            </div>
          ))}
      </div>
      <h1>
        <strong>
          {" "}
          Total price ${/* {total} */}
          
          {cart.reduce((acc, item) => acc + item.price * item.qty, 0)}
        </strong>
      </h1>
    </div>
  );
}
export default Cart;
