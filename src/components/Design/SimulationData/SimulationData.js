import { useEffect, useState } from "react";
import "@fontsource/abeezee/400-italic.css";
import { useAuth } from "../../../context/auth-context";
import { DivSimul, Paragraph2, Div2, Select, Input, Button, Label } from "./styles";
import { colors } from "../../../styles/colors";

import apiFetch from "../../../services/api-fetch";

export function SimulationData(){
     
  const {dimensions, simulation_data, setSimulation_data, setStateButtonCalculateProcessTable, setSpringPoints3D, setSpringPointsSimulation} = useAuth();

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

  async function createSpring() {

    let endpoint = 'create-spring/';
    let requestBody = {
      "wire":Number(dimensions.d),
      "diam_ext1":Number(dimensions.Dext),
      "diam_ext2":Number(dimensions.Dext2),
      "diam_int1":Number(dimensions.Dint1),
      "diam_int2":Number(dimensions.Dint2),
      "length":Number(dimensions.L0),
      "coils":Number(dimensions.N),
      "coil_direction":"Derecha",
      "end1":dimensions.Ext1,
      "luz1":Number(dimensions.Luz1),
      "coils_red_1":Number(dimensions.Vtas1),
      "coils_amp_1":0,
      "detail1_end1":"-",
      "detail2_end1":"-",
      "detail3_end1":"-",
      "eccentricity1":0,
      "end2":dimensions.Ext2,
      "luz2":Number(dimensions.Luz2),
      "coils_red_2":Number(dimensions.Vtas2),
      "coils_amp_2":0,
      "detail1_end2":"-",
      "detail2_end2":"-",
      "detail3_end2":"-",
      "eccentricity2":0,
      "grade":Number(simulation_data.grado)
    };

    try {
      const response = await apiFetch(endpoint, {
        method: 'POST', 
        body: requestBody, 
      });

      console.log('Resorte creado exitosamente:', response);
      setSpringPoints3D(response)
      
    } catch (error) {
      console.error('Error al crear el resorte:', error.message);
      
    }
  }

  async function simulateSpring() {

    let endpoint = 'simulate-spring/';
    let requestBody = {
      "wire":Number(dimensions.d),
      "diam_ext1":Number(dimensions.Dext),
      "diam_ext2":Number(dimensions.Dext2),
      "diam_int1":Number(dimensions.Dint1),
      "diam_int2":Number(dimensions.Dint2),
      "length":Number(dimensions.L0),
      "coils":Number(dimensions.N),
      "coil_direction":"Derecha",
      "end1":dimensions.Ext1,
      "luz1":Number(dimensions.Luz1),
      "coils_red_1":Number(dimensions.Vtas1),
      "coils_amp_1":0,
      "detail1_end1":"-",
      "detail2_end1":"-",
      "detail3_end1":"-",
      "eccentricity1":0,
      "end2":dimensions.Ext2,
      "luz2":Number(dimensions.Luz2),
      "coils_red_2":Number(dimensions.Vtas2),
      "coils_amp_2":0,
      "detail1_end2":"-",
      "detail2_end2":"-",
      "detail3_end2":"-",
      "eccentricity2":0,
      "grade":Number(simulation_data.grado)
    };

    try {
      const response = await apiFetch(endpoint, {
        method: 'POST', 
        body: requestBody, 
      });

      console.log('Resorte simulado exitosamente:', response);
      setSpringPointsSimulation(response)
      
    } catch (error) {
      console.error('Error al simular el resorte:', error.message);
      
    }
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
        <Label>Deform.</Label>
        <Input  value={simulation_data.deform} id={"deform"} onChange={(e) => handleSimulacion(e)}/>
      </Div2>
      
      <Div2>
        <Label>Grado</Label>
        <Input  value={simulation_data.grado} id={"grado"} onChange={(e) => handleSimulacion(e)}/>
      </Div2>
      <div style={{display: "flex",columnGap:6,width:"100%", marginLeft: 20}}>
        <Button onClick={createSpring}>Modelar</Button>
        <Button onClick={simulateSpring}>Simular</Button>
        <Button onClick={iniciarFuncion}>Calcular</Button>

      </div>
                              
    </DivSimul>
  )
}