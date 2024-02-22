
import Footer from "./components/user/footer/Footer";
import Header from "./components/user/header/Header";
import { Outlet } from "react-router-dom";



function App() {
  return( 
  <>
    <Header/>
    <Outlet/>
    <Footer/>
  </>
  )
}

export default App;
