import React, { useState, useEffect } from "react";
const Context = React.createContext();

function ContextProvider({ children }) {
  const [allPhotos, setAllPhotos] = useState([]);
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"
    )
      .then(response => response.json())
      .then(data => setAllPhotos(data));
  }, []);

  const toggleFavourite = id => {
    const fav = allPhotos.map(item => {
      if (item.id == id) {
        item.isFavorite = !item.isFavorite;
      }
      return item;
    });
    setAllPhotos(fav);
  };

  return (
    <Context.Provider value={{ allPhotos, toggleFavourite }}>
      {children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
