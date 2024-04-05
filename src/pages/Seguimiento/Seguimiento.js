import { CorrelativeData } from "../../components/Design/CorrelativeData/CorrelativeData";
import { DataTypeDesign } from "../../components/Design/DataTypeDesign/DataTypeDesign";
import { Container } from "../../components/Design/DataTypeDesign/styles";
import { ButtonGuardar, A } from "./styles";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { useState } from "react";
import { HeaderElement } from "../../components/SpringType/HeaderElement";
import { ScreenStyle } from "../../components/Home/styles";

export default function Seguimiento(){
	const [counter, setCounter] = useState( localStorage.getItem("counter") ? JSON.parse(localStorage.getItem("counter")) : {
		DataClient: {quantity: 0, counter: 0},
		VehicleData: {quantity: 0, counter: 0},
		SampleMeasurements: {quantity: 0, counter: 0},
		VehicleDimentions: {quantity: 0, counter: 0},
		ClientRequirements: {quantity: 0, counter: 0},
		TechnicalStandard: {quantity: 0, counter: 0},
		DevelopedDesign: {quantity: 0, counter: 0}
	})
	return(
        <ScreenStyle>
            {/* <HeaderElement/> */}
            <Container>

                <CorrelativeData/>
                {/* <DataTypeDesign Data={<DataClient setCounter={setCounter} counter={counter} />} text={"DIMENSIONES DE RESORTES"} counter = {counter.DataClient}/> */}

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
        </ScreenStyle>
	);
}