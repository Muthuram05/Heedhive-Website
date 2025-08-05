import React from "react";

import "./style.css";

export function About() {
  return (
    <div className="about-container">
      <div className="about-left-render">
        <img
          src="https://static.wixstatic.com/media/d05a10_a4d4b2706caf4baaa009952793c63725~mv2.jpg/v1/fill/w_1156,h_2058,fp_0.48_0.27,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/WhatsApp%20Image%202025-04-30%20at%2022_39_21_a123853b.jpg"
          alt="founders"
          width={"100%"}
          height={"1200px"}
        />
      </div>

      <div className="about-right-render">
        <div>
          <h1>Meet Our </h1>
          <h1>Founders</h1>
        </div>

        <section>
          <p>
            Two very talented people met in college, and they just clicked
            because they had the same goals and ideas. They were both passionate
            about digital marketing, and so they joined forces to create
            Heedhive — a dynamic agency dedicated to helping businesses thrive
            in the digital world.
          </p>
          <hr />
          <a>Learn More - </a>
        </section>
      </div>
    </div>
  );
}
