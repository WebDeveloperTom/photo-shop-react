import React, { useState, useEffect } from "react";
const { Provider, Consumer } = React.createContext();

function ContextProvider({ children }) {
  const [allPhotos, setAllPhotos] = useState([]);
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"
    )
      .then(response => response.json())
      .then(data => setAllPhotos(data));
  }, []);

  console.log(allPhotos);

  return <Provider value={{ allPhotos }}>{children}</Provider>;
}

export { ContextProvider, Provider, Consumer };
