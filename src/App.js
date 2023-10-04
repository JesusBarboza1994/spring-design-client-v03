import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Design from "./pages/Design/Design";

function App() {
    return(
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login/>}/>
          <Route path="/design" element={<Design/>}/>
        </Routes> 
      )
  }
  
  export default App;