import React, { useContext } from "react";
import { BsThreeDots } from "react-icons/bs";
import CardContext from "../../store/card-context";
import classes from "./Contents.module.css";

const Contents = (props) => {
  const ctx = useContext(CardContext);

  const toggleHasHiddenHandler = () => {
    ctx.hasHidden();
  };
  return (
    <div className={classes.Main}>
      <div className={classes.threeDots}>
        <BsThreeDots className={classes.dot} onClick={toggleHasHiddenHandler} />
      </div>
      <p className={classes.name}>Jane Doe</p>
      <h1 className={classes.title}>
        <a href="#">Boxing icon has the will for a couple more fights</a>
      </h1>
      <p className={classes.content}>
        The highly anticipated world championship fight will take place at 10am
        and is the second major boxing blockbuster in the nation after 43 years.
      </p>
    </div>
  );
};

export default Contents;
