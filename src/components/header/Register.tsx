import styles from "./Register.module.css";
import { Typography, Dropdown, Menu, Button } from "antd";
import { DownOutlined } from "@ant-design/icons";

export const Register = () => {
  return (
    <div className={styles["top-header"]}>
      <div className={styles["top-header-wrapper"]}>
        <div className={styles["top-header-left"]}>
          <Typography.Text>
            Creating unique Australian experiences
          </Typography.Text>
          <Dropdown.Button
            style={{ marginLeft: 15 }}
            overlay={
              <Menu
                items={[
                  { key: "1", label: "中文" },
                  { key: "2", label: "English" },
                ]}
              ></Menu>
            }
            icon={<DownOutlined />}
          >
            Languages
          </Dropdown.Button>
        </div>
        <div className={styles["top-header-right"]}>
          <Button.Group>
            <Button>Sign up</Button>
            <Button>Sign in</Button>
          </Button.Group>
        </div>
      </div>
    </div>
  );
};
