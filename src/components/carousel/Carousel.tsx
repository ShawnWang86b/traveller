import React from "react";
import styles from "./Carousel.module.css";
import { Carousel as AntCarousel, Image } from "antd";

import carouselImage1 from "../../assets/images/carousel_1.jpg_.webp";
import carouselImage2 from "../../assets/images/carousel_2.png_.webp";
import carouselImage3 from "../../assets/images/carousel_3.png_.webp";
import carouselImage4 from "../../assets/images/carousel_4.png_.webp";
import carouselImage5 from "../../assets/images/carousel_5.jpg_.webp";
import carouselImage6 from "../../assets/images/carousel_6.jpg_.webp";

export const Carousel: React.FC = () => {
  return (
    <AntCarousel
      autoplay
      dots={false}
      className={styles["slider"]}
      autoplaySpeed={8000}
    >
      <div className={styles["slider_1"]}>
        <Image src={carouselImage1} />
        <Image src={carouselImage2} />
        <Image src={carouselImage3} />
      </div>
      <div className={styles["slider_2"]}>
        <Image src={carouselImage4} />
        <Image src={carouselImage5} />
        <Image src={carouselImage6} />
      </div>
    </AntCarousel>
  );
};
