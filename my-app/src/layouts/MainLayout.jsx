import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Explore from "../components/Explore";
import SocialMedia from "../components/SocialMedia";
import { Outlet } from "react-router-dom";

const MainLayout = ({ user }) => {
  return (
    <>
      <Navbar user={user} />
      <Outlet />
      <Explore />
      <Footer />
      <SocialMedia />
    </>
  );
};

export default MainLayout;
