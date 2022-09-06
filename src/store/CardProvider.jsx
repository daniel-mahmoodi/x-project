import { useState } from "react";
import CardContext from "./card-context";

const CardProvider = (props) => {
  const [hideReactions, setHideReactions] = useState(true);
  const hasHiddenHandler = () => {
    setHideReactions(() => !hideReactions);
  };
  const cardContext = {
    toggleHidden: hideReactions,
    hasHidden: hasHiddenHandler,
  };
  return (
    <CardContext.Provider value={cardContext}>
      {props.children}
    </CardContext.Provider>
  );
};
export default CardProvider;
