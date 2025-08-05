import React from "react";

import "./style.css";
export function NavBar() {
  return (
    <div className="navbar-container">
      <img
        src="https://static.wixstatic.com/media/d05a10_93b229a2c8554318b839dbb8eb864aab~mv2.jpg/v1/fill/w_420,h_186,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG-20250326-WA0027.jpg"
        alt="logo"
      />
      <ul className="navbar-list">
        <li>Home</li>
        <li>About Us</li>
        <li>Services</li>
        <li>Clients</li>
        <li>Contact</li>
      </ul>
    </div>
  );
}
