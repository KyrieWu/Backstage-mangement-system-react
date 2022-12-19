import { useEffect } from "react";
import { useRoutes, useLocation, useNavigate } from "react-router-dom";
import router from "./router";
import { message } from "antd";

function ToPage1() {
  const navigateTo = useNavigate();
  useEffect(() => {
    navigateTo("/page1");
    message.warning("您已经登录过了!");
  }, []);

  return <div></div>;
}

function ToLogin() {
  const navigateTo = useNavigate();
  useEffect(() => {
    navigateTo("/login");
    //message.warning("您还没有登录，请登录!");
  }, []);

  return <div></div>;
}

function BeforeRouteEnter() {
  const outlet = useRoutes(router);

  const loaction = useLocation();

  let token = localStorage.getItem("wu-back-management-token");
  if (loaction.pathname === "/login" && token) {
    return <ToPage1 />;
  }

  if (loaction.pathname !== "/login" && !token) {
    return <ToLogin />;
  }

  return outlet;
}

function App() {
  return (
    <div className="App">
      {/* <NavLink to="/home">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/user">User</NavLink> */}
      {/*  类似于 vue中的router-view */}
      {/* <Outlet></Outlet> */}
      {/* {outlet} */}
      <BeforeRouteEnter />
    </div>
  );
}

export default App;
