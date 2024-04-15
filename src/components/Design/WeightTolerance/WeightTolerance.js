import { useEffect, useState } from "react";
import "@fontsource/abeezee/400-italic.css";
import { useAuth } from "../../../context/auth-context";
import { Switch, breadcrumbsClasses } from "@mui/material";
import { isNullableTypeAnnotation } from "@babel/types";
import { DivSimul, DivCalculo, Div, Paragraph, InputLDA, Label, Select } from "./styles";


export function WeightTolerance(){
 

  const {filas, setFilas, originalDimensions, setOriginalDimensions, calculated_data, setCalculated_data, tablaToler, setTablaToler, coef, setCoef, grado, setGrado} = useAuth();

  const [production_data, setProduction_data] = useState({
      LDA:"",      
      LDA_adic:200,         
      Peso:"",
      Dmedio:"",    
  });

  const [boolSwitch,setBoolSwitch] = useState(false)
  function handleChange(){
      if (boolSwitch){
      setProduction_data({...production_data, LDA_adic: 200})
      }else{
          setProduction_data({...production_data, LDA_adic: 400})
      }
      setBoolSwitch(!boolSwitch)
      
  }
  
  function handleLDA_adic(e){
   setProduction_data({...production_data, LDA_adic : e.target.value})
  }


  useEffect(() => {
    setProduction_data({...production_data, LDA : Math.round((originalDimensions.Dext-originalDimensions.d)*originalDimensions.N*3.14),  Dmedio: (originalDimensions.Dext - originalDimensions.d)})
  }, [originalDimensions.d, originalDimensions.Dext, originalDimensions.N])
    
  useEffect(() => {
    setProduction_data({...production_data, Peso : Number(Math.pow(originalDimensions.d/12.7,2)*(production_data.LDA+production_data.LDA_adic)/1000).toFixed(2)}) 
  }, [production_data.LDA, production_data.LDA_adic])

  
  //Tolerancias para Dext (DIN EN 15800)
  const tolerDiam = [
    [0.63, 0.05, 0.07, 0.1, 0.07, 0.1, 0.15, 0.1, 0.15, 0.2],
    [1, 0.05, 0.07, 0.1, 0.08, 0.1, 0.15, 0.15, 0.2, 0.3],
    [1.6, 0.07, 0.1, 0.15, 0.1, 0.15, 0.2, 0.2, 0.3, 0.4],
    [2.5, 0.1, 0.1, 0.15, 0.15, 0.2, 0.25, 0.3, 0.4, 0.5],
    [4, 0.1, 0.15, 0.2, 0.2, 0.25, 0.3, 0.4, 0.5, 0.6],
    [6.3, 0.15, 0.15, 0.2, 0.25, 0.3, 0.35, 0.5, 0.6, 0.7],
    [10, 0.15, 0.2, 0.25, 0.3, 0.35, 0.4, 0.6, 0.7, 0.8],
    [16, 0.2, 0.25, 0.3, 0.35, 0.45, 0.5, 0.7, 0.9, 1],
    [25, 0.25, 0.3, 0.35, 0.4, 0.5, 0.6, 0.8, 1, 1.2],
    [31.5, 0.25, 0.3, 0.35, 0.5, 0.6, 0.7, 1, 1.2, 1.5],
    [40, 0.3, 0.4, 0.5, 0.6, 0.8, 0.9, 1.2, 1.5, 1.8],
    [50, 0.4, 0.5, 0.6, 0.8, 1, 1.1, 1.5, 2, 2.3],
    [63, 0.5, 0.7, 0.8, 1, 1.2, 1.4, 1.8, 2.4, 2.8],
    [80, 0.6, 0.8, 0.9, 1.2, 1.5, 1.7, 2.3, 3, 3.5],
    [100, 0.7, 1, 1.1, 1.4, 1.9, 2.2, 2.8, 3.7, 4.4],
    [125, 0.9, 1.2, 1.4, 1.8, 2.3, 2.7, 3.5, 4.6, 5.4],
    [160, 1.2, 1.5, 1.7, 2.1, 2.9, 3.3, 4.2, 5.7, 6.6],
    [200, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  ];


  function TablaToler(){
    const dmedio = (originalDimensions.Dext - originalDimensions.d)
    if(dmedio === "" || dmedio <= 0) return -1;
    const linea = tolerDiam.findIndex((_rango, indice, arreglo)=>{
        return Number(dmedio)>=arreglo[indice][0] && Number(dmedio)<=arreglo[indice+1][0]
      });
      
    let C = ((originalDimensions.Dext-originalDimensions.d)/originalDimensions.d).toFixed(2)
    let tolerBuscada=0;
    switch(grado){
    case "1":
      console.log("case1")
      if(C>=4 && C<8){
          tolerBuscada=tolerDiam[linea][1];
      }else if(C>=8 && C<=14){
          tolerBuscada=tolerDiam[linea][2];
      }else{
          tolerBuscada=tolerDiam[linea][3];
      }
      break;
    case "2":
      console.log("case2")
      if(C>=4 && C<8){
        tolerBuscada=tolerDiam[linea][4];
      }else if(C>=8 && C<=14){
        tolerBuscada=tolerDiam[linea][5];
      }else{
        tolerBuscada=tolerDiam[linea][6];
      }
      break;
    case "3":
      console.log("case3")
      if(C>=4 && C<8){
        tolerBuscada=tolerDiam[linea][7];
      }else if(C>=8 && C<=14){
        tolerBuscada=tolerDiam[linea][8];
      }else{
      tolerBuscada=tolerDiam[linea][9];
      }
      break;
    default:
      console.log("No entro a ninguno")
    }
    
   
    return tolerBuscada
  }

  useEffect(() => {
    let Q_Long=0
    if(grado==1){
    Q_Long=0.63
    }else if(grado==2){
    Q_Long=1
    }else {
    Q_Long=1.6
    }
    
    let af = 65.92*Math.pow(Number(originalDimensions.d),3.3)/Math.pow(calculated_data.Dmedio,1.6)*(-0.84*Math.pow(0.1*calculated_data.C,3)+3.781*Math.pow(0.1*calculated_data.C,2)-4.244*(0.1*calculated_data.C)+2.274);
    
    let kf = -1/(3*Math.pow((Number(originalDimensions.N)-1.75),2))+8/(5*(Number(originalDimensions.N)-1.75))+0.803;
    
    let toler=(kf*af*Q_Long/filas.Keq3).toFixed(1);

    
    let tolerancia = TablaToler()
    setTablaToler({...tablaToler,
    valor: tolerancia
    })

    setCoef({...coef, toler_L0: toler })
  }, [grado])

  
 return(
    <DivSimul>
      <div style={{display: "flex",}}>
        <Paragraph>Datos produccion</Paragraph>
        <Paragraph style={{textAlign: "center", marginLeft: 10, width: 150,}}>Maq.Auto<Switch onChange= {handleChange} size="small"/>Torno</Paragraph>
        
      </div>
      <div style={{display: "flex", columnGap: 8, justifyContent: "center",}}>
      <Div>
        <Label style={{marginRight: 25,}}>LDA</Label>
        <DivCalculo id={"LDA"}>{production_data.LDA}</DivCalculo>
      </Div> 
      <Div>
        <Label>LDA adic</Label>
        <InputLDA value={production_data.LDA_adic} type="number" id={"LDA adic"} onChange={(e) => handleLDA_adic(e)}/> 
      </Div>
      <Div>
        <Label >Peso</Label>
        <DivCalculo id={"Peso"}>{(!isNaN(production_data.Peso) && (production_data.Peso > 0)) === true ? (production_data.Peso) : ""}</DivCalculo>
      </Div>
      </div>
      

      <div>
        <Paragraph style={{display: "flex", marginTop: 0,}}>Grado tolerancias</Paragraph>
      </div>    
      <div style={{display: "flex", columnGap: 8, justifyContent: "center", }}>
 
        <Div>
        <Label>Grado</Label>
        <Select value={grado} id={"grado"} onChange={(e) => setGrado(e.target.value)}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </Select>
      </Div>

      <Div>
        <Label style={{marginRight: 0,}}>Dext={originalDimensions.Dext}±</Label>
        <DivCalculo style={{marginLeft: 0,}}>
          {(!isNaN(tablaToler.valor) && (tablaToler.valor > 0)) === true ? (tablaToler.valor) : ""}
        </DivCalculo>
      </Div>
      
      <Div>
        <Label style={{marginRight: 0,}}>L0={originalDimensions.L0}±</Label>
        <DivCalculo style={{marginLeft: 0,}} id={"toler_L0"}>{!isNaN(coef.toler_L0) === true ? (coef.toler_L0) : ""}</DivCalculo>
      </Div>
      </div>
      
   </DivSimul>
  );     
}



