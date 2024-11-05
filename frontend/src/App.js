import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState, createContext } from "react";
import SignIn from "./pages/SignIn/SignIn";
import Register from "./pages/Register/Register";
import Main from "./pages/Main/Main";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cart from "./pages/Cart/Cart";

const MyContext = createContext();

function App() {
  const [loggedin, setLogin] = useState(false);
  const [cart, setCart] = useState([]);

  const handleCart = (item) => {
    const found = cart.find((product) => product === item);
    if (found) {
      console.log("item alredy exits");
    } else {
      setCart([...cart, item]);
      console.log(cart);
    }
  };

  const handleID = () => {
    setLogin(true);
    localStorage.setItem("log", true);
  };

  const handleLogOut = () => {
    setLogin(false);
    console.log(loggedin);
    localStorage.clear();
  };
  return (
    <Router>
      {loggedin ? (
        <MyContext.Provider value={loggedin}>
          <Routes>
            <Route
              path="/"
              element={
                <Main
                  id={loggedin}
                  handleLogOut={handleLogOut}
                  handleCart={handleCart}
                  cart={cart}
                />
              }
            />
            <Route path="/cart" element={<Cart cart={cart} />} />
          </Routes>
        </MyContext.Provider>
      ) : (
        <>
          <Routes>
            <Route
              path="/"
              element={
                <Main
                id={loggedin}
                  handleLogOut={handleLogOut}
                  handleCart={handleCart}
                  cart={cart}
                />
              }
            />
            <Route path="/signin" element={<SignIn handleID={handleID} />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </>
      )}
    </Router>
  );
}

export default App;
export { MyContext };
