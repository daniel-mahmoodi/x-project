// interface ReactionsBarProps {}
import React from "react";
import classes from "./ReactionBar.module.css";
import { FaRegBookmark, FaRegHeart, FaRegComment } from "react-icons/fa";
const ReactionsBar = () => {
  return (
    <ul className={classes.Main}>
      <li>
        <a href="#">
          <FaRegBookmark />
        </a>
      </li>
      <li>
        <a href="#">
          <span>47</span>
          <FaRegHeart />
        </a>
      </li>
      <li>
        <a href="#">
          <span>8</span>
          <FaRegComment />
        </a>
      </li>
    </ul>
  );
};

export default ReactionsBar;
