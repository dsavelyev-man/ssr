import React from "react";
import Home from "./pages/home/Home";
import { Routes, Route } from "react-router-dom";

interface Props {
  url: string;
}

const Router = (props: Props) => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default Router;
