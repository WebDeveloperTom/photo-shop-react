import React, { useContext } from "react";
import { Context } from "../Context";
import { getClass } from "../utils/index";
import Image from "../components/Image";
function Photos() {
  const context = useContext(Context);
  const allPhotos = context.allPhotos.map((item, index) => {
    return <Image key={item.id} img={item} className={getClass(index)} />;
  });
  return <main className="photos">{allPhotos}</main>;
}

export default Photos;
