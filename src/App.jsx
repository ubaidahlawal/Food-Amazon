import {BrowserRouter, Routes, Route} from "react-router-dom";
import SignUp from "./pages/SignUp.jsx";
import LogIn from "./pages/LogIn.jsx";
import Landing from "./pages/Landing.jsx";
import Landing2 from "./pages/Landing2.jsx";
import Landing3 from "./pages/Landing3.jsx";
import CartModal from "./pages/CartModal.jsx";
import Landing4 from "./pages/Landing4.jsx";
import Landing5 from "./pages/Landing5.jsx";
import Home from "./components/Home.jsx";

function App() {
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element = {<Home/>} />
      <Route path="/signup" element={<SignUp/>}/>
      <Route path="/login" element={<LogIn/>}/>
      <Route path="/landing" element = {<Landing/>}/>
      <Route path="/landing2" element = {<Landing2/>}/>
      <Route path="/landing3" element = {<Landing3/>}/>
      <Route path="/cart" element = {<CartModal/>} />
      <Route path="/landing4" element = {<Landing4/>}/>
      <Route path="/landing5" element = {<Landing5/>}/>
      <Route path="*" element = {<p>File Path Not Found</p>}/>
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;