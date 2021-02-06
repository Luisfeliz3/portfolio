import React from "react";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Jumbotron() {
  return (
    <div className="jumbotron jumbotron-fluid bg-dark rounded-lg mt-4 p-4">
      <div className="container">
        <h1 className="display-4 text">Luis Feliz</h1>
        <p className="lead">
          A Full Stack developer with e-commerce and web applications experience
          that will bring ideas and solutions to reality. UX/UI Best practices.
          Excellent code quality. DevOps Services & Quality Assurance
          methodologies.
        </p>
      </div>
    </div>
  );
}

export default Jumbotron;
