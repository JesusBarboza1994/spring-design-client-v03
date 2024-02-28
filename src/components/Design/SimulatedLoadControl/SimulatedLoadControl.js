import { useEffect, useState } from "react";
import "@fontsource/abeezee/400-italic.css";
import { useAuth } from '../../../context/auth-context';
import { colors } from "../../../styles/colors";
import {Table2, Td, Th3 } from "./styles";


export default function SimulatedLoadControl(props) {

    const {controlCargasSimuladas, setControlCargasSimuladas} = useAuth();

    const [puntosCS, setPuntosCS] = useState([
        { id: 1, Fuerza: "", Long: "" },
        { id: 2, Fuerza: "", Long: "" },
        { id: 3, Fuerza: "", Long: "" },
        { id: 4, Fuerza: "", Long: "" },
        { id: 5, Fuerza: "", Long: "" },
        { id: 6, Fuerza: "", Long: "" }
    ])
    
    const [deforms, setDeforms] = useState([
        { id: 1, Def: "" },
        { id: 2, Def: "" },
        { id: 3, Def: "" },
        { id: 4, Def: "" },
        { id: 5, Def: "" },
        { id: 6, Def: "" }
    ])
 
    return(

        <div>
            <p style={{color: colors.font.text, fontWeight: "bold"}}>Cargas simuladas</p>
            <Table2>
                <thead>
                    <tr>
                    
                     <Th3 style={{width: 41, borderTopLeftRadius: 8, borderTop: "none", borderLeft: "none", }}>N°</Th3>
                     <Th3 style={{width: 63, borderTop: "none"}}>F (kg)</Th3>
                     <Th3 style={{width: 63, borderTop: "none"}}>L (mm)</Th3>
                     <Th3 style={{borderTopRightRadius: 8, borderTop: "none", }}>Deform (mm)</Th3>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <Td style={{borderLeft: "none", }}>
                            1
                        </Td>
                        <Td>
                            100
                        </Td>
                        <Td>
                            000.0
                        </Td>
                        <Td>
                            000.0
                        </Td>
                    </tr>
                    <tr>
                        <Td style={{borderLeft: "none", }}>
                            2
                        </Td>
                        <Td>
                            200
                        </Td>
                        <Td>
                            0.0
                        </Td>
                        <Td>
                            0.0
                        </Td>
                    </tr>
                    <tr>
                        <Td style={{borderLeft: "none", }}>
                            3
                        </Td>
                        <Td>
                            300
                        </Td>
                        <Td>
                            0.0
                        </Td>
                        <Td>
                            0.0
                        </Td>
                    </tr>
                    <tr>
                        <Td style={{borderLeft: "none", }}>
                            4
                        </Td>
                        <Td>
                            400
                        </Td>
                        <Td>
                            0.0
                        </Td>
                        <Td>
                            0.0
                        </Td>
                    </tr>
                    <tr>
                        <Td style={{borderLeft: "none", }}>
                            5
                        </Td>
                        <Td>
                            500
                        </Td>
                        <Td>
                            0.0
                        </Td>
                        <Td>
                            0.0
                        </Td>
                    </tr>
                    <tr>
                        <Td style={{borderLeft: "none", borderBottomLeftRadius: 8,}}>
                            6
                        </Td>
                        <Td>
                            600
                        </Td>
                        <Td>
                            0.0
                        </Td>
                        <Td style={{borderBottomRightRadius: 8, }}>
                            0.0
                        </Td>
                    </tr>
                </tbody>
               
            </Table2>
            
        </div>
    )
}