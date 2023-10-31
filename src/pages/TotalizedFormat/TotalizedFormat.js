import { DataClient } from "../../components/Design/DataClient/DataClient";
import { DataTypeDesign } from "../../components/Design/DataTypeDesign/DataTypeDesign";
import { Container } from "../../components/Design/DataTypeDesign/styles";

export function TotalizedFormat(){
	return(
		<Container>
			<DataTypeDesign Data={<DataClient/>} text={"DATOS DE CLIENTE"}/>
		</Container>
	)
}