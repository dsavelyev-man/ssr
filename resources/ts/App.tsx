import React from "react";
import "../css/app.css";
import axios from "axios";
import Router from "./Router";

interface Props {
  url: string;
}

const App = (props: Props) => {
  return <Router url={props.url} />;
};

export default App;
