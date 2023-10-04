import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import "@fontsource/abeezee/400-italic.css";
import { useAuth } from "../context/auth-context";
import { colors } from "../styles/colors";
//import { CalculateOrReset3Points } from "./processTable"

export function SimulationData(){
  
  const DivSimul = styled.div`
    display:flex;
    grid-template-columns: auto, auto, auto;
    flex-wrap: wrap;
    justify-content: center;
    //column-gap:8px;
    row-gap:none;
    margin-bottom:20px;
    margin-top: 10px;
    margin-left: 50px;
    width: 500px;
    height: 140px; 
    background-color:${colors.gray}; 
    border-radius:8px;      
  `
 const Paragraph = styled.p`
    block-size:1px;
    margin-top: 5px;
    margin-left:30px;
    margin-bottom: 10px;
    font-family:"ABeeZee";
    font-size:12px;
    width: 133px;
    color: ${colors.white};  
  `
 const Div = styled.div`
    display:flex;
    aling-items: center;
    width:125px;
    height:40px;
    margin:8px 16px 6px 16px;
    background: ${colors.black};
    border:2px solid ${colors.grey}; 
    border-radius:8px;
    
  `
 const Select = styled.select`
    background-color: ${colors.black};
    color: ${colors.white};
    font-family:"ABeeZee";
    font-size: 13px;
    border: 0px;

  `
  const Label = styled.label`
    height: 20px;
    width: 60px;
    display:block;
    background-color:${colors.black};
    margin-top:8px;
    margin-left: 10px;
    font-family:"ABeeZee";
    font-size: 13px;
    color: grey;
              
  `
  const Input = styled.input`
    width:40px;
    height:18px;
    color:${colors.white};
    background-color: ${colors.black};
    margin:9px;
    font-family:"ABeeZee";
    font-size: 12px;
    border-radius: 4px;
    border-style:inset;
      
  `
const Button = styled.button`
    width:125px;
    height:40px;
    margin:3px 12px;
    border-radius:8px;
    background-color: ${colors.back};
    font-family:"ABeeZee";
    font-size: 13px;
    letter-spacing: 1px;
    color: ${colors.white};
  `

  //NUEVO---------------------------------------------------------------------------------------------------------------------------------------------------------
  const {simulation_data, setSimulation_data, setStateButtonCalculateProcessTable} = useAuth();

  const iniciarFuncion = () => {
    setStateButtonCalculateProcessTable(true);
  };
  //NUEVO----------------------------------------------------------------------------------------------------------------------------------------------------------
  const [mater,setMater] = useState("");

  function handleSimulacion(e){
    setSimulation_data({...simulation_data, [e.target.id]:e.target.value})
    console.log(simulation_data)
  }

  function handleListaMP(e){
    setMater(e.target.value)
  }

  useEffect(() => {
    let materiales = mater
    setSimulation_data({...simulation_data,
       material: materiales
    })
    console.log(materiales)
    console.log(simulation_data)

    let mostrarMP = simulation_data.material
    console.log(mostrarMP)
  }, [mater])

  return(
    <DivSimul>
        <div style={{display: "flex",}}>
          <Paragraph>Datos de simulacion</Paragraph>
          <Paragraph></Paragraph>
          <Paragraph style={{textAlign: "center",}}>nodos</Paragraph>
        </div>
      
        <Div style={{width:138}}>
          
          <Select style={{borderRadius:8,}} id={"Mater"} value={mater} onChange={(e) => handleListaMP(e)}>
            <option>Seleccionar MP</option>
            <option value="SHI-165">SHI-165</option>
            <option value="SHI-180">SHI-180</option>
            <option value="CRSI SAE 9254(REC)">CRSI SAE 9254(REC)</option>
            <option value="CRSI SAE 9254">CRSI SAE 9254</option>
            <option value="CRMN SAE 5160">CRMN SAE 5160</option>
            <option value="ACC">ACC</option>
            <option value="HS3 GALV">HS3 GALV</option>
            <option value="BCC CAL.8-14">BCC CAL.8-14</option>
            <option value="CP DSR">CP DSR</option>
            <option value="CP-DEINFRA">CP-DEINFRA</option>
            <option value="FDSICR (DSR)">FDSICR (DSR)</option>
            <option value="FTO">FTO</option>
            <option value="FTO-TWO (DSR)">FTO-TWO (DSR)</option>
            <option value="HD C-DSR">HD C-DSR</option>
            <option value="HD CLASE B">HD CLASE B</option>
            <option value="HD CLASE C">HD CLASE C</option>
            <option value="INOX CLASE A-DSR">INOX A-DSR</option>
            <option value="INOX CLASE B-DSR">INOX B-DSR</option>
            <option value="INOX SANDVIK">INOX SANDVIK</option>
                          
          </Select>
        </Div>
        
        <Div style={{marginLeft: 0}}>
          <Label style={{color: colors.white}}>deform</Label>
          <Input  value={simulation_data.deform} id={"deform"} onChange={(e) => handleSimulacion(e)}/>
        </Div>
        
        <Div>
          <Label style={{color: colors.white}}>grado</Label>
          <Input  value={simulation_data.grado} id={"grado"} onChange={(e) => handleSimulacion(e)}/>
        </Div>
        <div style={{display: "flex",columnGap:164,width:"100%", marginLeft: 20}}>
          <Button>Simular</Button>
          <Button onClick={iniciarFuncion}>Calcular</Button>

        </div>
                                
      </DivSimul>
  )
}