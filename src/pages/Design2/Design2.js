import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { useAuth } from '../../context/auth-context';
import { colors } from "../../styles/colors";
import { CorrelativeData } from "../../components/Design/CorrelativeData/CorrelativeData";
import PrincipalData from "../../components/Design/PrincipalData/PrincipalData";
import SimulationData from "../../components/Design/SimulationData";
import CalculatedParameters from "../../components/Design/CalculatedParameters";
import { WeightTolerance } from "../../components/Design/WeightTolerance/WeightTolerance";
import { TextArea } from "../../components/Design/Textarea/Textarea";
import LongTable from "../../components/Design/LongTable";
import ProcessTable from "../../components/Design/ProcessTable/ProcessTable";
import LoadControlTable from "../../components/Design/LoadControlTable";
import { DataTypeDesign } from "../../components/Design/DataTypeDesign/DataTypeDesign";
import { Wrapper, Columna1 } from "./styles";


export default function Design2() {
    const {dimensions} = useAuth();
   
 return(
  <div style={{margin: "20px 200px"}}>
        <CorrelativeData/>
        <Wrapper>
            <div>
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
            </div>

            <div>
            <DataTypeDesign Data={<LongTable/>} text={"TABLA DE LONGITUDES"}/>
            <DataTypeDesign Data={<ProcessTable/>} text={"TABLA DE CALCULO"}/>
            </div>
        </Wrapper>
 </div>

 );
}