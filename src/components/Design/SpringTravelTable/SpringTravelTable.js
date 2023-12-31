import { useEffect, useState } from "react";
import "@fontsource/abeezee/400-italic.css";
import { useAuth } from '../../../context/auth-context';
import { colors } from "../../../styles/colors";
import { Td1, Th3 } from "./styles";


export default function SpringTravelTable() {

    const {dimensions, processTableStage1, setProcessTableStage1, processTableStage2, setProcessTableStage2, kControlCargas, bControlCargas, l4} = useAuth();
    
    const [carreras, setCarreras] = useState([
        { id: 1, Carrera: "" },
        { id: 2, Carrera: "" },
        { id: 3, Carrera: "" },
        { id: 4, Carrera: "" },
        { id: 5, Carrera: "" }
    ])

    const [fuerzas, setFuerzas] = useState([469.7,795.5,1001.0])

    carreras[0].Carrera = ((fuerzas[0]-bControlCargas)/kControlCargas)
    carreras[1].Carrera = ((fuerzas[1]-bControlCargas)/kControlCargas)
    carreras[2].Carrera = ((fuerzas[2]-bControlCargas)/kControlCargas)
    carreras[3].Carrera = dimensions.L0 - l4


    if (((dimensions.Ext1 === "TASE") && (dimensions.Ext2 === "TASE")) || ((dimensions.Ext1 === "TCSE") && (dimensions.Ext2 === "TASE")) || ((dimensions.Ext1 === "TASE") && (dimensions.Ext2 === "TCSE"))) {
        carreras[4].Carrera = dimensions.L0-((Number(dimensions.N) +1)*Number(dimensions.d))
    } else if (((dimensions.Ext1 === "TAE") && (dimensions.Ext2 === "TAE")) || ((dimensions.Ext1 === "TCE") && (dimensions.Ext2 === "TAE")) || ((dimensions.Ext1 === "TAE") && (dimensions.Ext2 === "TCE"))) {
        carreras[4].Carrera = dimensions.L0-((Number(dimensions.N) +1)*Number(dimensions.d) - Number(dimensions.d))  
    } else {
        carreras[4].Carrera = dimensions.L0-((Number(dimensions.N) +1)*Number(dimensions.d) - 0.5*Number(dimensions.d))  
    }

    return(
        <div style={{backgroundColor: colors.background}}>
            <table>
                <thead>
                    <tr style={{backgroundColor: colors.secondary.dark, color:colors.font.text}}>
                        <td colSpan="2" align="center">
                            <Th3>Carrera (mm)</Th3>
                        </td>
                    </tr>
                </thead>
                <tbody>
                    {carreras.map((punto, indice) => (
                        <tr key={punto.id} style={{color:colors.font.text}}>
                            <Td1>
                                {"S"+(punto.id)}
                            </Td1>
                            <Td1>
                                {punto.Carrera}
                            </Td1>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
  }