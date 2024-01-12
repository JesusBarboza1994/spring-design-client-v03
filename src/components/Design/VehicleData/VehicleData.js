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

	return(
		<Wrapper>
			<div>
				<Input title="Marca" value={dataVehicle.brand} onChange={(e)=>setDataVehicle({...dataVehicle, brand:e.target.value})} id="brand"/>
				<Input title="Modelo" value={dataVehicle.model} onChange={(e)=>setDataVehicle({...dataVehicle, model:e.target.value})} id="model"/>
				<Input title="Año" value={dataVehicle.year} onChange={(e)=>setDataVehicle({...dataVehicle, year:e.target.value})} id="year"/>
				<Input title="Carrocería" value={dataVehicle.body} onChange={(e)=>setDataVehicle({...dataVehicle, body:e.target.value})} id="body"/>
				<Input title="Placa" value={dataVehicle.plate} onChange={(e)=>setDataVehicle({...dataVehicle, plate:e.target.value})} id="plate"/>
				<Input title="Uso" value={dataVehicle.usage} onChange={(e)=>setDataVehicle({...dataVehicle, usage:e.target.value})} id="usage"/>
				<Input title="Cargas extra" value={dataVehicle.extraload} onChange={(e)=>setDataVehicle({...dataVehicle,extraload:e.target.value})} id="extraload"/>
			</div>
			<div>
				<Input title="Posición" value={dataVehicle.position} onChange={(e)=>setDataVehicle({...dataVehicle, position:e.target.value})} id="position"/>
				<Input title="Combustible" value={dataVehicle.fuel} onChange={(e)=>setDataVehicle({...dataVehicle, fuel:e.target.value})} id="fuel"/>
				<Input title="Cilindrada" value={dataVehicle.cylinder} onChange={(e)=>setDataVehicle({...dataVehicle, cylinder: e.target.value})} id="cylinder"/>
				<Input title="Tracción" value={dataVehicle.wheelDrive} onChange={(e)=>setDataVehicle({...dataVehicle, wheelDrive:e.target.value})} id="wheelDrive"/>
				<Input title="VIN" value={dataVehicle.vin} onChange={(e)=>setDataVehicle({...dataVehicle, vin:e.target.value})} id="vin"/>
				<Input title="Tipo de suple" value={dataVehicle.supplementType} onChange={(e)=>setDataVehicle({...dataVehicle, supplementType: e.target.value})} id="supplementType"/>
				<Input title="Espesor de suple" value={dataVehicle.thickness} onChange={(e)=>setDataVehicle({...dataVehicle, thickness:e.target.value})} id="thickness"/>
		  </div>
          <div>
				<Input title="Tanque de gas" value={dataVehicle.tank} onChange={(e)=>setDataVehicle({...dataVehicle, tank:e.target.value})} id="tank"/>
				<Input title="Peso neto (kg)" value={dataVehicle.neto} onChange={(e)=>setDataVehicle({...dataVehicle, neto:e.target.value})} id="neto"/>
				<Input title="Peso bruto (kg)" value={dataVehicle.bruto} onChange={(e)=>setDataVehicle({...dataVehicle, bruto: e.target.value})} id="bruto"/>
				<Input title="Filas de asientos" value={dataVehicle.seatRows} onChange={(e)=>setDataVehicle({...dataVehicle, seatRows:e.target.value})} id="seatRows"/>
				<Input title="Kilometraje (km)" value={dataVehicle.mileage} onChange={(e)=>setDataVehicle({...dataVehicle, mileage:e.target.value})} id="mileage"/>
				<Input title="Llantas originales" value={dataVehicle.originTire} onChange={(e)=>setDataVehicle({...dataVehicle, originTire: e.target.value})} id="originTire"/>
				<Input title="Llantas instaladas" value={dataVehicle.installedTire} onChange={(e)=>setDataVehicle({...dataVehicle, installedTire:e.target.value})} id="installedTire"/>
		  </div>

		</Wrapper>
	)
}