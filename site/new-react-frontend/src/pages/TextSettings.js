import "antd/dist/antd.min.css";
import { Dropdown, Menu, Button } from "antd";
import { DownOutlined } from "@ant-design/icons";
import styles from "./TextSettingsPage.module.css";
import { useNavigate } from "react-router-dom";

const TextSettingsPage = () => {
    const navigate = useNavigate();

    const onBackClick = () => { 
        navigate("/");
    };

  return (
    <div className={styles.textSettingsPage}>
      <div className={styles.textsettingsrectangle}>
        <div className={styles.textsettingsrectangle1} />
      </div>
      <div className={styles.textsettingsframe}>
        <div className={styles.aa}>
          <div className={styles.thisIsYourContainer}>Aa</div>
        </div>
        <div className={styles.div}>
          <div className={styles.div1}>^</div>
        </div>
        <Dropdown
          className={styles.txtsizechange}
          overlay={
            <Menu>
              {[
                { value: "10" },
                { value: "1" },
                { value: "20" },
                { value: "30" },
              ].map((option, index) => (
                <Menu.Item key={index}>
                  <a onClick={(e) => e.preventDefault()}>
                    {option.value || ""}
                  </a>
                </Menu.Item>
              ))}
            </Menu>
          }
          trigger={["click"]}
        >
          <Button onClick={(e) => e.preventDefault()}>
            {`Text Size `}
            <DownOutlined />
          </Button>
        </Dropdown>
        <Dropdown
          className={styles.txtfontchange}
          overlay={
            <Menu>
              {[].map((option, index) => (
                <Menu.Item key={index}>
                  <a onClick={(e) => e.preventDefault()}>
                    {option.value || ""}
                  </a>
                </Menu.Item>
              ))}
            </Menu>
          }
          trigger={["click"]}
        >
          <Button onClick={onBackClick}>
            {`Text Font `}
            <DownOutlined />
          </Button>
        </Dropdown>
        <button className={styles.backbtntxtpg} id="backbutton">
          <div className={styles.backbtntxtpgChild} />
          <div className={styles.back}>back</div>
        </button>
      </div>
      <div className={styles.textsettings}>
        <div className={styles.thisIsYourContainer}>
          <p className={styles.text}>{`Text `}</p>
          <p className={styles.text}>&nbsp;</p>
          <p className={styles.text}>&nbsp;</p>
          <p className={styles.text}>Settings</p>
        </div>
      </div>
    </div>
  );
};

export default TextSettingsPage;
