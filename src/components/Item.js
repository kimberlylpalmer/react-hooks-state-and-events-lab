//import {useState}
import React, { useState } from "react";

function Item({ name, category }) {
  const [inCart, setInCart] = useState(false);
  //inCart is the current condition
  //setInCart will be used to update inCart and rerender the condidtion
  function handleAddToCart() {
    setInCart(!inCart);
  }
  //the function used to update the cart when the button is clicked

  return (
    <li className={inCart ? "in-cart" : ""}>
      {/* the className is updated to toggle between "true" and "false" depending on the state */}
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleAddToCart} className={inCart ? "remove" : "add"}>
        {inCart ? "Remove From Cart" : "Add to Cart"}
        {/* The button is calling the "handleAddToCart" fuction when it's clicked
        the className is updated according to the state of inCart
        The button visual is updated according to the state of inCart */}
      </button>
    </li>
  );
}

export default Item;
