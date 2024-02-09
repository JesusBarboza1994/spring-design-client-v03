import { useEffect, useState } from "react";
import { useAuth } from '../../context/auth-context';
import { colors } from "../../styles/colors";
import CorrelativeData from "../../components/Design/CorrelativeData";
import PrincipalData from "../../components/Design/PrincipalData/PrincipalData";
import SimulationData from "../../components/Design/SimulationData";
import CalculatedParameters from "../../components/Design/CalculatedParameters";
import { WeightTolerance } from "../../components/Design/WeightTolerance/WeightTolerance";
import { TextArea } from "../../components/Design/Textarea/Textarea";
import { Wrapper, Columna1 } from "./styles";


export default function Design2() {
    const {dimensions} = useAuth();
   
return(
 <div>
  <CorrelativeData/>
    <Columna1>
        <PrincipalData/>
        <SimulationData/>
        <CalculatedParameters
            diam={dimensions.d} 
            diamext1={dimensions.Dext}
            diamint1={dimensions.Dint1}
            diamint2={dimensions.Dint2}
            vred1={dimensions.Vtas1}
            vred2={dimensions.Vtas2}
            numvts={dimensions.N}
            longitud={dimensions.L0}
            luz1={dimensions.Luz1}
            luz2={dimensions.Luz2}/>
        
        <WeightTolerance/>
        <TextArea/>
    </Columna1>

 </div>
 );
}