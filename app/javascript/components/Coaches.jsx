import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Coaches = () => {
    const navigate = useNavigate();
    const [coaches, setCoaches] = useState([]);

    useEffect(() => {
        const url = "/api/v1/coaches/index";
        fetch(url)
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }
                throw new Error("Network response was not ok.");
            })
            .then((res) => setCoaches(res))
            .catch(() => navigate("/"));
    }, []);

    const allCoaches = coaches.map((coach, index) => (
        <div key={index} className="col-md-6 col-lg-4">
          <div className="card mb-4">

            <div className="card-body">
              <h5 className="card-title">{coach.name}</h5>
              <Link to={`/coach/${coach.id}`} className="btn custom-button">
                View Coach
              </Link>
            </div>
          </div>
        </div>
      ));
      const noCoach = (
        <div className="vw-100 vh-50 d-flex align-items-center justify-content-center">
          <h4>
            No coaches yet. Why not <Link to="/new_coach">create one</Link>
          </h4>
        </div>
      );
    
      return (
        <>
          <section className="jumbotron jumbotron-fluid text-center">
            <div className="container py-5">
              <h1 className="display-4">Coaches for every occasion</h1>
              <p className="lead text-muted">
                Check out our available coaches! Beloved pflebotmists / medical assistants from 'The Mindy Project'
              </p>
            </div>
          </section>
          <div className="py-5">
            <main className="container">
              <div className="text-end mb-3">
                <Link to="/coach" className="btn custom-button">
                  Create New Coach
                </Link>
              </div>
              <div className="row">
                {coaches.length > 0 ? allCoaches : noCoach}
              </div>
              <Link to="/" className="btn btn-link">
                Home
              </Link>
            </main>
          </div>
        </>
      );

};
  
export default Coaches;

