import React from "react";
import { Link } from "react-router-dom";

export default () => (
  <div className="vw-100 vh-100 primary-color d-flex align-items-center justify-content-center">
    <div className="jumbotron jumbotron-fluid bg-transparent">
      <div className="container secondary-color">
        <h1 className="display-4">Coaching Scheduler</h1>
        <p className="lead">
          An app for scheduling coaching sessions
        </p>
        <hr className="my-4" />
        <Link
          to="/coaches"
          className="btn btn-lg custom-button"
          role="button"
        >
          View Coaches
        </Link>
        <Link
          to="/slots"
          className="btn btn-lg custom-button"
          role="button"
        >
          View Slots
        </Link>
        
      </div>
    </div>
  </div>
);

// NOTE: here i am importing React, and importing the Link component from React Router
// Link component creates a hyperlink to navigate between pages, 
// then I can create and export a functional component w some markup in it for my homepage, 
// and let it be styled using bootstrap classes