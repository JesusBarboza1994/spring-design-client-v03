import { useEffect, useState } from "react";
import "@fontsource/abeezee/400-italic.css";
import "@fontsource/inter";
import SimulationData from "../../components/Design/SimulationData";
import CalculatedParameters from "../../components/Design/CalculatedParameters";
import { WeightTolerance } from "../../components/Design/WeightTolerance/WeightTolerance";
import { TextArea } from "../../components/Design/Textarea/Textarea";
import { Switch, breadcrumbsClasses } from "@mui/material";
import ProcessTable from "../../components/Design/ProcessTable/ProcessTable";
import LoadControlTable from "../../components/Design/LoadControlTable";
import SpringTravelTable from "../../components/Design/SpringTravelTable/SpringTravelTable";
import LongTable from "../../components/Design/LongTable";
import TestStrength from "../../components/Design/TestStrength/TestStrength";
import ControlLoadGraphic from "../../components/Design/ControlLoadGraphic";
import SimulatedLoadControl from "../../components/Design/SimulatedLoadControl";
import Spring3DLine from "../../components/Design/Spring3DLine/Spring3DLine";
import SpringStressSimulation from "../../components/Design/SpringStressSimulation";

import { useAuth } from '../../context/auth-context';
import { calculateLinearRegression, generatePointForChart } from "../../utils/chart-utils";
import { isNullLiteral } from "@babel/types";
import { Form, Div, Input, DivCalculo, Label, DivSimulForm, DivSimul, Paragraph, Button, Length_table, Input8, Th, Th2, Td, Select, H1, H2, Canvas, Pform, Spring3d } from "./styles";
import { colors } from "../../styles/colors";

export default function Design() {

  const [production_data, setProduction_data] = useState({
    LDA:"",      
    LDA_adic:"",         
    Peso:"",
    Dmedio:"",    
  })
    
  const [data4, setData4] = useState({
    K:"",      
    F:"",         
    L:"",        
  })

  const {filas, dimensions, setDimensions, calculated_data, setCalculated_data, controlCargas, setKControlCargas, setBControlCargas, springPoints3D, springPointsSimulation} = useAuth();

  const [puntosCCGrafica, setPuntosCCGrafica] = useState([
    { x: 0, y: 0},
    { x: 0, y: 0}
  ])
  const [regLinealCCGrafica, setRegLinealCCGrafica] = useState([])

  const [lineaCC, setLineaCC] = useState({
    k:0,      
    b:0,
    r2:0          
  })

  const [type1,setType1] = useState("TASE");
  const [type2,setType2] = useState("TASE");
  const [mater,setMater] = useState([
    "SHI-180",
    "SHI-165",
    "CRSI SAE 9254(REC)",
    "CRSI SAE 9254",
    "CRMN SAE 5160",
    "ACC",
    "ACC HS3 GALV",
    "BCC CAL.8-14",
    "CP DSR",
    "CP-DEINFRA",
    "FDSICR (DSR)",
    "FTO",
    "FTO-TWO (DSR)",
    "HD C-DSR",
    "HD CLASE B",
    "HD CLASE C",
    "INOX CLASE A-DSR",
    "INOX CLASE B-DSR",
    "INOX SANDVIK"
  ]);
  
  const [descrip, setDescrip] = useState({
    descrip: "",
  });
  
  const [coef, setCoef] = useState({
    af : 0,
    kf : 0,
    Q_Long : 0,
    toler_L0: 0,
  });
 
  useEffect(() => {
    let extremo1 = type1
    let extremo2 = type2
    setDimensions({...dimensions,
      Ext1: extremo1, Ext2: extremo2
    })

  }, [type1, type2])

  
  useEffect(() => {
    setCalculated_data({...calculated_data,
      C : ((dimensions.Dext-dimensions.d)/dimensions.d).toFixed(2),
      Dmedio: (dimensions.Dext - dimensions.d), Rel_d1 : ((dimensions.Dint1 + dimensions.d)/(dimensions.Dext - dimensions.d)).toFixed(2),
      Rel_d2: ((dimensions.Dint2 + dimensions.d)/(dimensions.Dext - dimensions.d)).toFixed(2)})

  }, [dimensions.d, dimensions.Dext, dimensions.Dint1, dimensions.Dint2])

  useEffect(() => {
    setCalculated_data({...calculated_data, Vt_red_VT : ((dimensions.Vtas1+dimensions.Vtas2)/dimensions.N).toFixed(2) }) 

  }, [dimensions.Vtas1, dimensions.Vtas2, dimensions.N])

  useEffect(() => {
    setProduction_data({...production_data, LDA : Math.round((dimensions.Dext-dimensions.d)*dimensions.N*3.14),  Dmedio: (dimensions.Dext - dimensions.d)})
  }, [dimensions.d, dimensions.Dext, dimensions.N])

  useEffect(() => {
    setProduction_data({...production_data, Peso : (Math.pow(dimensions.d/12.7,2)*production_data.LDA/1000).toFixed(2)}) 
  }, [dimensions.d, production_data.LDA])


  
  useEffect(() => {
    let arrayOfPoints = generatePointForChart(controlCargas)
    setPuntosCCGrafica(arrayOfPoints)
    setLineaCC(calculateLinearRegression(arrayOfPoints))

  }, [controlCargas])

  useEffect(() => {
    setKControlCargas(Number(lineaCC.k))
    setBControlCargas(Number(lineaCC.b))

  }, [lineaCC])
  
 
  function handleInput(e){
    setDimensions({...dimensions, [e.target.id]:e.target.value})
  }
  function handleSubmit(e){
    e.preventDefault();
    console.log(dimensions)
  }
  function handlePrincipal(e){
    WeightTolerance.setProduction_data({...WeightTolerance.production_data, [e.target.id]:e.target.value})
    console.log(WeightTolerance.production_data)
  }
  
  return (
  <div className="App" style={{backgroundColor:colors.background, display:"flex", columnGap: 80 }}>
    
    <div>
      <H1> Diseño de Resortes</H1>
      <DivSimulForm>
        <Form onSubmit={handleSubmit}>
          <div>
            <Pform>Datos principales</Pform>
              <Div>
                <Label>d</Label>
                <Input  value={dimensions.d} type="number" id={"d"} onChange={(e) => handleInput(e)}/>
              </Div>
              <Div>
                <Label>Dext</Label>
                <Input  value={dimensions.Dext} type="number" id={"Dext"} onChange={(e) => handleInput(e)}/>
              </Div>
              <Div>
                <Label>N</Label>
                <Input  value={dimensions.N} type="number" id={"N"} onChange={(e) => handleInput(e)}/>
              </Div>
              <Div>
                <Label>L0</Label>
                <Input  value={dimensions.L0} type="number" id={"L0"} onChange={(e) => handleInput(e)}/>
              </Div>
              
          </div>

          <div>
            <Pform>Extremo 1</Pform>
              <Div>
                <Label>Luz1</Label>
                <Input  value={dimensions.Luz1} type="number" id={"Luz1"} onChange={(e) => handleInput(e)}/>
              </Div>
              <Div>
                <Label>Dint1</Label>
                <Input  value={dimensions.Dint1} type="number" id={"Dint1"} onChange={(e) => handleInput(e)}/>
              </Div>
              <Div>
                <Label>Vtas1</Label>
                <Input  value={dimensions.Vtas1} type="number" id={"Vtas1"} onChange={(e) => handleInput(e)}/>
              </Div>
              <Div>
                <Label>Ext1</Label>
                <Select value={type1} id={"Ext1"} onChange={(e) => setType1(e.target.value)}>
                  <option value="TASE">TASE</option>
                  <option value="TCSE">TCSE</option>
                  <option value="TCE">TCE</option>
                  <option value="TAE">TAE</option>
                </Select>
              </Div>
          </div>
          
          <div>
            <Pform>Extremo 2</Pform>
              <Div>
                <Label>Luz2</Label>
                <Input  value={dimensions.Luz2} type="number" id={"Luz2"} onChange={(e) => handleInput(e)}/>
              </Div>
              <Div>
                <Label>Dint2</Label>
                <Input  value={dimensions.Dint2} type="number" id={"Dint2"} onChange={(e) => handleInput(e)}/>
              </Div>
              <Div>
                <Label>Vtas2</Label>
                <Input  value={dimensions.Vtas2} type="number" id={"Vtas2"} onChange={(e) => handleInput(e)}/>
              </Div>
              <Div>
                <Label>Ext2</Label>
                <Select  value={type2} id={"Ext2"} onChange={(e) => setType2(e.target.value)}>
                  <option value="TASE">TASE</option>
                  <option value="TCSE">TCSE</option>
                  <option value="TCE">TCE</option>
                  <option value="TAE">TAE</option>
                </Select>
              </Div>
          </div>
            
        </Form>
      </DivSimulForm>


      <SimulationData/>

      <CalculatedParameters diam={dimensions.d} 
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
      <H1>Simulacion</H1>
      <Canvas/>
    </div>

    <div style={{display:"flex", marginTop:58, marginLeft: 50,}}>
      <div>
        <LongTable/>
        <div style={{display:"flex", gap: 200,}}>
         <H2>Cargas reales</H2>
         <H2>Cargas simuladas</H2>
        </div>
        
        <div style={{display:"flex", gap: 100,}}>
          <LoadControlTable L0={dimensions.L0}/>
          <SimulatedLoadControl/>
        </div>

        <div style={{display:"flex", gap: 70,}}>
          <TestStrength/>
          <TestStrength/>
        </div>
        
      </div>
      
    </div> 
    
    <div style={{display:"flex", marginTop:58, marginLeft: 50}}>        
      <div>
        <ProcessTable medidasRes={dimensions} extremo1={dimensions.Ext1} extremo2={dimensions.Ext2}/>
        
        <H2 style={{marginTop:40, marginBottom: 8 }}>Caracteristica del Resorte</H2>
        
        <ControlLoadGraphic puntos={puntosCCGrafica} slope={lineaCC.k} intercept={lineaCC.b} rSquared={lineaCC.r2}/>

        <h1>Simulacion</h1>
        <Spring3d>
            
          <Spring3DLine points={springPoints3D} wire={dimensions.d}></Spring3DLine>
          
        </Spring3d>

        <div>
          <SpringStressSimulation dataSimulation={springPointsSimulation}></SpringStressSimulation>
        </div>

      </div>

    </div>
         
     
  </div> 
   
  
  );
}
