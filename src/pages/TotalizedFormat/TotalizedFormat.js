import { DataClient } from "../../components/Design/DataClient/DataClient";
import { DataTypeDesign } from "../../components/Design/DataTypeDesign/DataTypeDesign";
import { Container } from "../../components/Design/DataTypeDesign/styles";
import { VehicleData } from "../../components/Design/VehicleData/VehicleData";

export default function TotalizedFormat(){
	return(
		<Container>
			<DataTypeDesign Data={<DataClient/>} text={"DATOS DE CLIENTE"}/>
			<DataTypeDesign Data={<VehicleData/>} text={"DATOS DE VEHICULO"}/>

		</Container>
	);
}