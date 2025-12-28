import {BrowserRouter, Routes, Route} from "react-router-dom";
import SignUp from "./pages/SignUp.jsx";
import LogIn from "./pages/LogIn.jsx";
import Landing from "./pages/Landing.jsx";

function App() {
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/signup" element={<SignUp/>}/>
      <Route path="/login" element={<LogIn/>}/>
      <Route path="/" element = {<Landing/>}/>
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;