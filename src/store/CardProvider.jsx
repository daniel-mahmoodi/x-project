import { useState } from "react";
import CardContext from "./card-context";

const CardProvider = (props) => {
  const [hideReactions, setHideReactions] = useState(true);
  // const [transForm, setTransForm] = useState(false);

  // const hasOnMousOverHandler = () => {
  //   setTransForm(true);
  //   console.log("hasOnMousOverHandler");
  // };
  // const hasOnMousOutHandler = () => {
  //   setTransForm(false);
  //   console.log("hasOnMousOutHandler");
  // };
  const hasHiddenHandler = () => {
    setHideReactions(() => !hideReactions);
  };
  const cardContext = {
    toggleHidden: hideReactions,
    hasHidden: hasHiddenHandler,
    // toggleMouse: transForm,
    // hasMousOver: hasOnMousOverHandler,
    // hasMousOut: hasOnMousOutHandler,
  };
  return (
    <CardContext.Provider value={cardContext}>
      {props.children}
    </CardContext.Provider>
  );
};
export default CardProvider;
