import React from "react";
import "antd/dist/antd.css";
import "./index.css";
import { Layout, Menu, Icon } from "antd";
import Mint from "./Mint";
import Home from "./Home";
import Create from "./Create";
import PayDividends from "./PayDividends";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const { Header, Content, Sider } = Layout;

const App = () => {
  const [collapsed, setCollapesed] = React.useState(false);

  return (
    <Router>
      <div className="App">
        <Layout style={{ minHeight: "100vh" }}>
          <Sider
            collapsible
            collapsed={collapsed}
            onCollapse={() => setCollapesed(!collapsed)}
          >
            <div className="logo" />
            <Menu
              theme="dark"
              defaultSelectedKeys={["1"]}
              style={{ textAlign: "left" }}
            >
              <Menu.Item key="1">
                <Link to="/new-token">
                  {" "}
                  <Icon type="file-add" />
                  <span>Create new token</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Link to="/mint-tokens">
                  <Icon type="apartment" />
                  <span>Mint tokens </span>
                </Link>
              </Menu.Item>
              <Menu.Item key="3">
                <Link to="/pay-dividends">
                  <Icon type="dollar" />
                  <span>Pay dividends </span>
                </Link>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout>
            <Header
              style={{ background: "#fff", padding: 0, fontSize: "24px" }}
            >
              Pitico Cash
            </Header>
            <Content style={{ margin: "0 16px" }}>
              <div style={{ padding: 24, background: "#fff", minHeight: 360 }}>
                <Route exact path="/" component={Home} />
                <Route path="/new-token" component={Create} />
                <Route path="/mint-tokens" component={Mint} />
                <Route path="/pay-dividends" component={PayDividends} />
              </div>
            </Content>
          </Layout>
        </Layout>
      </div>
    </Router>
  );
};

export default App;