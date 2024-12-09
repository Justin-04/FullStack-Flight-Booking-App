import "./App.css";
import { useEffect, useState, createContext } from "react";
import SignIn from "./pages/SignIn/SignIn";
import Register from "./pages/Register/Register";
import Main from "./pages/Main/Main";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cart from "./pages/Cart/Cart";
import Profile from "./pages/Profile/Profile";
import ForgotPassword from "./components/ForgotPassword/ForgotPassword";
import Admin from "./pages/Admin/Admin";
import { jwtDecode } from "jwt-decode";
import Timeout_ from "./components/Timeout/Session_Timeout";
const MyContext = createContext();

function App() {
  const [loggedin, setLogin] = useState(false);
  const [admin, setAdmin] = useState(false);
  const [warning, setWarning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const token = localStorage.getItem("token");
      if (token) {
        const decoded = jwtDecode(token);
        const currentDateInSeconds = Date.now() / 1000;
        const timeLeftInSeconds = decoded.exp - currentDateInSeconds;

        if (timeLeftInSeconds <= 0) {
          setWarning(true);
          handleLogOut();
        }
      }
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (localStorage.getItem("token") === null) {
      setLogin(false); //BUG might cause a problem later
    } else {
      if (localStorage.getItem("role") === "admin") {
        setAdmin(true);
      } else {
        setLogin(true);
      }
    }
  }, []);

  const handleID = () => {
    setLogin(true);
    localStorage.setItem("log", true);

    if (localStorage.getItem("role") === "admin") {
      setAdmin(true);
    }
  };

  const handleLogOut = () => {
    setLogin(false);
    setAdmin(false);
    console.log(loggedin);
    localStorage.clear();
  };

  const handleClick = () => {
    setWarning(false);
  };
  return (
    <>
      <Router>
        {warning ? <Timeout_ handleClick={handleClick} /> : ""}
        {admin ? (
          <Routes>
            <Route path="/" element={<Admin handleLogOut={handleLogOut} />} />
            <Route path="/forgotPass" element={<ForgotPassword />} />
          </Routes>
        ) : loggedin ? (
          <MyContext.Provider value={loggedin}>
            <Routes>
              <Route
                path="/"
                element={<Main id={loggedin} handleLogOut={handleLogOut} />}
              />
              <Route path="/forgotPass" element={<ForgotPassword />} />
              <Route path="/signin" element={<SignIn handleID={handleID} />} />
              <Route path="/register" element={<Register />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </MyContext.Provider>
        ) : (
          <>
            <MyContext.Provider value={loggedin}>
              <Routes>
                <Route
                  path="/"
                  element={<Main id={loggedin} handleLogOut={handleLogOut} />}
                />
                <Route path="/profile" element={<Profile />} />
                <Route
                  path="/signin"
                  element={<SignIn handleID={handleID} />}
                />
                <Route path="/forgotPass" element={<ForgotPassword />} />
              </Routes>
            </MyContext.Provider>
          </>
        )}
      </Router>
    </>
  );
}

export default App;
export { MyContext };
