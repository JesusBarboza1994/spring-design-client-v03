import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Design from "./pages/Design/Design";
import Design2 from "./pages/Design2/Design2";
import SpringType from "./pages/SpringType";
import DesignInputData from "./pages/DesignInputData/DesignInputData";
import TotalizedFormat from "./pages/TotalizedFormat/TotalizedFormat";

function App() {
    return(
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login/>}/>
          <Route path="/spring_type" element={<SpringType/>}/>
          <Route path="/design_inputdata" element={<DesignInputData/>}/>
          <Route path="/prueba" element={<TotalizedFormat/>}/>
          <Route path="/design" element={<Design/>}/>
          <Route path="/design2" element={<Design2/>}/>
        </Routes> 
        
      )
  }
  
  export default App;