import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Design from "./pages/Design/Design";
import Design2 from "./pages/Design2/Design2";
// import SpringType from "./pages/SpringType";
import DesignInputData from "./pages/DesignInputData/DesignInputData";
import TotalizedFormat from "./pages/TotalizedFormat/TotalizedFormat";
import Cotizador from "./pages/Cotizador/Cotizador";
import Seguimiento from "./pages/Seguimiento/Seguimiento";

function App() {
    return(
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login/>}/>
          {/* <Route path="/spring-type" element={<SpringType/>}/> */}
          <Route path="/design_inputdata" element={<DesignInputData/>}/>
          <Route path="/prueba" element={<TotalizedFormat/>}/>
          <Route path="/seguimiento" element={<Seguimiento/>}/>
          <Route path="/design" element={<Design/>}/>
          <Route path="/design2" element={<Design2/>}/>
          <Route path="/cotizador" element={<Cotizador/>}/>
        </Routes> 
        
      )
  }
  
  export default App;