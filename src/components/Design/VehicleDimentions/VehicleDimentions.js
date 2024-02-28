import { useEffect, useState } from "react"
//import Input from "../../Input"
import styled from "@emotion/styled";
import { typography } from "../../../styles/typography";
import { fonts } from "../../../styles/typography";
import { colors } from "../../../styles/colors";
import { Wrapper, Label, DataContainer, Lado, DivSimul, DimCont, DimEjes } from "./styles"
import { Switch } from "@mui/material";

import { DimentionsInput } from "./DimentionsInput";
import { FaAngleRight } from "react-icons/fa6";


export function VehicleDimentions({setCounter, counter}){
	const [vehicleDimentions, setVehicleDimentions] = useState(localStorage.getItem("VehicleDimentions") ? JSON.parse(localStorage.getItem("VehicleDimentions")) : {
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

	useEffect(()=>{
		let acc = 0
		for (let i in vehicleDimentions){
				if(vehicleDimentions[i] !== "") acc += 1
		}
		setCounter({...counter, VehicleDimentions: {quantity: Object.keys(vehicleDimentions).length, counter: acc}}) 
		console.log(counter) 
		
	}, [])

	const handleChange = (e) =>{
		setVehicleDimentions({...vehicleDimentions,	[e.target.id]: e.target.value })
		let acc = 0
		for (let i in vehicleDimentions){
			if(i === e.target.id){
				if (e.target.value !== "") acc += 1
			}else{
				if(vehicleDimentions[i] !== "") acc += 1
			}
		}
		setCounter({...counter, VehicleDimentions: {quantity: Object.keys(vehicleDimentions).length, counter: acc}})
		localStorage.setItem("VehicleDimentions", JSON.stringify({...vehicleDimentions, [e.target.id]: e.target.value }))
		localStorage.setItem("counter", JSON.stringify({...counter, VehicleDimentions: {quantity: Object.keys(vehicleDimentions).length, counter: acc}})) 
		
	}

    const [isChecked, setIsChecked] = useState(false);
    const handleChangeChecked = () => {
      setIsChecked(!isChecked);
    }
		const vehiclePositionData = [
			{
				text:"LADO IZQUIERDO",
				img:"/Images/58izq.webp",
				imgNumberDel: "/Images/bolita1.png",
				imgNumberPost: "/Images/bolita2.png",
				divMedidasDel: (
					<DimCont>
						<DimentionsInput title="P-G" type="text" value={vehicleDimentions.pgDel_Izq} onChange={(e)=>handleChange(e)} id="pgDel_Izq" />
						<DimentionsInput title="LL-G" type="text" value={vehicleDimentions.llgDel_Izq} onChange={(e)=>handleChange(e)} id="llgDel_Izq"/>
						<DimentionsInput title ="INCLIN" type="text" value={vehicleDimentions.inclinationDel_Izq} onChange={(e)=>handleChange(e)} id="inclinationDel_Izq"/>
					</DimCont>	
				),
				divPesosDel: (
					<DimCont>
						<DimentionsInput id="pesoDel_Izq1" title ="PESO 1" value={vehicleDimentions.pesoDel_Izq1} onChange={(e)=>handleChange(e)}/>
						<DimentionsInput id="pesoDel_Izq2" title ="PESO 2" value={vehicleDimentions.pesoDel_Izq2} onChange={(e)=>handleChange(e)}/>
						<DimentionsInput id="pesoDel_Izq3" title ="PESO 3" value={vehicleDimentions.pesoDel_Izq3} onChange={(e)=>handleChange(e)}/>
					</DimCont>	
				),
				divMedidasPost: (
					<DimCont>
						<DimentionsInput title="P-G" type="text" value={vehicleDimentions.pgPost_Izq} onChange={(e)=>handleChange(e)} id="pgPost_Izq" />
						<DimentionsInput title="LL-G" type="text" value={vehicleDimentions.llgPost_Izq} onChange={(e)=>handleChange(e)} id="llgPost_Izq"/>
						<DimentionsInput title ="INCLIN" type="text" value={vehicleDimentions.inclinationPost_Izq} onChange={(e)=>handleChange(e)} id="inclinationPost_Izq"/>
					</DimCont>
				),
				divPesosPost: (
					<DimCont>
						<DimentionsInput id="pesoPost_Izq1" title ="PESO 1" value={vehicleDimentions.pesoPost_Izq1} onChange={(e)=>handleChange(e)}/>
						<DimentionsInput id="pesoPost_Izq2" title ="PESO 2" value={vehicleDimentions.pesoPost_Izq2} onChange={(e)=>handleChange(e)}/>
						<DimentionsInput id="pesoPost_Izq3" title ="PESO 3" value={vehicleDimentions.pesoPost_Izq3} onChange={(e)=>handleChange(e)}/>
					</DimCont>
				)
			},

			{
				text:"LADO DERECHO",
				img:"/Images/58der.webp",
				imgNumberDel: "/Images/bolita3.png",
				imgNumberPost: "/Images/bolita4.png",
				divMedidasDel: (
					<DimCont>
						<DimentionsInput title="P-G" type="text" value={vehicleDimentions.pgDel_Der} onChange={(e)=>handleChange(e)} id="pgDel_Der" />
						<DimentionsInput title="LL-G" type="text" value={vehicleDimentions.llgDel_Der} onChange={(e)=>handleChange(e)} id="llgDel_Der"/>
						<DimentionsInput title ="INCLIN" type="text" value={vehicleDimentions.inclinationDel_Der} onChange={(e)=>handleChange(e)} id="inclinationDel_Der"/>
					</DimCont>
				),
				divPesosDel: (
					<DimCont>
						<DimentionsInput id="pesoDel_Der1" title ="PESO 1" value={vehicleDimentions.pesoDel_Der1} onChange={(e)=>handleChange(e)}/>
						<DimentionsInput id="pesoDel_Der2" title ="PESO 2" value={vehicleDimentions.pesoDel_Der2} onChange={(e)=>handleChange(e)}/>
						<DimentionsInput id="pesoDel_Der3" title ="PESO 3" value={vehicleDimentions.pesoDel_Der3} onChange={(e)=>handleChange(e)}/>
					</DimCont>	
				),
				divMedidasPost: (
					<DimCont>
						<DimentionsInput title="P-G" type="text" value={vehicleDimentions.pgPost_Der} onChange={(e)=>handleChange(e)} id="pgPost_Der" />
						<DimentionsInput title="LL-G" type="text" value={vehicleDimentions.llgPost_Der} onChange={(e)=>handleChange(e)} id="llgPost_Der"/>
						<DimentionsInput title ="INCLIN" type="text" value={vehicleDimentions.inclinationPost_Der} onChange={(e)=>handleChange(e)} id="inclinationPost_Der"/>
					</DimCont>
				),
				divPesosPost: (
					<DimCont>
						<DimentionsInput id="pesoPost_Der1" title ="PESO 1" value={vehicleDimentions.pesoPost_Der1} onChange={(e)=>handleChange(e)}/>
						<DimentionsInput id="pesoPost_Der2" title ="PESO 2" value={vehicleDimentions.pesoPost_Der2} onChange={(e)=>handleChange(e)}/>
						<DimentionsInput id="pesoPost_Der3" title ="PESO 3" value={vehicleDimentions.pesoPost_Der3} onChange={(e)=>handleChange(e)}/>
					</DimCont>
				)
			}
			
		]

		const [vehiclePosition, setVehiclePosition] = useState(0)
		useEffect(() => {
			
		},[vehiclePosition])
    
		return(
		<div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",}}>
			{/* <Label>MODO IMAGEN<Switch onChange= {handleChange} size="big"/>MODO TABLA</Label> */}
		  
			<div style={{ gap: 30,}}>
				<Lado>{vehiclePositionData[vehiclePosition].text}</Lado>
				<div style={{display: "flex", justifyContent: "center", alignItems: "center", gap: 30,}}>
					<img src={vehiclePositionData[vehiclePosition].img} alt="imagen-vehiculo" style={{ maxWidth: "100%", height: "auto" }}/>
					<FaAngleRight style={{ cursor: "pointer", color: "black",}} size={40} onClick={() => setVehiclePosition(vehiclePosition === 0 ? 1 : 0)}/>
				</div>
			</div>

			<DataContainer> 
								
			   <DivSimul >
					<div style={{display: "flex", gap: 10, alignItems: "center", marginTop: 10, }}>
						<p style={{fontWeight: "bold", height: typography.text.md, color: colors.font.text }}>DEL {vehiclePosition === 0 ? "IZQ" : "DER"}</p>
						<img src={vehiclePositionData[vehiclePosition].imgNumberDel} width="28px" height="28px" alt="imagen1"/>
					</div>
					{vehiclePositionData[vehiclePosition].divMedidasDel}
					{vehiclePositionData[vehiclePosition].divPesosDel}
				</DivSimul>

				<DivSimul>
					<div style={{display: "flex", gap: 10, alignItems: "center", marginTop: 10,}}>
						<p style={{fontWeight: "bold", height: typography.text.md, color: colors.font.text }}>POST {vehiclePosition === 0 ? "IZQ" : "DER"}</p>
						<img src={vehiclePositionData[vehiclePosition].imgNumberPost} width="28px" height="28px" alt="imagen1"/>
					</div>
					{vehiclePositionData[vehiclePosition].divMedidasPost}
					{vehiclePositionData[vehiclePosition].divPesosPost}
				</DivSimul>
		   </DataContainer>

			<DimEjes>
				<DimentionsInput id="frontWheel_firstline" title ="EJE DEL-1° FILA" value={vehicleDimentions.frontWheel_firstline} onChange={(e)=>handleChange(e)}/>
				<DimentionsInput id="frontWheel_secondline" title ="EJE DEL-2° FILA" value={vehicleDimentions.frontWheel_secondline} onChange={(e)=>handleChange(e)}/>
				<DimentionsInput id="frontWheel_rearWheel" title ="EJE DEL-EJE POST" value={vehicleDimentions.frontWheel_rearWheel} onChange={(e)=>handleChange(e)}/>
				<DimentionsInput id="frontWheel_thirdline" title ="EJE DEL-MALETERO" value={vehicleDimentions.frontWheel_thirdline} onChange={(e)=>handleChange(e)}/>
			</DimEjes>
		       
	  </div>
    )
}