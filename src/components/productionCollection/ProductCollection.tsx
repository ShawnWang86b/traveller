import React from "react";
import styles from "./ProductCollection.module.css";
import { Row, Col, Divider } from "antd";
import { ProductImage } from "./ProductImage";

interface PropsType {
  title: JSX.Element;
  sideImage: string;
  products: any[];
}

export const ProductCollection: React.FC<PropsType> = ({
  title,
  sideImage,
  products,
}: PropsType) => {
  return (
    <div className={styles["content"]}>
      <Divider orientation="left">{title}</Divider>
      <Row>
        <Col span={4}>
          <img src={sideImage} className={styles["side-image"]} alt="" />
        </Col>
        <Col span={20}>
          <Row>
            <Col span={12}>
              <ProductImage
                id={products[0].id}
                title={products[0].title}
                price={products[0].price}
                imageSrc={products[0].touristRoutePictures[0].url}
                size={"large"}
              />
            </Col>
            <Col span={12}>
              <Row>
                <Col span={12}>
                  <ProductImage
                    id={products[1].id}
                    title={products[1].title}
                    price={products[1].price}
                    imageSrc={products[0].touristRoutePictures[0].url}
                    size={"small"}
                  />
                </Col>
                <Col span={12}>
                  <ProductImage
                    id={products[0].id}
                    title={products[0].title}
                    price={products[0].price}
                    imageSrc={products[0].touristRoutePictures[0].url}
                    size={"small"}
                  />
                </Col>
              </Row>
              <Row>
                <Col span={12}>
                  <ProductImage
                    id={products[0].id}
                    title={products[0].title}
                    price={products[0].price}
                    imageSrc={products[0].touristRoutePictures[0].url}
                    size={"small"}
                  />
                </Col>
                <Col span={12}>
                  <ProductImage
                    id={products[0].id}
                    title={products[0].title}
                    price={products[0].price}
                    imageSrc={products[0].touristRoutePictures[0].url}
                    size={"small"}
                  />
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col span={6}>
              <ProductImage
                id={products[0].id}
                title={products[0].title}
                price={products[0].price}
                imageSrc={products[0].touristRoutePictures[0].url}
                size={"small"}
              />
            </Col>
            <Col span={6}>
              <ProductImage
                id={products[0].id}
                title={products[0].title}
                price={products[0].price}
                imageSrc={products[0].touristRoutePictures[0].url}
                size={"small"}
              />
            </Col>
            <Col span={6}>
              <ProductImage
                id={products[0].id}
                title={products[0].title}
                price={products[0].price}
                imageSrc={products[0].touristRoutePictures[0].url}
                size={"small"}
              />
            </Col>
            <Col span={6}>
              <ProductImage
                id={products[0].id}
                title={products[0].title}
                price={products[0].price}
                imageSrc={products[0].touristRoutePictures[0].url}
                size={"small"}
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};
