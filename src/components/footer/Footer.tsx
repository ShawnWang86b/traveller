import React from "react";
import styles from "./Footer.module.css";
import { Layout, Typography } from "antd";

export const Footer: React.FC = () => {
  return (
    <Layout.Footer className={styles["Footer-wrapper"]}>
      <Typography.Title level={2} className={styles.Footer}>
        Copy right @ React Traveller
      </Typography.Title>
    </Layout.Footer>
  );
};
