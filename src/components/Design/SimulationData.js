import { useEffect, useState } from "react";
import "@fontsource/abeezee/400-italic.css";
import { useAuth } from "../../context/auth-context";
import { DivSimul, Paragraph2, Div2, Select, Input, Button, Label } from "./style";
import { colors } from "../../styles/colors";


export function SimulationData(){
     
  const {simulation_data, setSimulation_data, setStateButtonCalculateProcessTable} = useAuth();

  const iniciarFuncion = () => {
    setStateButtonCalculateProcessTable(true);
  };
  
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
          <Paragraph2>Datos de simulacion</Paragraph2>
          <Paragraph2></Paragraph2>
          <Paragraph2 style={{textAlign: "center",}}>nodos</Paragraph2>
        </div>
      
        <Div2 style={{width:138}}>
          
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
        </Div2>
        
        <Div2 style={{marginLeft: 0}}>
          <Label style={{color: colors.white}}>deform</Label>
          <Input  value={simulation_data.deform} id={"deform"} onChange={(e) => handleSimulacion(e)}/>
        </Div2>
        
        <Div2>
          <Label style={{color: colors.white}}>grado</Label>
          <Input  value={simulation_data.grado} id={"grado"} onChange={(e) => handleSimulacion(e)}/>
        </Div2>
        <div style={{display: "flex",columnGap:164,width:"100%", marginLeft: 20}}>
          <Button>Simular</Button>
          <Button onClick={iniciarFuncion}>Calcular</Button>

        </div>
                                
      </DivSimul>
  )
}