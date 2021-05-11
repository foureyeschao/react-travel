import React from "react";
import styles from "./Header.module.css";
import logo from "../../assets/logo.svg";
import { Button, Dropdown, Input, Menu, Layout, Typography } from "antd";
import { GlobalOutlined } from "@ant-design/icons";
import { withRouter, RouteComponentProps } from "react-router-dom";
import store from "../../redux/store";
import { ILanguageState } from "../../redux/languageReducer";

interface IHeaderStateProps extends ILanguageState { }
class HeaderComponent extends React.Component<
  RouteComponentProps,
  IHeaderStateProps
> {
  constructor(props: any) {
    super(props);
    const storeState = store.getState();
    this.state = {
      language: storeState.language,
      languageList: storeState.languageList,
    };
    store.subscribe(this.handleStoreChange);
  }
  menuClickHandler = (e: any) => {
    const action = {
      type: "change_language",
      payload: e.key,
    };
    store.dispatch(action);
  };

  handleStoreChange = () => {
    const storeState = store.getState();
    this.setState({
      language: storeState.language,
    })
  }

  render() {
    const { history } = this.props;
    return (
      <React.Fragment>
        <div className={styles["app-header"]}>
          {/* top-header */}
          <div className={styles["top-header"]}>
            <Typography.Text>Make our trip happier</Typography.Text>
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
              <Button onClick={() => history.push("register")}>Sign in</Button>
              <Button onClick={() => history.push("signIn")}>Login</Button>
            </Button.Group>
          </div>
          <Layout.Header className={styles["main-header"]}>
            <span onClick={() => history.push("/")}>
              <img src={logo} alt="" className={styles["App-logo"]} />
              <Typography.Title level={3} className={styles.title}>
                React Travel's World
              </Typography.Title>
            </span>
            <Input.Search
              placeholder={"Please input your destination or your keyword"}
              className={styles["search-input"]}
            />
          </Layout.Header>
          <Menu mode={"horizontal"} className={styles["main-menu"]}>
            <Menu.Item key={1}>Home</Menu.Item>
            <Menu.Item key={2}>Weekend Trip</Menu.Item>
            <Menu.Item key={3}>Trip with a group</Menu.Item>
            <Menu.Item key={4}>Free Travel</Menu.Item>
            <Menu.Item key={5}>Private group</Menu.Item>
            <Menu.Item key={6}>Cruise Ship</Menu.Item>
            <Menu.Item key={7}>Hotel and Tourist attraction</Menu.Item>
            <Menu.Item key={8}>Local Fun</Menu.Item>
            <Menu.Item key={10}>Theme</Menu.Item>
            <Menu.Item key={11}>Custom Trip</Menu.Item>
            <Menu.Item key={12}>Study Tour</Menu.Item>
            <Menu.Item key={13}>Visa</Menu.Item>
          </Menu>
        </div>
      </React.Fragment>
    );
  }
}

export const Header = withRouter(HeaderComponent);
