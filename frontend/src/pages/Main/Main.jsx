import React from "react";
import "./Main.css";
import { useState } from "react";
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
import Cart from "../Cart/Cart";
const Main = ({id,data,handleLogOut}) => {
  const [user, setUser] = useState(id);
  const log=localStorage.getItem("log");

  return (
    <>
      {log ? (
        <>
         <div className="main-body">
            <Nav handleLogOut={handleLogOut} log={log} />
            <Welcome />
          </div>
          <section id="search">
            <Search data1={data} userID={log}/>
          </section>
          <Video1 />
          <section id="flights">
            <MyFlights />
          </section>
          <Footer />
        </>
      ) : (
        <>  
        <div className="main-body">
            <Nav handleLogOut={handleLogOut} log={log} />
            <Welcome />
          </div>
          <section id="search">
            <Search userID={log}/>
          </section>
          <Video1 />
          <Footer />
          
        </>
      )}
    </>

  );
};

export default Main;
