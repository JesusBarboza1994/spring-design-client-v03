import { CorrelativeData } from "../../components/Design/CorrelativeData/CorrelativeData";
import { DataTypeDesign } from "../../components/Design/DataTypeDesign/DataTypeDesign";
import { Container } from "../../components/Design/DataTypeDesign/styles";
import { ButtonGuardar, A } from "./styles";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { useState } from "react";
import { HeaderElement } from "../../components/SpringType/HeaderElement";
import { ScreenStyle, Wrapper } from "../../components/Home/styles";
import { CoilsDimensions } from "../../components/Seguimiento/Seguimiento/CoilsDimensions";
import { useAuth } from "../../context/auth-context";

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
    const [originalDimensions] = useAuth();

	return(
        <ScreenStyle>
            {/* <Wrapper> */}
                {/* <HeaderElement/>   */}
                <Container>

                    <CorrelativeData/>
                    <DataTypeDesign Data={<CoilsDimensions setCounter={setCounter} counter={counter} />} text={"DIMENSIONES DE RESORTES"} counter = {counter.CoilsDimensions}/> 

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
            {/* </Wrapper> */}
        </ScreenStyle>
	);
}