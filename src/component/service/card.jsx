import React from "react";

import "./style.css";

export function Card({ image, title, description, onClick }) {
  return (
    <div className="card" onClick={onClick}>
      <img src={image} alt={title} className="card-image" />
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
      <a className="card-button" >Read More</a>
    </div>
  );
}
