import React, { useState } from "react";
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import { useNavigate, Outlet } from "react-router-dom";

const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem("栏目 1", "/page1", <PieChartOutlined />),
  getItem("栏目 2", "/page2", <DesktopOutlined />),
  getItem("User", "sub1", <UserOutlined />, [
    getItem("Tom", "3"),
    getItem("Bill", "4"),
    getItem("Alex", "5"),
  ]),
  getItem("Team", "sub2", <TeamOutlined />, [
    getItem("Team 1", "6"),
    getItem("Team 2", "8"),
  ]),
  getItem("Files", "9", <FileOutlined />),
];

const Home: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const navigateTo = useNavigate();

  const menuClick = (e: { key: string }) => {
    // 点击跳转到对应的路由  编程式导航跳转，利用一个hook
    navigateTo(e.key);
  };

  const [openKeys, setOpenKeys] = useState([""]);
  const handleOpenChange = (keys: string[]) => {
    //
    // keys是一个数组，记录了当前哪一项是展开的
    //console.log(keys);
    // 把这个数组修改成最后一项，因为只要一项是展开的，就是我刚刚点击的这一项
    setOpenKeys([keys[keys.length - 1]]);
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      {/* 左侧边栏 */}
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div
          style={{
            height: 32,
            margin: 16,
            background: "rgba(255, 255, 255, 0.2)",
          }}
        />
        <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items}
          onClick={menuClick}
          //   某项菜单展开和回收的事件
          onOpenChange={handleOpenChange}
          // 当前菜单展开项的key
          openKeys={openKeys}
        />
      </Sider>
      {/* 右边内容 */}
      <Layout className="site-layout">
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Breadcrumb style={{ margin: "16px 16px" }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
        </Header>
        <Content
          style={{ margin: "16px 16px 0", background: colorBgContainer }}
        >
          {/* 窗口 */}
          <Outlet />
        </Content>
        <Footer style={{ textAlign: "center", padding: 0, lineHeight: "48px" }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default Home;
