import React from "react";
import styles from "./Header.module.css";
import logo from "../../assets/logo.svg";
import { Button, Dropdown, Input, Menu, Layout, Typography } from "antd";
import { GlobalOutlined } from "@ant-design/icons";
import { withRouter, RouteComponentProps } from "react-router-dom";
import store from "../../redux/store";
import { ILanguageState } from "../../redux/language/languageReducer";
import { withTranslation, WithTranslation } from 'react-i18next'
import { changeLanguageActionCreator, addLanguageActionCreator } from '../../redux/language/languageActions'
import { connect } from 'react-redux'

interface IHeaderStateProps extends ILanguageState { }
class HeaderComponent extends React.Component<
  RouteComponentProps & WithTranslation,
  IHeaderStateProps
> {
  constructor(props: any) {
    super(props);
    const storeState = store.getState();
    this.state = {
      language: storeState.language.language,
      languageList: storeState.language.languageList,
    };
    store.subscribe(this.handleStoreChange);
  }
  menuClickHandler = (e: any) => {
    if (e.key === "new") {
      const action = addLanguageActionCreator("新语言", "new_lang")
      store.dispatch(action)
    }
    else {
      const action = changeLanguageActionCreator(e.key)
      store.dispatch(action)
    }
  };

  handleStoreChange = () => {
    const storeState = store.getState();
    this.setState({
      language: storeState.language.language,
    })
  }

  render() {
    const { history, t } = this.props;
    return (
      <React.Fragment>
        <div className={styles["app-header"]}>
          {/* top-header */}
          <div className={styles["top-header"]}>
            <Typography.Text>{t("header.slogan")}</Typography.Text>
            <Dropdown.Button
              style={{ marginLeft: 15 }}
              overlay={
                <Menu onClick={this.menuClickHandler}>
                  {this.state.languageList.map((language) => (
                    <Menu.Item key={language.code}>{language.name}</Menu.Item>
                  ))}
                </Menu>
              }
              icon={<GlobalOutlined />}
            >
              {this.state.language === "en"
                ? "English"
                : this.state.language === "fr"
                  ? "Français"
                  : "中文"
              }
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
  }
}

export const Header = connect()(withTranslation()(withRouter(HeaderComponent)));
