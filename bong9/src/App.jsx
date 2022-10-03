import React, { useEffect, useState } from "react";
import Home from "./component/Home";
import { Link, Router, Routes, Route } from "react-router-dom";
import axios from "axios";
import Navbar from "./component/Navbar";
const App = () => {
  const [data, setData] = useState();

  return (
    <>
      <Navbar />
      <Home />
    </>
  );
};

export default App;
