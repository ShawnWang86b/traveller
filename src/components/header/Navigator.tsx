import React from "react";
import styles from "./Navigator.module.css";
import { Menu } from "antd";

export const Navigator: React.FC = () => {
  return (
    <Menu
      className={styles["bottom-header"]}
      mode={"horizontal"}
      items={[
        { key: "1", label: "Stays" },
        { key: "2", label: "Flights" },
        { key: "3", label: "Trains" },
        { key: "4", label: "Cars" },
        { key: "5", label: "Tours & Tickets" },
        { key: "6", label: "Bundle & Save" },
      ]}
    />
  );
};
