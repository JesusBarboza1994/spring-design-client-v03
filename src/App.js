import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import DesignPrueba from "./pages/DesignPrueba/DesignPrueba";
import OriginalSample from "./pages/OriginalSample/OriginalSample";
// import SpringType from "./pages/SpringType";
import DesignInputData from "./pages/DesignInputData/DesignInputData";
import Medidas from "./pages/Medidas/Medidas";
import Cotizador from "./pages/Cotizador/Cotizador";
import Seguimiento from "./pages/Seguimiento/Seguimiento";
import TotalDesign from "./pages/TotalDesign/TotalDesign";

function App() {
    return(
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login/>}/>
          {/* <Route path="/spring-type" element={<SpringType/>}/> */}
          <Route path="/design_inputdata" element={<DesignInputData/>}/>
          <Route path="/design" element={<TotalDesign/>}/>

          <Route path="/cotizador" element={<Cotizador/>}/>

          <Route path="/medidas" element={<Medidas/>}/>
          <Route path="/seguimiento" element={<Seguimiento/>}/>
          <Route path="/designPrueba" element={<DesignPrueba/>}/>
          <Route path="/originalSample" element={<OriginalSample/>}/>
          
          
        </Routes> 
        
      )
  }
  
  export default App;