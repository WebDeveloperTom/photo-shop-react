import React, { useContext } from "react";
import { Context } from "../Context";
import useHover from "../hooks/useHover";

function CartItem({ item }) {
  const context = useContext(Context);
  const [hover, hoverExit, hoverEnter] = useHover();

  const hoverClass = hover ? "fill" : "line";

  return (
    <div className="cart-item">
      <i
        onMouseEnter={() => {
          hoverEnter();
        }}
        onMouseLeave={() => {
          hoverExit();
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
