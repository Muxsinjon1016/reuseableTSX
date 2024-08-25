import React, { useState } from "react";
import type { MenuProps } from "antd";
import { Layout, Menu } from "antd";
import { Link, Outlet } from "react-router-dom";
import { layoutData } from "./layoutData";

const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  path: string
): MenuItem {
  return {
    key,
    label: <Link to={path}>{label}</Link>,
  } as MenuItem;
}

const items: MenuItem[] = layoutData.map(({ key, label, path }) =>
  getItem(label, key, path)
);

export const MainLayout: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout style={{ height: "100vh" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <Link to={"/"} className="demo-logo-vertical">
          <img
            className="w-[45px] h-auto mt-5 mx-auto mb-7"
            src="logo.png"
            alt="logo"
          />
        </Link>
        <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: "#001529",
          }}
        />
        <Content style={{ margin: "0 20px" }}>
          <div className="bg-white h-[95%] p-10 rounded-12 mt-7">
            <Outlet />
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©{new Date().getFullYear()} Created by
          <a target="_blank" href="https://t.me/Muxsinjon_Maxsudovich">
            {" "}
            Muxsinjon Maxsudovich
          </a>
        </Footer>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
