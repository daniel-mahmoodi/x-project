import React, { useContext } from "react";
import { BsThreeDots } from "react-icons/bs";
import CardContext from "../../store/card-context";
import classes from "./Contents.module.css";
import Data from "../../Mock/MockData";
const Contents = (props) => {
  const ctx = useContext(CardContext);

  const MouseOverToggle = ctx.toggleMouse;
  const MouseOverHandler = MouseOverToggle
    ? `${classes.MouseOverType2}`
    : `${classes.MouseOutType2}`;
  const DataType = props.type === 1 ? Data[0] : Data[1];
  const checkForType = props.type === 1 ? classes.Type1 : classes.Type2;
  const toggleHasHiddenHandler = () => {
    ctx.hasHidden();
  };
  console.log("content");
  return (
    <div className={`${classes.Main} ${checkForType} ${MouseOverHandler}`}>
      <div className={`${classes.ThreeDots} ${checkForType}`}>
        <BsThreeDots
          className={`${classes.Dot} ${checkForType}`}
          onClick={toggleHasHiddenHandler}
        />
      </div>
      <p className={`${classes.Name} ${checkForType}`}>{DataType.name}</p>
      <h1 className={`${classes.Title} ${checkForType}`}>{DataType.title}</h1>
      <p className={`${classes.Content} ${checkForType}`}>{DataType.content}</p>
      {props.type === 2 && (
        <button className={`${classes.MoreContent} ${checkForType}`}>
          Read more <span>{DataType.readMoreIcone}</span>
        </button>
      )}
    </div>
  );
};

export default Contents;
