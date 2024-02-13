import { useState } from "react"
import Input from "../../Input"
import { Wrapper } from "./styles"

export function VehicleData({setCounter, counter}){
	const [dataVehicle, setDataVehicle] = useState(localStorage.getItem("VehicleData") ? JSON.parse(localStorage.getItem("VehicleData")) : {
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
		wheelDrive: "",
		vin: "",
		supplementType: "",
		thickness: "",
		tank: "",
		neto: "",
		bruto: "",
		seatRows: "",
		mileage: "",
		originTire: "",
		installedTire: "",
	})

	const handleChange = (e) =>{
		setDataVehicle({...dataVehicle,	[e.target.id]: e.target.value })
		let acc = 0
		for (let i in dataVehicle){
			if(i === e.target.id){
				if (e.target.value !== "") acc += 1
			}else{
				if(dataVehicle[i] !== "") acc += 1
			}
		}
		setCounter({...counter, VehicleData: {quantity: Object.keys(dataVehicle).length, counter: acc}})
		localStorage.setItem("VehicleData", JSON.stringify({...dataVehicle, [e.target.id]: e.target.value }))
		localStorage.setItem("counter", JSON.stringify({...counter, VehicleData: {quantity: Object.keys(dataVehicle).length, counter: acc}}))
	}

	return(
		<Wrapper>
			<div>
				<Input title="Marca" value={dataVehicle.brand} onChange={(e)=>handleChange(e)} id="brand"/>
				<Input title="Modelo" value={dataVehicle.model} onChange={(e)=>handleChange(e)} id="model"/>
				<Input title="Año" value={dataVehicle.year} onChange={(e)=>handleChange(e)} id="year"/>
				<Input title="Carrocería" value={dataVehicle.body} onChange={(e)=>handleChange(e)} id="body"/>
				<Input title="Placa" value={dataVehicle.plate} onChange={(e)=>handleChange(e)} id="plate"/>
				<Input title="Uso" value={dataVehicle.usage} onChange={(e)=>handleChange(e)} id="usage"/>
				<Input title="Cargas extra" value={dataVehicle.extraload} onChange={(e)=>handleChange(e)} id="extraload"/>
			</div>
			<div>
				<Input title="Posición" value={dataVehicle.position} onChange={(e)=>handleChange(e)} id="position"/>
				<Input title="Combustible" value={dataVehicle.fuel} onChange={(e)=>handleChange(e)} id="fuel"/>
				<Input title="Cilindrada" value={dataVehicle.cylinder} onChange={(e)=>handleChange(e)} id="cylinder"/>
				<Input title="Tracción" value={dataVehicle.wheelDrive} onChange={(e)=>handleChange(e)} id="wheelDrive"/>
				<Input title="VIN" value={dataVehicle.vin} onChange={(e)=>handleChange(e)} id="vin"/>
				<Input title="Tipo de suple" value={dataVehicle.supplementType} onChange={(e)=>handleChange(e)} id="supplementType"/>
				<Input title="Espesor de suple" value={dataVehicle.thickness} onChange={(e)=>handleChange(e)} id="thickness"/>
		  </div>
          <div>
				<Input title="Tanque de gas" value={dataVehicle.tank} onChange={(e)=>handleChange(e)} id="tank"/>
				<Input title="Peso neto (kg)" value={dataVehicle.neto} onChange={(e)=>handleChange(e)} id="neto"/>
				<Input title="Peso bruto (kg)" value={dataVehicle.bruto} onChange={(e)=>handleChange(e)} id="bruto"/>
				<Input title="Filas de asientos" value={dataVehicle.seatRows} onChange={(e)=>handleChange(e)} id="seatRows"/>
				<Input title="Kilometraje (km)" value={dataVehicle.mileage} onChange={(e)=>handleChange(e)} id="mileage"/>
				<Input title="Llantas originales" value={dataVehicle.originTire} onChange={(e)=>handleChange(e)} id="originTire"/>
				<Input title="Llantas instaladas" value={dataVehicle.installedTire} onChange={(e)=>handleChange(e)} id="installedTire"/>
		  </div>

		</Wrapper>
	)
}