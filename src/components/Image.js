import React, { useState, useContext } from "react";
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
  const plusIcon = hover && <i className="ri-add-circle-line cart"></i>;

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
      {plusIcon}
      <img src={img.url} alt="" className="image-grid" />
    </div>
  );
}

export default Image;
