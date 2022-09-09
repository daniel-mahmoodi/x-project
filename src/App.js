import React from "react";
import classes from "./App.module.css";
import Card1 from "./Layout/card1";
import Card2 from "./Layout/card2";
import CardProvider from "./store/CardProvider";
function App() {
  let type = [1, 2];
  return (
    <CardProvider>
      <div className={classes.Cards}>
        <Card1 type={type[0]} />
        <Card2 type={type[1]} />
      </div>
    </CardProvider>
  );
}

export default App;
