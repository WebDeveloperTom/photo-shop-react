import React, { useContext } from "react";
import { Context } from "../Context";
import { Link } from "react-router-dom";

function Header() {
  const context = useContext(Context);
  return (
    <header>
      <h2>
        <Link to="/">Pic Some</Link>
      </h2>
      <Link to="/cart">
        {context.cart.length > 0 ? (
          <i className="ri-shopping-cart-fill ri-fw ri-2x"></i>
        ) : (
          <i className="ri-shopping-cart-line ri-fw ri-2x"></i>
        )}
      </Link>
    </header>
  );
}

export default Header;
