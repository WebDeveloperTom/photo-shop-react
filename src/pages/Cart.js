import React, { useContext, useState } from "react";
import { Context } from "../Context";
import CartItem from "../components/cartItem";

function Cart() {
  const [order, setOrder] = useState(false);
  const context = useContext(Context);

  const cartItems = context.cart.map(item => {
    return <CartItem key={item.id} item={item} />;
  });

  const total = cartItems.length * 5.99;

  const placeOrder = () => {
    setOrder(true);
    setTimeout(() => {
      console.log("Order Placed");
      setOrder(false);
      context.setCart([]);
    }, 3000);
  };

  return (
    <main className="cart-page">
      <h1>Check out</h1>
      {cartItems}
      <p className="total-cost">
        Total:{" "}
        {total.toLocaleString("en-US", { style: "currency", currency: "USD" })}{" "}
      </p>
      <div className="order-button">
        {cartItems.length > 0 ? (
          <button disabled={order} onClick={placeOrder}>
            {order ? "Ordering..." : "Place Order"}
          </button>
        ) : (
          <p>It's empty here...</p>
        )}
      </div>
    </main>
  );
}

export default Cart;
