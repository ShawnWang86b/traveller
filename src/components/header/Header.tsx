import logo from "../../assets/logo.svg";
import styles from "./Header.module.css";
import { Typography, Input } from "antd";

export const Header = () => {
  return (
    <div className={styles["main-header"]}>
      <div className={styles["wrapper"]}>
        <img className={styles["App-logo"]} src={logo} alt="" />
        <Typography.Title level={3} className={styles["title"]}>
          Traveller
        </Typography.Title>
        <Input.Search
          placeholder="Search for anything"
          className={styles["search-input"]}
        ></Input.Search>
      </div>
    </div>
  );
};
