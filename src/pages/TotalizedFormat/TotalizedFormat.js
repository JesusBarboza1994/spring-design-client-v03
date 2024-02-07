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

export default function TotalizedFormat(){
	return(
		<Container>
			<CorrelativeData/>
			<DataTypeDesign Data={<DataClient/>} text={"DATOS DEL CLIENTE"}/>
			<DataTypeDesign Data={<VehicleData/>} text={"DATOS DEL VEHICULO"}/>
			<DataTypeDesign Data={<SampleMeasurements/>} text={"DATOS DE LA MUESTRA"}/>
			<DataTypeDesign Data={<VehicleDimentions/>} text={"MEDIDAS DEL VEHICULO"}/>
			<DataTypeDesign Data={<Galery/>} text={"GALERIA"}/>
			<DataTypeDesign Data={<ClientRequirements/>} text={"REQUERIMIENTOS DEL CLIENTE"}/>
			<DataTypeDesign Data={<TechnicalStandard/>} text={"NORMAS TECNICAS"}/>
			<DataTypeDesign Data={<DevelopedDesign/>} text={"DISEÑO DESARROLLADO"}/>
			<div>
			<ButtonGuardar type="submit">Guardar datos</ButtonGuardar>
			</div>
            
			<div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", }}> 
				<div style={{ display: "flex", alignItems: "center", justifyItems: "center",}}>
				 <FaAngleLeft style={{ cursor: "pointer", color: "white",}} size={35}/>
				 <A>Volver</A>
				</div>
				
				<div>
				 <a>Siguiente</a>
				 <FaAngleRight style={{ cursor: "pointer", color: "white",}} size={35} />
				</div>
			
			</div>
		</Container>
	);
}