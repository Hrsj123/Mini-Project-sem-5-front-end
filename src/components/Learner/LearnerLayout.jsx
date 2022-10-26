import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Outlet />                    {/* -----> Here Students' pages are added! */}
    </>
  );
}

export default Layout