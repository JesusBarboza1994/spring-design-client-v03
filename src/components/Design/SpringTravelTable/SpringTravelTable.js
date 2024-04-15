import { useEffect, useState } from "react";
import "@fontsource/abeezee/400-italic.css";
import { useAuth } from '../../../context/auth-context';
import { colors } from "../../../styles/colors";
import { Td1, Th3 } from "./styles";


export default function SpringTravelTable() {

    const {originalDimensions, processTableStage1, setProcessTableStage1, processTableStage2, setProcessTableStage2, kControlCargas, bControlCargas, l4} = useAuth();
    
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
    carreras[3].Carrera = originalDimensions.L0 - l4


    if (((originalDimensions.Ext1 === "TASE") && (originalDimensions.Ext2 === "TASE")) || ((originalDimensions.Ext1 === "TCSE") && (originalDimensions.Ext2 === "TASE")) || ((originalDimensions.Ext1 === "TASE") && (originalDimensions.Ext2 === "TCSE"))) {
        carreras[4].Carrera = originalDimensions.L0-((Number(originalDimensions.N) +1)*Number(originalDimensions.d))
    } else if (((originalDimensions.Ext1 === "TAE") && (originalDimensions.Ext2 === "TAE")) || ((originalDimensions.Ext1 === "TCE") && (originalDimensions.Ext2 === "TAE")) || ((originalDimensions.Ext1 === "TAE") && (originalDimensions.Ext2 === "TCE"))) {
        carreras[4].Carrera = originalDimensions.L0-((Number(originalDimensions.N) +1)*Number(originalDimensions.d) - Number(originalDimensions.d))  
    } else {
        carreras[4].Carrera = originalDimensions.L0-((Number(originalDimensions.N) +1)*Number(originalDimensions.d) - 0.5*Number(originalDimensions.d))  
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