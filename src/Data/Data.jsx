import React, { useContext } from "react";
import CardContext from "../store/card-context";
import Contents from "../Components/Contents/Contents";
import ReactionsBar from "../Components/ReactionsBar/ReactionsBar";
import classes from "../Data/Data.module.css";
const Data = (props) => {
  const ctx = useContext(CardContext);
  const ToggleReactionBar = ctx.toggleHidden
    ? `${classes.ReactionShow}`
    : `${classes.ReactionFade}`;
  const MouseOverAndOut = props.onMouseOver ? `${classes.MouseOver}` : "";
  const checkForType = props.type === 1 ? classes.Type1 : classes.Type2;
  const showAndHideReaction = (
    <div className={ToggleReactionBar}>
      <ReactionsBar type={props.type} />
    </div>
  );
  const Card =
    props.type === 1 ? (
      <div className={`${classes.Main} ${checkForType} ${MouseOverAndOut}`}>
        {showAndHideReaction}
        <Contents type={props.type} />
      </div>
    ) : (
      <div className={`${classes.Main} ${checkForType} ${MouseOverAndOut}`}>
        <ReactionsBar type={props.type} onMouseOver={props.onMouseOver} />
        <div>
          <Contents type={props.type} />
        </div>
      </div>
    );

  return <React.Fragment>{Card}</React.Fragment>;
};

export default Data;
