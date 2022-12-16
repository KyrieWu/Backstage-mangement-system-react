import { useRoutes, NavLink } from "react-router-dom";
import router from "./router";

function App() {
  const outlet = useRoutes(router);
  return (
    <div className="App">
      {/* <NavLink to="/home">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/user">User</NavLink> */}
      {/*  类似于 vue中的router-view */}
      {/* <Outlet></Outlet> */}
      {outlet}
    </div>
  );
}

export default App;
