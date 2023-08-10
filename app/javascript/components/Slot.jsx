import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const Slot = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [slot, setSlot] = useState({ coach: "" });


  useEffect(() => {
    const url = `/api/v1/slots/show/${params.id}`;
    fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then((response) => setSlot(response))
      .catch(() => navigate("/slots"));
  }, [params.id]);

  const addHtmlEntities = (str) => {
    return String(str).replace(/&lt;/g, "<").replace(/&gt;/g, ">");
  };

  const slotNotes = addHtmlEntities(slot.notes);
  
  return (
    <div className="">
      <div className="hero position-relative d-flex align-items-center justify-content-center">

        <div className="overlay bg-dark position-absolute" />
        <h1 className="display-4 position-relative text-white">
          {slot.coach.name}'s slot
        </h1>
      </div>

      <div className="card mb-4">

        <p>start_time: {slot.start_time}</p>
        <p>coach: {slot.coach.name}</p>

        <p>student: {slot.student}</p>
        <p>slot notes: {slotNotes}</p>
        <p>satisfaction score: {slot.score}</p>

        <div className="card-body">
          <h5 className="card-title">{slot.name}</h5>
          <button
              type="button"
              className="btn btn-danger"
            >
              Delete Slot
            </button>
            <Link to="/slots" className="btn btn-link">
          Back to slots
        </Link>
        </div>
      </div>

      

    </div>
  );
};

export default Slot;