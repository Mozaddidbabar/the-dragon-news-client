import { Outlet } from "react-router-dom";
import TopNav from "../../shared/TopNav/TopNav";

const LoginLayout = () => {
  return (
    <div>
      <TopNav></TopNav>
      <Outlet></Outlet>
    </div>
  );
};

export default LoginLayout;
