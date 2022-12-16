import React, { lazy } from "react";
import Home from "@/views/Home";
// import About from "@/views/About";
const User = lazy(() => import("@/views/User"));
const About = lazy(() => import("@/views/About"));
const Page1 = lazy(() => import("@/views/Page1"));
const Page2 = lazy(() => import("@/views/Page2"));
import { Navigate } from "react-router-dom";

//懒加载的模式 需要我们给它添加一个loading组件
// 懒加载的模式的组件的写法，外面需要套一层 Loading 的提示加载组件

const withLoadingComponent = (comp: JSX.Element) => {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>{comp}</React.Suspense>
  );
};

const routes = [
  {
    path: "/",
    element: <Navigate to="/page1" />,
  },
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/page1",
        element: withLoadingComponent(<Page1 />),
      },
      {
        path: "/page2",
        element: withLoadingComponent(<Page2 />),
      },
    ],
  },
  //   {
  //     path: "/home",
  //     element: <Home />,
  //   },
  //   {
  //     path: "/about",
  //     element: withLoadingComponent(<About />),
  //   },
  //   {
  //     path: "/user",
  //     element: withLoadingComponent(<User />),
  //   },
];
export default routes;
