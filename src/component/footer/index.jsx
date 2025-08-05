import React from "react";

import "./style.css";

export function Footer() {
  return (
    <footer className="footer">
      <div>
        <img
          src="https://static.wixstatic.com/media/d05a10_93b229a2c8554318b839dbb8eb864aab~mv2.jpg/v1/fill/w_528,h_352,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG-20250326-WA0027.jpg"
          alt="logo"
        />
      </div>
      <div>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          {/* <li>Client</li> */}
          <li>Contact</li>
          <li>Founder</li>
        </ul>
      </div>
      <div>
        <ul>
          <li>Personal Branding</li>
          <li>ADS</li>
          <li>Website Building And Management</li>
          <li>Media Partner</li>
          <li>Video Editing</li>
          <li>Content writing</li>
        </ul>
      </div>
      <div>
        <p>Email ID:contact.heedhive@gamil.com</p>

        <p>Phone : 91+7598885033</p>
      </div>
    </footer>
  );
}
