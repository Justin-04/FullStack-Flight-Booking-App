import React from "react";
import "./Main.css";
import Nav from "../../components/Nav/Nav";
import Welcome from "../../components/Welcome/Welcome";
import Search from "../../components/Search/Search";
import MyFlights from "../../components/myFlights/MyFlights";
import ScrollToTop from "../../utilities/ScrollTop";
import Flightmap from "../../components/FlightMap/Flightmap";
import SignIn from "../SignIn/SignIn";
import Register from "../Register/Register";
import Footer from "../../components/Footer/Footer";
import Video1 from "../../components/Video/Video";
const Main = () => {
  return (
    <>
      <div className="main-body">
        <Nav />
        <Welcome />
      </div>
      <section id="search">
        <Search />
      </section>
      <Video1/>
      <section id="flights">
        <MyFlights />
      </section>
     {/* <Flightmap />  */}

      <Footer /> 
    </>
  );
};

export default Main;
