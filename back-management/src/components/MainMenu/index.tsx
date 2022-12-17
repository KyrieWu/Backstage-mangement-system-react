import React, { useState } from "react";
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Menu } from "antd";
import { useNavigate, useLocation } from "react-router-dom";

type MenuItem = Required<MenuProps>["items"][number];

const items: MenuItem[] = [
  {
    label: "栏目1",
    key: "/page1",
    icon: <PieChartOutlined />,
  },
  {
    label: "栏目1",
    key: "/page2",
    icon: <DesktopOutlined />,
  },
  {
    label: "栏目3",
    key: "page3",
    icon: <UserOutlined />,
    children: [
      {
        label: "栏目 301",
        key: "/page3/page301",
      },
      {
        label: "栏目 302",
        key: "/page3/page302",
      },
      {
        label: "栏目 303",
        key: "/page3/page303",
      },
    ],
  },
  {
    label: "栏目4",
    key: "page4",
    icon: <TeamOutlined />,
    children: [
      {
        label: "栏目 401",
        key: "/page4/page401",
      },
      {
        label: "栏目 402",
        key: "/page4/page402",
      },
      {
        label: "栏目 403",
        key: "/page4/page403",
      },
    ],
  },
  {
    label: "栏目5",
    key: "page5",
    icon: <FileOutlined />,
  },
];

const Comp: React.FC = () => {
  const navigateTo = useNavigate();
  const currentRoute = useLocation();
  const menuClick = (e: { key: string }) => {
    // 点击跳转到对应的路由  编程式导航跳转，利用一个hook
    navigateTo(e.key);
  };

  let firstOpenKey: string = "";
  // 在这里进行对比
  function findKey(obj: { key: string }) {
    return obj.key === currentRoute.pathname;
  }

  // 对比的多个 children
  for (let i = 0; i < items.length; i++) {
    if (
      items[i]!["children"] &&
      items[i]!["children"].length > 1 &&
      items[i]!["children"].find(findKey)
    ) {
      firstOpenKey = items[i]!.key as string;
      break;
    }
  }

  // 设置展开项的初始值
  const [openKeys, setOpenKeys] = useState([firstOpenKey]);
  const handleOpenChange = (keys: string[]) => {
    //
    // keys是一个数组，记录了当前哪一项是展开的
    //console.log(keys);
    // 把这个数组修改成最后一项，因为只要一项是展开的，就是我刚刚点击的这一项
    setOpenKeys([keys[keys.length - 1]]);
  };

  return (
    <Menu
      theme="dark"
      // defaultSelectedKeys 表示当前样式所在的选中项
      defaultSelectedKeys={[currentRoute.pathname]}
      mode="inline"
      items={items}
      onClick={menuClick}
      //   某项菜单展开和回收的事件
      onOpenChange={handleOpenChange}
      // 当前菜单展开项的key
      openKeys={openKeys}
    />
  );
};

export default Comp;
