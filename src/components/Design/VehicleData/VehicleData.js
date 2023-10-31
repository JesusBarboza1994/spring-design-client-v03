import { useState } from "react"
import Input from "../../Input"
import { Wrapper } from "./styles"

export function VehicleData(){
	const [dataVehicle, setDataVehicle] = useState({
		brand:"",
		model: "",
		year: "",
		body: "",
		plate: "",
		usage:"",
        extraload:"",
        position: "",
        fuel: "",
        cylinder: "",
        

	})
	return(
		<Wrapper>
			<div>
				<Input title="Nombre" value={dataClient.nombre} onChange={(e)=>setDataClient({...dataClient, nombre:e.target.value})} id="name"/>
				<Input title="DNI / RUC" value={dataClient.document} onChange={(e)=>setDataClient({...dataClient, document:e.target.value})} id="document"/>
				<Input title="Desarrollo" value={dataClient.develop} onChange={(e)=>setDataClient({...dataClient,develop:e.target.value})} id="develop"/>
			</div>
			<div>
				<Input title="Teléfono" value={dataClient.phone} onChange={(e)=>setDataClient({...dataClient, phone:e.target.value})} id="phone"/>
				<Input title="Correo" value={dataClient.email} onChange={(e)=>setDataClient({...dataClient, email:e.target.value})} id="email"/>
				<Input title="Version" value={dataClient.version} onChange={(e)=>setDataClient({...dataClient,version: e.target.value})} id="version"/>
			</div>
		</Wrapper>
	)
}