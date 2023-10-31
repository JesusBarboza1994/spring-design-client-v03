import { useState } from "react"
import Input from "../../Input"
import { Wrapper } from "./styles"

export function SampleMeasurements(){
	const [dataSample, setDataSample] = useState({
		suspensionType:"",
    ware: "", //
		outDiam1: "",
		outDiam2: "",
		coilsNumber: "",
		endType1:"",
    endDetail1: "",
    endDetail2: "",
    endDetail3: "",
    gap1: "",
    reducedCoil1: "",
    



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
				<Input title="Tipo de suspensión" value={dataSample.suspensionType} onChange={(e)=>setDataSample({...dataSample, suspensionType:e.target.value})} id="suspensionType"/>
				<Input title="Alambre" value={dataSample.ware} onChange={(e)=>setDataSample({...dataSample, ware:e.target.value})} id="ware"/>
				<Input title="Diam.exterior 1" value={dataSample.outDiam1} onChange={(e)=>setDataSample({...dataSample, outDiam1:e.target.value})} id="outDiam1"/>
				<Input title="Diam.exterior 2" value={dataSample.outDiam2} onChange={(e)=>setDataSample({...dataSample, outDiam2:e.target.value})} id="outDiam2"/>
				<Input title="Nro de vueltas" value={dataSample.coilsNumber} onChange={(e)=>setDataSample({...dataSample, coilsNumber:e.target.value})} id="coilsNumber"/>
				<div>
          <label>Extremo 1</label>
          <Select value={dataSample.endType1} onChange={(e)=>setDataSample({...dataSample, endType1:e.target.value})} id="endType1">
            <option value="TASE">TASE</option>
            <option value="TCSE">TCSE</option>
            <option value="TCE">TCE</option>
            <option value="TAE">TAE</option>
         </Select>
         <Select value={dataSample.endDetail1} onChange={(e)=>setDataSample({...dataSample, endDetail1:e.target.value})} id="endDetail1">
            <option value="no">--</option>
            <option value="sobrepuesta">sobrepuesta</option>
            <option value="libre">libre</option>
         </Select>
         <Select value={dataSample.endDetail2} onChange={(e)=>setDataSample({...dataSample, endDetail2:e.target.value})} id="endDetail2">
            <option value="no">--</option>
            <option value="a nivel">a nivel</option>
            <option value="inclinada">inclinada</option>
         </Select>
         <Select value={dataSample.endDetail3} onChange={(e)=>setDataSample({...dataSample, endDetail3:e.target.value})} id="endDetail3">
            <option value="no">--</option>
            <option value="descentrado">descentrado</option>
         </Select>
       </div>
       <Input title="" value={dataSample.extraload} onChange={(e)=>setDataSample({...dataSample,extraload:e.target.value})} id="extraload"/>
       <Input title="" value={dataSample.extraload} onChange={(e)=>setDataSample({...dataSample,extraload:e.target.value})} id="extraload"/>
       <Input title="" value={dataSample.extraload} onChange={(e)=>setDataSample({...dataSample,extraload:e.target.value})} id="extraload"/>     
       <Input title="" value={dataSample.extraload} onChange={(e)=>setDataSample({...dataSample,extraload:e.target.value})} id="extraload"/>
        
			</div>



			<div>
				<Input title="Posición" value={dataSample.position} onChange={(e)=>setDataSample({...dataSample, position:e.target.value})} id="position"/>
				<Input title="Combustible" value={dataSample.fuel} onChange={(e)=>setDataSample({...dataSample, fuel:e.target.value})} id="fuel"/>
				<Input title="Cilindrada" value={dataSample.cylinder} onChange={(e)=>setDataSample({...dataSample, cylinder: e.target.value})} id="cylinder"/>
				<Input title="Tracción" value={dataSample.wheelDrive} onChange={(e)=>setDataSample({...dataSample, wheelDrive:e.target.value})} id="wheelDrive"/>
				<Input title="VIN" value={dataSample.vin} onChange={(e)=>setDataSample({...dataSample, vin:e.target.value})} id="vin"/>
				<Input title="Tipo de suple" value={dataSample.supplementType} onChange={(e)=>setDataSample({...dataSample, supplementType: e.target.value})} id="supplementType"/>
				<Input title="Espesor de suple" value={dataSample.thickness} onChange={(e)=>setDataSample({...dataSample, thickness:e.target.value})} id="thickness"/>
		  </div>
      <div>
				<Input title="Tanque de gas" value={dataSample.tank} onChange={(e)=>setDataSample({...dataSample, tank:e.target.value})} id="tank"/>
				<Input title="Peso neto (kg)" value={dataSample.neto} onChange={(e)=>setDataSample({...dataSample, neto:e.target.value})} id="neto"/>
				<Input title="Peso bruto (kg)" value={dataSample.bruto} onChange={(e)=>setDataSample({...dataSample, bruto: e.target.value})} id="bruto"/>
				<Input title="Filas de asientos" value={dataSample.seatRows} onChange={(e)=>setDataSample({...dataSample, seatRows:e.target.value})} id="seatRows"/>
				<Input title="Kilometraje (km)" value={dataSample.mileage} onChange={(e)=>setDataSample({...dataSample, mileage:e.target.value})} id="mileage"/>
				<Input title="Llantas originales" value={dataSample.originTire} onChange={(e)=>setDataSample({...dataSample, originTire: e.target.value})} id="originTire"/>
				<Input title="Llantas instaladas" value={dataSample.installedTire} onChange={(e)=>setDataSample({...dataSample, installedTire:e.target.value})} id="installedTire"/>
		  </div>

		</Wrapper>
	)
}