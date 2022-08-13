import React from "react";
import styles from "./Card.module.css";
import { Card as AntCard, Image, Button, Tag } from "antd";
import {
  TagOutlined,
  EnvironmentOutlined,
  RightOutlined,
} from "@ant-design/icons";

interface PropsType {
  id: number | string;
  name: string;
  src: string;
}

export const Card: React.FC<PropsType> = ({ id, name, src }: PropsType) => {
  return (
    <AntCard
      hoverable={true}
      cover={
        <Image
          src={src}
          alt=""
          preview={false}
          rootClassName={styles["card-image-cover"]}
        />
      }
      className={styles["card"]}
    >
      <Tag color={"#8DC4B9"} className={styles["card-image__tag"]}>
        Open
      </Tag>
      <Button.Group className={styles["button-group"]}>
        <div className={styles["title"]}>{name}</div>
        <div>
          <Button>
            <div className={styles["button-left"]}>
              <TagOutlined />
              <span className={styles["button-title"]}>
                Flight & Hotel Deal
              </span>
            </div>
            <div>
              <RightOutlined />
            </div>
          </Button>
        </div>
        <div>
          <Button>
            <div className={styles["button-left"]}>
              <EnvironmentOutlined />
              <span className={styles["button-title"]}>Travel Guide</span>
            </div>
            <div>
              <RightOutlined />
            </div>
          </Button>
        </div>
      </Button.Group>
    </AntCard>
  );
};
