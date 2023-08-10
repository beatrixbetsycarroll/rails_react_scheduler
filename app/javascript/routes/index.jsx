import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import Coaches from "../components/Coaches";
import Slots from "../components/Slots";
import Slot from "../components/Slot";



export default (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/coaches" element={<Coaches />} />
      <Route path="/slots" element={<Slots />} />
      <Route path="/slot/:id" element={<Slot />} />
    </Routes>
  </Router>
);

// NOTE: about the imported modules here:
// BrowserRouter, Routes, and Route modules to help w navigating routes
// Home component will be rendered whenever a request for the root '/' route happens

// NOTE: 
// now routing is setup with React Router.
// for React to be aware of / use the available routes, 
// I have to make the routes available at the entry point of the app
// to do this i will render my routes in in a component that React will render in my 
// entry file.
// this component will be App.jsx, which I now will make