import React from "react";
import styles from "./App.module.css";
import {
  Register,
  Header,
  Navigator,
  SideMenu,
  Carousel,
  ProductCollection,
  CardCarousel,
  Footer,
} from "./components";
import { Col, Row, Typography } from "antd";
import { productList1 } from "./mockups";
import sideImage from "./assets/images/sider_2019_12-09.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const App = () => {
  return (
    <div className={styles["App"]}>
      <Register />
      <Header />
      <Navigator />
      <div className={styles["page-content"]}>
        <Row style={{ marginTop: 20 }}>
          <Col span={6}>
            <div>
              <SideMenu />
            </div>
          </Col>
          <Col span={18} className={styles["carousel-block"]}>
            <div className={styles["carousel-title"]}>What's New</div>
            <div className={styles["carousel"]}>
              <Carousel />
            </div>
          </Col>
        </Row>
        <CardCarousel />
        <FontAwesomeIcon icon={faCheck} />
        <ProductCollection
          title={
            <Typography.Title level={3} type="warning">
              爆款推荐
            </Typography.Title>
          }
          sideImage={sideImage}
          products={productList1}
        />
      </div>

      <Footer />
    </div>
  );
};

export default App;
