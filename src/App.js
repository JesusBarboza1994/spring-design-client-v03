import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Design from "./pages/Design/Design";
import SpringType from "./pages/SpringType/SpringType";
import DesignInputData from "./pages/DesignInputData/DesignInputData";

function App() {
    return(
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login/>}/>
          <Route path="/spring_type" element={<SpringType/>}/>
          <Route path="/design_inputdata" element={<DesignInputData/>}/>
          <Route path="/design" element={<Design/>}/>
        </Routes> 
      )
  }
  
  export default App;