// interface ReactionsBarProps {}
import React from "react";
import Data from "../../Mock/MockData";
// import CardContext from "../../store/card-context";
import classes from "./ReactionBar.module.css";
import { FaRegBookmark, FaRegHeart, FaRegComment } from "react-icons/fa";
const ReactionsBar = (props) => {
  const DataType = props.type === 1 ? Data[0] : Data[1];

  const checkForType = props.type === 1 ? classes.Type1 : classes.Type2;
  // const ctx = useContext(CardContext);
  // const MouseOverToggle = props.onMouseOver;
  const MouseOverHandler =
    props.type === 2
      ? props.onMouseOver
        ? `${classes.MouseOverType2}`
        : ""
      : "";
  // const MouseOverHandlerType1 =
  //   props.type === 1 ? (MouseOverToggle ? `${classes.MouseOverType1}` : "") : "";
  // const MouseOverHandlerType2 =
  //   props.type === 2 ? (MouseOverToggle ? `${classes.MouseOverType2}` : "") : "";
  const cssClasses = `${classes.Main} ${checkForType}`;
  return (
    <ul className={cssClasses}>
      <li>
        <div href="#">
          <FaRegBookmark />
        </div>
      </li>
      <li>
        <div href="#">
          <span className={MouseOverHandler}>{DataType.reactions.like}</span>
          <FaRegHeart />
        </div>
      </li>
      <li>
        <div href="#">
          <span className={MouseOverHandler}>{DataType.reactions.comment}</span>
          <FaRegComment />
        </div>
      </li>
    </ul>
  );
};

export default ReactionsBar;
