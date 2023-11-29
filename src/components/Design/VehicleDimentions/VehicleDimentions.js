import { useEffect, useState } from "react"
//import Input from "../../Input"
import styled from "@emotion/styled";
import { typography } from "../../../styles/typography";
import { fonts } from "../../../styles/typography";
import { colors } from "../../../styles/colors";
import { Wrapper, Label, DimentionsContainer, DivContainer, Lado, SpanDot, Next } from "./styles"
import { Switch } from "@mui/material";
import Slideshow from "./script";
import { DimentionsInput } from "./DimentionsInput";
import { FaAngleRight } from "react-icons/fa6";

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
		const vehiclePoisitionData = [
			{
				text:"LADO IZQUIERDO",
				img:"/Images/Component-58-Izq.webp",
				imgNumberDel: "/Images/1.png",
				imgNumberPost: "/Images/2.png",
			},
			{
				text:"LADO DERECHO",
				img:"/Images/Component-58-Der.webp",
				imgNumberDel: "/Images/4.png",
				imgNumberPost: "/Images/3.png",
			}
		]
		const [vehiclePosition, setVehiclePosition] = useState(0)
		useEffect(() => {
			
		},[vehiclePosition])
    return(
		<Wrapper>
			<Label>MODO IMAGEN<Switch onChange= {handleChange} size="big"/>MODO TABLA</Label>
		  {/* <Slideshow/>   */}
			<div>
				<p>{vehiclePoisitionData[vehiclePosition].text}</p>
				<div style={{display: "flex", justifyContent: "space-evenly", alignItems: "center"}}>
					<img src={vehiclePoisitionData[vehiclePosition].img} alt="imagen-vehiculo"/>
					<FaAngleRight onClick={() => setVehiclePosition(vehiclePosition === 0 ? 1 : 0)}/>
				</div>
			</div>
			<div style={{display: "flex", columnGap: 150, marginTop: 50, justifyContent: "center"}}> 
			 <DimentionsContainer>
				 	<div style={{display: "flex", gap: 10, alignItems: "center"}}>
						<p style={{fontWeight: "bold", height: typography.text.md, color: colors.font.text }}>DEL {vehiclePosition === 0 ? "IZQ" : "DER"}</p>
				 		<img src={vehiclePoisitionData[vehiclePosition].imgNumberDel} width="28px" height="28px" alt="imagen1"/>
					</div>
			     <DimentionsInput title="P-G" value={vehicleDimentions.pgDel_Izq} onChange={(e)=>setVehicleDimentions({...vehicleDimentions, pgDel_Izq:e.target.value})} id="pgDel_Izq" />
			     <DimentionsInput title="LL-G" value={vehicleDimentions.llgDel_Izq} onChange={(e)=>setVehicleDimentions({...vehicleDimentions, llgDel_Izq:e.target.value})} id="llgDel_Izq" />
			     <DimentionsInput id="pesoDel_Izq1" title ="PESO 1" value={vehicleDimentions.pesoDel_Izq1} onChange={(e)=>setVehicleDimentions({...vehicleDimentions, pesoDel_Izq1:e.target.value})}/>
			     <DimentionsInput id="pesoDel_Izq2" title ="PESO 2" value={vehicleDimentions.pgDel_Izq} onChange={(e)=>setVehicleDimentions({...vehicleDimentions, pgDel_Izq:e.target.value})}/>
			     <DimentionsInput id="pesoDel_Izq3" title ="PESO 3" value={vehicleDimentions.pgDel_Izq} onChange={(e)=>setVehicleDimentions({...vehicleDimentions, pgDel_Izq:e.target.value})}/>
			     <DimentionsInput id="inclinationDel_Izq" title ="INCLIN" value={vehicleDimentions.pgDel_Izq} onChange={(e)=>setVehicleDimentions({...vehicleDimentions, pgDel_Izq:e.target.value})}/>
			 </DimentionsContainer>
			 <DimentionsContainer>
			     <div style={{display: "flex"}}><label style={{fontWeight: "bold", height: typography.text.md}}>POST {vehiclePosition === 0 ? "IZQ" : "DER"}</label>
				 <img src={vehiclePoisitionData[vehiclePosition].imgNumberPost} width="28px"/></div>
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