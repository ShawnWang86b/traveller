import styles from "./CardCarousel.module.css";
import { Card } from "../card";
import { Carousel } from "antd";
import { cardList } from "../card/mockups";

export const CardCarousel: React.FC = () => {
  return (
    <Carousel autoplay dots={false} autoplaySpeed={6000}>
      <div className={styles["card-carousel-page-1__content"]}>
        <Card
          id={cardList[0].id}
          name={cardList[0].name}
          src={cardList[0].src}
        />
        <Card
          id={cardList[1].id}
          name={cardList[1].name}
          src={cardList[1].src}
        />
        <Card
          id={cardList[2].id}
          name={cardList[2].name}
          src={cardList[2].src}
        />
        <Card
          id={cardList[3].id}
          name={cardList[3].name}
          src={cardList[3].src}
        />
      </div>
      <div className={styles["card-carousel-page-2__content"]}>
        <Card
          id={cardList[4].id}
          name={cardList[4].name}
          src={cardList[4].src}
        />
        <Card
          id={cardList[5].id}
          name={cardList[5].name}
          src={cardList[5].src}
        />
        <Card
          id={cardList[6].id}
          name={cardList[6].name}
          src={cardList[6].src}
        />
        <Card
          id={cardList[7].id}
          name={cardList[7].name}
          src={cardList[7].src}
        />
      </div>
    </Carousel>
  );
};
