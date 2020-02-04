import React, { useContext, useState } from "react";
import { Context } from "../Context";

function CartItem({ item }) {
  const context = useContext(Context);
  const [hover, setHover] = useState(false);

  const hoverClass = hover ? "fill" : "line";

  return (
    <div className="cart-item">
      <i
        onMouseEnter={() => {
          setHover(true);
        }}
        onMouseLeave={() => {
          setHover(false);
        }}
        onClick={() => {
          context.removeFromCart(item);
        }}
        className={`ri-delete-bin-${hoverClass}`}
      ></i>
      <img src={item.url} width="130px" alt="" />
      <p>$5.99</p>
    </div>
  );
}

export default CartItem;
