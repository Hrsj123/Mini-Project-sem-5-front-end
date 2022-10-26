import { Outlet } from "react-router-dom";
import Navbar from "./header_footer/Navbar";
import Footer from "./header_footer/Footer";

const Layout = () => {
  return (
    <div className="layout">
      <Navbar />
      <Outlet />                    {/* -----> Here Students' pages are added! */}
      <Footer />
    </div>
  );
}

export default Layout