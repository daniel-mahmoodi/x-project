import React from "react";

const CardContext = React.createContext({
  toggleHidden: true,
  hasHidden: () => {},
  // toggleMouse: false,
  // hasMousOver: () => {},
  // hasMousOut: () => {},
});
export default CardContext;
