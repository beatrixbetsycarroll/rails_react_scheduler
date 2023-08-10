import React from "react";
import Routes from "../routes";

export default props => <>{Routes}</>;


// NOTE: importing the route files I created
// exporting a component to render the routes within 'fragments'*

// now that I have App.jsx component set up, I will render it in my entry file 
// that I will create, index.jsx

// *Fragments:
// when you want a component to return multiple elements, fragments
// let you group a list of children without adding extra nores to the DOM
// fragments are denoted by <>...</>
