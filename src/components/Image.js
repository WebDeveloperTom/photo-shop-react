import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../Context";

function Image({ className, img }) {
  const context = useContext(Context);
  const [hover, setHover] = useState(false);

  const heartIcon = hover && (
    <i
      onClick={() => {
        context.toggleFavourite(img.id);
      }}
      className="ri-heart-line favorite"
    ></i>
  );
  const fillHearIcon = hover && (
    <i
      onClick={() => {
        context.toggleFavourite(img.id);
      }}
      className="ri-heart-fill favorite"
    ></i>
  );

  const inCart = img => {
    const inCart = context.cart.some(item => item.id === img.id);
    if (inCart) {
      return (
        <i
          onClick={() => {
            context.removeFromCart(img);
          }}
          className="ri-shopping-cart-fill cart"
        ></i>
      );
    } else if (hover) {
      return (
        <i
          onClick={() => {
            context.addToCart(img);
          }}
          className="ri-add-circle-line cart"
        ></i>
      );
    }
  };

  return (
    <div
      className={`${className} image-container`}
      onMouseEnter={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
    >
      {img.isFavorite ? fillHearIcon : heartIcon}
      {inCart(img)}
      <img src={img.url} alt="" className="image-grid" />
    </div>
  );
}
Image.propTypes = {
  className: PropTypes.string,
  img: PropTypes.shape({
    id: PropTypes.string,
    url: PropTypes.string,
    isFavorite: PropTypes.bool
  }).isRequired
};

export default Image;
