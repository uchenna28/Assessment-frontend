import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {LoginPage, SignupPage,} from "./routes/Routes.js";

const App = () => {
  return ( 
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<SignupPage />} />
    </Routes>
    </BrowserRouter>
  )
}
export default App;
