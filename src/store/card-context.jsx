import React from "react";

const CardContext = React.createContext({
  toggleHidden: true,
  hasHidden: () => {},
});
export default CardContext;
