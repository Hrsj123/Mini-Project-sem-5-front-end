import { Outlet } from "react-router-dom";
import Navbar from "./header_footer/Navbar";
import Footer from "./header_footer/Footer";
import './css/layout.css';

const Layout = () => {
  return (
    <div className="layout">
      <div className="content-wrap">
        <Navbar />
        <Outlet />                    {/* -----> Here Students' pages are added! */}
      </div>
      <Footer />
    </div>
  );
}

export default Layout