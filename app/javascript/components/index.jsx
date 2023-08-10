import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

document.addEventListener("turbo:load", () => {
  const root = createRoot(
    document.body.appendChild(document.createElement("div"))
  );
  root.render(<App />);
});

// NOTE:
// createRoot function to create a root element as a div element appended to the page
// and render my App component in that div
// when the app is loaded, React will render the content of the App component 
// inside the div element on the page