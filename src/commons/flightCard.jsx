import React from "react";

function flightCard({ flight }) {
  return (
    <section id="flight-card">
      <h4>{flight.name}</h4>
      <div className="first-row"></div>
      <div className="second-row"></div>
      <div className="third-row"></div>
      <p>Depart Time: {flight.depart}</p>
      <p>Arrival Time: {flight.arrival}</p>
    </section>
  );
}

export default flightCard;
