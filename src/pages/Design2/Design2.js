import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { useAuth } from '../../context/auth-context';
import { calculateLinearRegression, generatePointForChart } from "../../utils/chart-utils";
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
import ControlLoadGraphic from "../../components/Design/ControlLoadGraphic";
import SimulatedLoadControl from "../../components/Design/SimulatedLoadControl";
import Spring3DLine from "../../components/Design/Spring3DLine/Spring3DLine";
import SpringStressSimulation from "../../components/Design/SpringStressSimulation";

import { DataTypeDesign } from "../../components/Design/DataTypeDesign/DataTypeDesign";
import { Wrapper, Columna1 } from "./styles";
import { Spring3d } from "../Design/styles";

const TotalLoadControl = () =>{
    return(
        <div style={{display: "flex", justifyContent: "space-between",}}>
            <LoadControlTable/>
            <SimulatedLoadControl/>
        </div>
    )
}
export default function Design2() {
    const {dimensions,controlCargas, setKControlCargas, setBControlCargas, } = useAuth();
    const [puntosCCGrafica, setPuntosCCGrafica] = useState([
        { x: 0, y: 0},
        { x: 0, y: 0}
      ])

    const [lineaCC, setLineaCC] = useState({
    k:0,      
    b:0,
    r2:0          
    })

    useEffect(() => {
    let arrayOfPoints = generatePointForChart(controlCargas)
    setPuntosCCGrafica(arrayOfPoints)
    setLineaCC(calculateLinearRegression(arrayOfPoints))

    }, [controlCargas])

    useEffect(() => {
        setKControlCargas(Number(lineaCC.k))
        setBControlCargas(Number(lineaCC.b))

        }, [lineaCC])

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
                <ControlLoadGraphic puntos={puntosCCGrafica} slope={lineaCC.k} intercept={lineaCC.b} rSquared={lineaCC.r2}/>
            </div>

            <div>
            <DataTypeDesign Data={<LongTable/>} text={"TABLA DE LONGITUDES"}/>
            <DataTypeDesign Data={<ProcessTable/>} text={"TABLA DE CALCULO"}/>
            <DataTypeDesign Data={<TotalLoadControl/>} text={"CONTROL DE CARGAS"}/>
            
             
            <DataTypeDesign Data={<Spring3d/>} text={"SIMULACION"}/>
            </div>
        </Wrapper>
 </div>

 );
}