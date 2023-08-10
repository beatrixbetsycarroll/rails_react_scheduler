import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import FullCalendar from '@fullcalendar/react'
import timegridPlugin from '@fullcalendar/timegrid' // a plugin!
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!


const Slots = () => {
  const navigate = useNavigate();
  const [slots, setSlots] = useState([]);

  useEffect(() => {
    const url = "/api/v1/slots/index";
    fetch(url)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then((res) => setSlots(res))
      .catch(() => navigate("/"));
  }, []);

  const allSlots = slots.map((slot, index) => (
    
    <div key={index} className="col-md-6 col-lg-4">
      <div className="card mb-4">
        <p>start_time: {slot.start_time}</p>
        <p>coach: {slot.coach.name}</p>

        <p>student: {slot.student}</p>

        <div className="card-body">
          <h5 className="card-title">{slot.name}</h5>
          <Link to={`/slot/${slot.id}`} className="btn custom-button">
            View Slot
          </Link>
        </div>
      </div>
    </div>

  ));

    function addHoursToDate(stringDate, intHours) {
        console.log("stringDate");
        console.log(stringDate);
        console.log(typeof(stringDate));

        var dateObj = new Date(stringDate)
        console.log("dateObj");
        console.log(dateObj);
        console.log(typeof(dateObj));

        var numberOfMlSeconds = dateObj.getTime();
        var addMlSeconds = (intHours * 60) * 60 * 1000;
        var newDateObj = new Date(numberOfMlSeconds + addMlSeconds);

        console.log("newDateObj");
        console.log(newDateObj);
        console.log(typeof(newDateObj));
        return newDateObj;
    }

    const eventColors = ["#FFCE30", "#E83845", "#E389B9", "#746AB0", "288BA8", "#0000FF", "#808080", "#008000", "800080", "#FF7F50", "#FFFACD"];
    console.log("=======================================")
    console.log("eventColors");
    console.log(eventColors);
    const slotEvents = slots.map(slot => {
        if (!slot.student){
            return {
                title: "Coach: " + slot.coach.name, 
                start: slot.start_time, 
                end: addHoursToDate(slot.start_time, 2), 
                color: eventColors[slot.coach.id % eventColors.length],
                url: "/slot/" + slot.id
            } ;
        }else{
            return {
                title: "UNAVAIL: BOOKED by " + slot.student.name + ". \n" + "Coach: " + slot.coach.name, 
                start: slot.start_time, 
                end: addHoursToDate(slot.start_time, 2), 
                color: eventColors[slot.coach.id % eventColors.length],
                url: "/slot/" + slot.id

            } ;
        }
    });

  const noSlot = (
    <div className="vw-100 vh-50 d-flex align-items-center justify-content-center">
      <h4>
        No slots yet. Why not <Link to="/new_slot">create one</Link>
      </h4>
    </div>
  );

  return (
    <>
      <section className="jumbotron jumbotron-fluid text-center">
        <div className="container py-5">
          <h1 className="display-4">All Slots!</h1>
          <p className="lead text-muted">
            View slots here!
          </p>
        </div>
      </section>
      <FullCalendar
            plugins={[ timegridPlugin ]}
            initialView="timeGridWeek"
            timeZone='local'
            weekends={true}
            events={slotEvents}
        />

      <div className="py-5">
        <main className="container">
          <div className="text-end mb-3">
            <Link to="/slot" className="btn custom-button">
              Create New Slot
            </Link>
          </div>
          <div className="row">
            {slots.length > 0 ? allSlots : noSlot}
          </div>
          <Link to="/" className="btn btn-link">
            Home
          </Link>
        </main>
      </div>
      
    </>
  );
};

export default Slots;