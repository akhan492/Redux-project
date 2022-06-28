import "./Product.css";
import React, { Suspense, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../Redux/Shoping/action";
import { Rings } from "react-loader-spinner";
import Cart from "./Cart";
const Spinner = React.lazy(() => import("./Spinner"));
function ProductCard({ product }) {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.shop);
  const [index, setIndex] = useState(20);
  const moreData = () => {
    return index < product.length && setIndex(index + 20);
  };
  //   console.log(isLoading);
  return (
    <>
      {/* <Cart/> */}
      <h1 className="product__heading">products</h1>
      {/* <div className="porducts" > */}
        {isLoading ? (
          
          <Rings
              color="blue"
              height={80}
              width={80}
              ariaLabel="loading"
            />

        ) : ( 
          <div className="porducts">
          {
          product.slice(0, index).map((item) => (
            
            <div key={item.id}>
              <img className="card"
                src={item.category.image}
                alt={item.category.name}
                width={200}
                height={200}
              />
              <p>{item.title}</p>
              <em>{item.category.name}</em>
              <strong> $ {item.price}</strong>
              <br />
              <button onClick={() => dispatch(addToCart(item.id))}>
                Add to cart
              </button>
            </div>
          ))
}
</div>
          )
          }
          {/* </div> */}
      <button onClick={moreData}>Load More</button>
    </>
  );
}
export default ProductCard;
