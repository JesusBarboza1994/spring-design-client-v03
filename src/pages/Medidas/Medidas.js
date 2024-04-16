import { CorrelativeData } from "../../components/Design/CorrelativeData/CorrelativeData";
import { DataClient } from "../../components/Design/DataClient/DataClient";
import { DataTypeDesign } from "../../components/Design/DataTypeDesign/DataTypeDesign";
import { Container } from "../../components/Design/DataTypeDesign/styles";
import { SampleMeasurements } from "../../components/Design/SampleMeasurements/SampleMeasurements";
import { VehicleData } from "../../components/Design/VehicleData/VehicleData";
import { VehicleDimentions } from "../../components/Design/VehicleDimentions/VehicleDimentions";
import  Galery  from "../../components/Design/Galery/Galery";
import { ClientRequirements } from "../../components/Design/ClientRequirements/ClientRequirements";
import { TechnicalStandard } from "../../components/Design/TechnicalStandard/TechnicalStandard";
import { DevelopedDesign } from "../../components/Design/Developed design/DevelopedDesign";
import { ButtonGuardar, A } from "./styles";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { useState } from "react";
import { DesignHeadElement } from "../../components/Design/DesignHeadElement/DesignHeadElement";

export default function Medidas(){
	const [counter, setCounter] = useState( localStorage.getItem("counter") ? JSON.parse(localStorage.getItem("counter")) : {
		DataClient: {quantity: 0, counter: 0},
		VehicleData: {quantity: 0, counter: 0},
		SampleMeasurements: {quantity: 0, counter: 0},
		VehicleDimentions: {quantity: 0, counter: 0},
		Galery: {quantity: 1, counter: 0},
		ClientRequirements: {quantity: 0, counter: 0},
		TechnicalStandard: {quantity: 0, counter: 0},
		DevelopedDesign: {quantity: 0, counter: 0}
	})
	return(
		<Container>

            <DesignHeadElement/>
			<CorrelativeData/>
			<DataTypeDesign Data={<DataClient setCounter={setCounter} counter={counter} />} text={"DATOS DEL CLIENTE"} counter = {counter.DataClient}/>
			<DataTypeDesign Data={<VehicleData setCounter={setCounter} counter={counter} />} text={"DATOS DEL VEHICULO"} counter = {counter.VehicleData}/>
			<DataTypeDesign Data={<SampleMeasurements setCounter={setCounter} counter={counter}/>} text={"DATOS DE LA MUESTRA"} counter = {counter.SampleMeasurements}/>
			<DataTypeDesign Data={<VehicleDimentions setCounter={setCounter} counter={counter}/>} text={"MEDIDAS DEL VEHICULO"} counter = {counter.VehicleDimentions}/>
			<DataTypeDesign Data={<Galery setCounter={setCounter} counter={counter}/>} text={"GALERIA"} counter = {counter.Galery}/>
			<DataTypeDesign Data={<ClientRequirements setCounter={setCounter} counter={counter}/>} text={"REQUERIMIENTOS DEL CLIENTE"} counter = {counter.ClientRequirements}/>
			<DataTypeDesign Data={<TechnicalStandard/>} text={"NORMAS TECNICAS"}/>
			<DataTypeDesign Data={<DevelopedDesign setCounter={setCounter} counter={counter}/>} text={"DISEÑO DESARROLLADO"} counter = {counter.DevelopedDesign}/>
			<div>
			{/* <ButtonGuardar type="submit">Guardar datos</ButtonGuardar> */}
			</div>
            
			<div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", }}> 
				<div style={{ display: "flex", alignItems: "center", justifyContent: "center",}}>
				 <FaAngleLeft style={{ cursor: "pointer", color: "white",}} size={35}/>
				 <A>VOLVER</A>
				</div>
				
				<div style={{ display: "flex", alignItems: "center", justifyContent: "center",}}>
				 <A>SIGUIENTE</A>
				 <FaAngleRight style={{ cursor: "pointer", color: "white",}} size={35} />
				</div>
			
			</div>
		</Container>
	);
}