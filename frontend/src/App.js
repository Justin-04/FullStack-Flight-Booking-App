import logo from './logo.svg';
import './App.css';
import { createContext } from 'react';
import SignIn from './pages/SignIn/SignIn';
import Register from './pages/Register/Register';
import Main from './pages/Main/Main';
import ScrollToTop from './utilities/ScrollTop';

  const MyContext = createContext();
function App() {

const user_ID="1234";

  return (
   <>

   <MyContext.Provider value={user_ID}>
   <Main id={1}  />
</MyContext.Provider>
   {/* <SignIn /> 
   <Register/> */}
   
   </>
  );
}

export default App;
export { MyContext };