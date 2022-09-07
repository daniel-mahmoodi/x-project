import React from "react";
import "./App.css";
import Date from "./Components/Date/Date";
// import Date2 from "./Components/Date/Date2";
import Main from "./Layout/Main";
import Data from "./Layout/Data";
import Description from ". /Components/Describtion/Describtion";
// import Data2 from "./Layout/Data2";
import CardProvider from "./store/CardProvider";

function App() {
  return (
    <CardProvider>
      <Main>
        <Date />
        <Data />
      </Main>
      {/* <Main>
        <Date />
        <Description />
        <Description />
      </Main> */}
    </CardProvider>
  );
}

export default App;
