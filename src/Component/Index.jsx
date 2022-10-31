import React from "react";
import About from "./About";
import AboutCompany from "./AboutCompany";
import AboutService from "./AboutService";
import Banner from "./Banner";
import Blog from "./Blog";
import Counterup from "./Counterup";
import Feature from "./Feature";
import Footer from "./Footer";
import GoTop from "./GoTop";
import NavBar from "./NavBar";
import Preloader from "./PreLoader";
import Price from "./Price";
import Subscribe from "./Subscribe";
import Work from "./Work";
import FeedBack from "./FeedBack";
import UpFooter from "./UpFooter";
function Index() {
  return (
    <>
      {/* <Preloader /> */}

      <NavBar />
      <Banner />
      <Feature />
      <About />
      {/* <FeedBack /> */}
      <AboutCompany />
      <Work />
      <Price />
      <Counterup />
      <AboutService />
      <Subscribe />
      <Blog />
      <Footer />
      {/* <UpFooter /> */}
      <GoTop />
    </>
  );
}

export default Index;
