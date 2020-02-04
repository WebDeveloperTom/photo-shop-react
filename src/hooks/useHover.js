import { useState } from "react";

function useHover() {
  const [hover, setHover] = useState(false);
  function hoverEnter() {
    setHover(true);
  }
  function hoverExit() {
    setHover(false);
  }
  return [hover, hoverExit, hoverEnter];
}

export default useHover;
