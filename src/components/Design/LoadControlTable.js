import { useEffect, useState } from "react";
import "@fontsource/abeezee/400-italic.css";
import { useAuth } from '../../context/auth-context';
import { colors } from "../../styles/colors";
import { Table2, Td1, Th3, Input, Button1 } from "./style";


export default function LoadControlTable(props) {

    const {controlCargas, setControlCargas} = useAuth();

    const [puntosCC, setPuntosCC] = useState([
        { id: 1, Fuerza: "", Long: "" },
        { id: 2, Fuerza: "", Long: "" },
        { id: 3, Fuerza: "", Long: "" }
    ])
    
    const [defs, setDefs] = useState([
        { id: 1, Def: "" },
        { id: 2, Def: "" },
        { id: 3, Def: "" }
    ])

    const L0 = Number(props.L0)

    const addRow = () => {
        setPuntosCC([...puntosCC, { id: puntosCC.length + 1, Fuerza: "", Long: "" }])
        setDefs([...defs, { id: defs.length + 1, Def: "" }])
    };

    const deleteRow = () => {
        if (puntosCC.length>3){
            setPuntosCC(puntosCC.slice(0, -1))
            setDefs(defs.slice(0, -1))
        }
    };

    function handleInputControlCargas(e){

        const arreglo = e.target.id.split(',')
        
        let puntosCCAux = JSON.parse(JSON.stringify(puntosCC))
        puntosCCAux.map((punto) => {

            if (arreglo[1] === "Fuerza"){
                if (punto.id === Number(arreglo[0])) {
                    punto.Fuerza = Number(e.target.value)
                }
            }
            else if (arreglo[1] === "Long"){
                if (punto.id === Number(arreglo[0])) {
                    punto.Long = Number(e.target.value)
                }
            }

        })

        setPuntosCC(puntosCCAux)

    }

    useEffect(() => {
        
        let puntosCCGlob = []
        let defsAux = JSON.parse(JSON.stringify(defs))
        let puntoCC = {}
        defsAux.map((punto, indice) => {

            punto.Def = Number(L0 - puntosCC[indice].Long)

            //Actualizacion de datos de variable en App.js
            puntoCC = { id: (indice+1), Fuerza: puntosCC[indice].Fuerza, Long: puntosCC[indice].Long, Def: punto.Def }
            puntosCCGlob.push(puntoCC)

        })

        setDefs(defsAux)

        setControlCargas(puntosCCGlob)

    }, [puntosCC])

    return(

        <div>
            <Table2>
                <thead>
                    <tr style={{backgroundColor: colors.gray, color:colors.white,}}>
                    <Th3>N°</Th3>
                     <Th3>F (kg)</Th3>
                     <Th3>L (mm)</Th3>
                     <Th3>Deform (mm)</Th3>
                    </tr>
                </thead>
                <tbody>
                    {puntosCC.map((punto, indice) => (
                        <tr key={punto.id} style={{color:colors.grey}}>
                            <Td1>
                                {punto.id}
                            </Td1>
                            <Td1>
                                <Input value={punto.Carga} type="number" id={punto.id+",Fuerza"} onChange={(e) => handleInputControlCargas(e)}/>
                            </Td1>
                            <Td1>
                                <Input value={punto.Longitud} type="number" id={punto.id+",Long"} onChange={(e) => handleInputControlCargas(e)}/>
                            </Td1>
                            <Td1>
                                {
                                    (!isNaN(defs[indice].Def) && Number.isFinite(defs[indice].Def)) === true ? (defs[indice].Def).toFixed(1) : ""
                                }
                            </Td1>
                        </tr>
                    ))}
                </tbody>
               
            </Table2>
            <div style={{display: "flex"}}  >
                <Button1 onClick={deleteRow} disabled={puntosCC.length === 3}>Eliminar última fila</Button1>
                <Button1 onClick={addRow}>Agregar fila</Button1> 
            </div>
        </div>
    )
  }