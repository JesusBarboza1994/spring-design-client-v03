import { useState } from "react"
//import Input from "../../Input"
import { DimentionsInput, Wrapper, Label } from "./styles"
import { Switch } from "@mui/material";

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

	})
    const [isChecked, setIsChecked] = useState(false);
    const handleChange = () => {
      setIsChecked(!isChecked);
    }
  
    return(
		<Wrapper>
         <Label>Modo imagen<Switch onChange= {handleChange} size="big"/>Modo tabla</Label>
          <div>
             <img src="/Images/Component-58-Izq.webp" align="center" width="100%" />
             

			     <DimentionsInput id="pgDel_Izq" value={vehicleDimentions.pgDel_Izq} onChange={(e)=>setVehicleDimentions({...vehicleDimentions, pgDel_Izq:e.target.value})}/>
				
		  </div>
         
        
        </Wrapper>
    )
}