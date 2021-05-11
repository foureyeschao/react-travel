import React from "react";
import styles from "./Header.module.css";
import logo from "../../assets/logo.svg";
import { Button, Dropdown, Input, Menu, Layout, Typography } from "antd";
import { GlobalOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";
import { useSelector } from "../../redux/hooks";
import { useDispatch } from "react-redux";
import { useTranslation } from 'react-i18next'
import {
  addLanguageActionCreator,
  changeLanguageActionCreator,
} from "../../redux/language/languageActions";

export const Header: React.FC = () => {
  const history = useHistory();
  const language = useSelector((state) => state.language);
  const languageList = useSelector((state) => state.languageList);
  const dispatch = useDispatch();
  const { t } = useTranslation()

  const menuClickHandler = (e: any) => {
    if (e.key === "new") {
      dispatch(addLanguageActionCreator("New Language", "new_lang"));
    } else {
      dispatch(changeLanguageActionCreator(e.key));
    }
  };

  return (
    <React.Fragment>
      <div className={styles["app-header"]}>
        {/* top-header */}
        <div className={styles["top-header"]}>
          <Typography.Text>{t("header.slogan")}</Typography.Text>
          <Dropdown.Button
            style={{ marginLeft: 15 }}
            overlay={
              <Menu onClick={menuClickHandler}>
                {languageList.map((language) => (
                  <Menu.Item key={language.code}>{language.name}</Menu.Item>
                ))}
                <Menu.Item key={"new"}>
                  {t("header.add_new_language")}
                </Menu.Item>
              </Menu>
            }
            icon={<GlobalOutlined />}
          >
            {language === "en"
              ? "English"
              : language === "fr"
                ? "Français"
                : "中文"}
          </Dropdown.Button>
          <Button.Group className={styles["button-group"]}>
            <Button onClick={() => history.push("register")}>{t("header.register")}</Button>
            <Button onClick={() => history.push("signIn")}>{t("header.signin")}</Button>
          </Button.Group>
        </div>
        <Layout.Header className={styles["main-header"]}>
          <span onClick={() => history.push("/")}>
            <img src={logo} alt="" className={styles["App-logo"]} />
            <Typography.Title level={3} className={styles.title}>
              {t("header.title")}
            </Typography.Title>
          </span>
          <Input.Search
            placeholder={"Please input your destination or your keyword"}
            className={styles["search-input"]}
          />
        </Layout.Header>
        <Menu mode={"horizontal"} className={styles["main-menu"]}>
          <Menu.Item key={1}>{t("header.home_page")}</Menu.Item>
          <Menu.Item key={2}>{t("header.weekend")}</Menu.Item>
          <Menu.Item key={3}>{t("header.group")}</Menu.Item>
          <Menu.Item key={4}>{t("header.backpack")}</Menu.Item>
          <Menu.Item key={5}>{t("header.private")}</Menu.Item>
          <Menu.Item key={6}>{t("header.cruise")}</Menu.Item>
          <Menu.Item key={7}>{t("header.hotel")}</Menu.Item>
          <Menu.Item key={8}>{t("header.local")}</Menu.Item>
          <Menu.Item key={10}>{t("header.theme")}</Menu.Item>
          <Menu.Item key={11}>{t("header.custom")}</Menu.Item>
          <Menu.Item key={12}>{t("header.study")}</Menu.Item>
          <Menu.Item key={13}>{t("header.visa")}</Menu.Item>
          <Menu.Item key={12}>{t("header.enterprise")}</Menu.Item>
          <Menu.Item key={13}>{t("header.high_end")}</Menu.Item>
          <Menu.Item key={12}>{t("header.outdoor")}</Menu.Item>
          <Menu.Item key={13}>{t("header.insurance")}</Menu.Item>
        </Menu>
      </div>
    </React.Fragment>
  );
};
