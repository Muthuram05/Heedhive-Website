import React from "react";
import { Card } from "./card";

import "./style.css";

export function Service() {
  return (
    <div className="service-container">
      <h1>Our Services</h1>
      <div className="service-card-renderer">
        <Card
          image={
            "https://static.wixstatic.com/media/d05a10_63c8c4dc73814239a169ff058bdd40f7~mv2.jpg/v1/crop/x_0,y_273,w_736,h_1032/fill/w_570,h_800,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Personal%20Branding%205.jpg"
          }
          title={"Personal Branding"}
          description={
            "We can help you find your true potential with our personal branding services. We can help you stand out and make a lasting impact by creating interesting content and building a strong online presence."
          }
        />
        <Card
          image={
            "https://static.wixstatic.com/media/d05a10_24fa306682204e71a8afab3c521d33de~mv2.jpg/v1/fill/w_570,h_800,fp_0.54_0.44,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/All%20Personal%20Branding.jpg"
          }
          title={"ADS"}
          description={
            "Maximize your reach and boost sales with our targeted ad solutions. We develop data-driven campaigns that are tailored to the desired audience, ensuring your brand receives the necessary attention and achieves its goals."
          }
        />
        <Card
          image={
            "https://static.wixstatic.com/media/d05a10_071cbe10431f46ab973b65031e8c808c~mv2.jpg/v1/crop/x_88,y_0,w_394,h_552/fill/w_472,h_662,fp_0.50_0.50,lg_1,q_80,enc_avif,quality_auto/Website%201.jpg"
          }
          title={"Website Building And Management"}
          description={
            "We build websites that are as effective as our clients are. Our website building and management services ensure a sleek, user-friendly design with seamless functionality to keep your audience engaged and your business growing."
          }
        />
        <Card
          image={
            "https://static.wixstatic.com/media/d05a10_8bc5f6dffcf54775be511aef43beab02~mv2.jpg/v1/crop/x_2018,y_0,w_1576,h_2666/fill/w_570,h_966,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/online-networking-handshake-marketing-remixed-media-background.jpg"
          }
          title={"Media Partner"}
          description={
            "We invite you to consider a partnership with us to expand the reach of your brand. Our media partner services connect you with the right platforms, ensuring your videos or content reaches a wider audience and drives impactful results."
          }
        />
        <Card
          image={
            "https://static.wixstatic.com/media/d05a10_e50a19738cf24216b0d059dfbc4b32b2~mv2.jpg/v1/crop/x_0,y_35,w_405,h_685/fill/w_485,h_822,fp_0.50_0.50,lg_1,q_85,enc_avif,quality_auto/Video%20editing%203%20.jpg"
          }
          title={"Video Editing"}
          description={
            "Our video editing services will bring your vision to life. We create engaging, high-quality videos that captivate your audience and leave a lasting impression."
          }
        />
        <Card
          image={
            "https://static.wixstatic.com/media/d05a10_f83a9cf38c2c43c08cc3448db62abe33~mv2.webp/v1/fill/w_370,h_626,al_c,lg_1,q_80,enc_avif,quality_auto/content-writing-isometric-stock-illustration-eps-file-stock-illustration_357500-5024.webp"
          }
          title={"Content writing"}
          description={
            "Create interesting stories that your audience will enjoy. Our content writing services create clear, interesting, and effective copy that will make your brand more popular and get results."
          }
        />
      </div>
    </div>
  );
}
