import { useState } from "react"
//import Input from "../../Input"
import styled from "@emotion/styled";
import { colors } from "../../../styles/colors";
import { Wrapper, Label, DimentionsContainer, DivContainer, Lado, SpanDot, Next } from "./styles"
import { Switch } from "@mui/material";
import Slideshow from "./script";
import { DimentionsInput } from "./DimentionsInput";

export function VehicleDimentions(){
	const [vehicleDimentions, setVehicleDimentions] = useState({
		pgDel_Izq:"",
		llgDel_Izq: "",
		pesoDel_Izq1: "",
		pesoDel_Izq2: "",
		pesoDel_Izq3: "",
		inclinationDel_Izq:"",
        pgPost_Izq:"",
		llgPost_Izq: "",
		pesoPost_Izq1: "",
		pesoPost_Izq2: "",
		pesoPost_Izq3: "",
		inclinationPost_Izq:"",

        pgDel_Der:"",
		llgDel_Der: "",
		pesoDel_Der1: "",
		pesoDel_Der2: "",
		pesoDel_Der3: "",
		inclinationDel_Der:"",
        pgPost_Der:"",
		llgPost_Der: "",
		pesoPost_Der1: "",
		pesoPost_Der2: "",
		pesoPost_Der3: "",
		inclinationPost_Der:"",

		frontWheel_firstline: "",
		frontWheel_secondline: "",
		frontWheel_rearWheel: "",
		frontWheel_thirdline: "",

	})
    const [isChecked, setIsChecked] = useState(false);
    const handleChange = () => {
      setIsChecked(!isChecked);
    }
  
    return(
		<Wrapper>
          <Label>Modo imagen<Switch onChange= {handleChange} size="big"/>Modo tabla</Label>
		  <Slideshow/>
			

            
			<div style={{display: "flex", columnGap: 50, marginTop: 50, justifyContent: "center"}}> 
			 <DimentionsContainer>
				 <label>DEL IZQ</label>
			     <DimentionsInput title="P-G" value={vehicleDimentions.pgDel_Izq} onChange={(e)=>setVehicleDimentions({...vehicleDimentions, pgDel_Izq:e.target.value})} id="pgDel_Izq" />
			     <DimentionsInput title="LL-G" value={vehicleDimentions.llgDel_Izq} onChange={(e)=>setVehicleDimentions({...vehicleDimentions, llgDel_Izq:e.target.value})} id="llgDel_Izq" />
			     <DimentionsInput id="pesoDel_Izq1" title ="PESO 1" value={vehicleDimentions.pesoDel_Izq1} onChange={(e)=>setVehicleDimentions({...vehicleDimentions, pesoDel_Izq1:e.target.value})}/>
			     <DimentionsInput id="pesoDel_Izq2" title ="PESO 2" value={vehicleDimentions.pgDel_Izq} onChange={(e)=>setVehicleDimentions({...vehicleDimentions, pgDel_Izq:e.target.value})}/>
			     <DimentionsInput id="pesoDel_Izq3" title ="PESO 3" value={vehicleDimentions.pgDel_Izq} onChange={(e)=>setVehicleDimentions({...vehicleDimentions, pgDel_Izq:e.target.value})}/>
			     <DimentionsInput id="inclinationDel_Izq" title ="INCLIN" value={vehicleDimentions.pgDel_Izq} onChange={(e)=>setVehicleDimentions({...vehicleDimentions, pgDel_Izq:e.target.value})}/>
			 </DimentionsContainer>
			 <DimentionsContainer>
				 <label>POST IZQ</label>
			     <DimentionsInput id="pgPost_Izq" title ="P-G" value={vehicleDimentions.pgPost_Izq} onChange={(e)=>setVehicleDimentions({...vehicleDimentions, pgPost_Izq:e.target.value})}/>
			     <DimentionsInput id="llgPost_Izq" title ="LL-G" value={vehicleDimentions.llgPost_Izq} onChange={(e)=>setVehicleDimentions({...vehicleDimentions, llgPost_Izq:e.target.value})}/>
			     <DimentionsInput id="pesoPost_Izq1" title ="PESO 1" value={vehicleDimentions.pesoPost_Izq1} onChange={(e)=>setVehicleDimentions({...vehicleDimentions, pesoPost_Izq1:e.target.value})}/>
			     <DimentionsInput id="pesoPost_Izq2" title ="PESO 2" value={vehicleDimentions.pgPost_Izq} onChange={(e)=>setVehicleDimentions({...vehicleDimentions, pgPost_Izq:e.target.value})}/>
			     <DimentionsInput id="pesoPost_Izq3" title ="PESO 3" value={vehicleDimentions.pgPost_Izq} onChange={(e)=>setVehicleDimentions({...vehicleDimentions, pgPost_Izq:e.target.value})}/>
			     <DimentionsInput id="inclinationPost_Izq" title ="INCLIN" value={vehicleDimentions.pgPost_Izq} onChange={(e)=>setVehicleDimentions({...vehicleDimentions, pgPost_Izq:e.target.value})}/>
			 </DimentionsContainer>
             
             <DimentionsContainer>
			     <label></label>
				 <DimentionsInput id="frontWheel_firstline" title ="EJE DEL-1° FILA" value={vehicleDimentions.frontWheel_firstline} onChange={(e)=>setVehicleDimentions({...vehicleDimentions, frontWheel_firstline:e.target.value})}/>
			     <DimentionsInput id="frontWheel_secondline" title ="EJE DEL-2° FILA" value={vehicleDimentions.frontWheel_secondline} onChange={(e)=>setVehicleDimentions({...vehicleDimentions, frontWheel_secondline:e.target.value})}/>
				 <DimentionsInput id="frontWheel_rearWheel" title ="EJE DEL-EJE POST" value={vehicleDimentions.frontWheel_rearWheel} onChange={(e)=>setVehicleDimentions({...vehicleDimentions, frontWheel_rearWheel:e.target.value})}/>
			     <DimentionsInput id="frontWheel_thirdline" title ="EJE DEL-MALETERO" value={vehicleDimentions.frontWheel_thirdline} onChange={(e)=>setVehicleDimentions({...vehicleDimentions, frontWheel_thirdline:e.target.value})}/>
			 </DimentionsContainer>
			 
				
		  </div>
         
        
        </Wrapper>
    )
}