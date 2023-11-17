import { CorrelativeData } from "../../components/Design/CorrelativeData/CorrelativeData";
import { DataClient } from "../../components/Design/DataClient/DataClient";
import { DataTypeDesign } from "../../components/Design/DataTypeDesign/DataTypeDesign";
import { Container } from "../../components/Design/DataTypeDesign/styles";
import { SampleMeasurements } from "../../components/Design/SampleMeasurements/SampleMeasurements";
import { VehicleData } from "../../components/Design/VehicleData/VehicleData";
import { VehicleDimentions } from "../../components/Design/VehicleDimentions/VehicleDimentions";

export default function TotalizedFormat(){
	return(
		<Container>
			<CorrelativeData/>
			<DataTypeDesign Data={<DataClient/>} text={"DATOS DEL CLIENTE"}/>
			<DataTypeDesign Data={<VehicleData/>} text={"DATOS DEL VEHICULO"}/>
			<DataTypeDesign Data={<SampleMeasurements/>} text={"DATOS DE LA MUESTRA"}/>
			<DataTypeDesign Data={<VehicleDimentions/>} text={"MEDIDAS DEL VEHICULO"}/>

            
		</Container>
	);
}