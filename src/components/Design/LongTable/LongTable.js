import { useEffect, useState } from "react";
import "@fontsource/abeezee/400-italic.css";
import { useAuth } from '../../../context/auth-context';
import { Td_longtable, Th, Input1, Length_table } from "./styles";
import { colors } from "../../../styles/colors";


export default function LongTable() {

    const {dimensions, processTableStage1, processTableStage2, kControlCargas, bControlCargas, l4, filas, calculated_data} = useAuth();
    
    const nombreFilas = ["L instalada","L carga","L máxima","L4","L bloqueo"]

    //Linst, Lcarga, Lmax, L4, Lbloqueo
    const [inputLongTable, setInputLongTable] = useState([0,0,0,0,0]);

    const [carreraTotal, setCarreraTotal] = useState([0,0,0,0,0])
    const [fuerza, setFuerza] = useState([0,0,0,0,0])
    const [esfuerzo, setEsfuerzo] = useState([0,0,0,0,0])
    const [carreraParcial, setCarreraParcial] = useState([0,0,0,0,0])

    const [fuerzas, setFuerzas] = useState([469.7,795.5,1001.0])

    let Lmedio = 0
    if (((dimensions.Ext1 === "TASE") && (dimensions.Ext2 === "TASE")) || ((dimensions.Ext1 === "TCSE") && (dimensions.Ext2 === "TASE")) || ((dimensions.Ext1 === "TASE") && (dimensions.Ext2 === "TCSE"))) {
        Lmedio = Number(dimensions.L0)-Number(dimensions.d)
        inputLongTable[4]=(Number(dimensions.N)+1)*Number(dimensions.d) //Lbloqueo
    } else if (((dimensions.Ext1 === "TAE") && (dimensions.Ext2 === "TAE")) || ((dimensions.Ext1 === "TCE") && (dimensions.Ext2 === "TAE")) || ((dimensions.Ext1 === "TAE") && (dimensions.Ext2 === "TCE"))) {
        Lmedio = Number(dimensions.L0)
        inputLongTable[4]=(Number(dimensions.N)+1)*Number(dimensions.d)-Number(dimensions.d) //Lbloqueo
    } else {
        Lmedio = Number(dimensions.L0)-Number(dimensions.d)/2 
        inputLongTable[4]=(Number(dimensions.N)+1)*Number(dimensions.d)-0.5*Number(dimensions.d) //Lbloqueo
    }

    function handleTab(e){
        let inputLongTableNuevo = [...inputLongTable]
        console.log("inputLongTableNuevo")
        console.log(inputLongTableNuevo)
        if (e.target.id == 0){
            inputLongTableNuevo[0] = e.target.value
            setInputLongTable(inputLongTableNuevo);
        }
        else if (e.target.id == 1){
            inputLongTableNuevo[1] = e.target.value
            setInputLongTable(inputLongTableNuevo);
        }
        else if (e.target.id == 2){
            inputLongTableNuevo[2] = e.target.value
            setInputLongTable(inputLongTableNuevo);
        }
        else if (e.target.id == 3){
            inputLongTableNuevo[3] = e.target.value
            setInputLongTable(inputLongTableNuevo);
        }
    }  
    
    useEffect(() => {
        let s1=dimensions.L0-inputLongTable[0];
        let s2=dimensions.L0-inputLongTable[1];
        let s3=dimensions.L0-inputLongTable[2];
        let s4=dimensions.L0-inputLongTable[3];
        let sc=dimensions.L0-inputLongTable[4];
    
        let F1=0; let F2=0; let F3=0; let F4=0; let FC=0;
        let Tau1=0; let Tau2=0; let Tau3=0; let Tau4=0; let TauC=0;
        let Compr1=0; let Compr2=0; let Compr3=0; let Compr4=0; let ComprC=0;

        let contDec1 = processTableStage2.length-1 
        
        while (contDec1 >= 0) {
            if (s1<processTableStage2[contDec1].Xc){
                F1=(processTableStage2[contDec1].Keq*s1+processTableStage2[contDec1].b)/9.81
            }
            if (s2<processTableStage2[contDec1].Xc){
                F2=(processTableStage2[contDec1].Keq*s2+processTableStage2[contDec1].b)/9.81
            }
            if (s3<processTableStage2[contDec1].Xc){
                F3=(processTableStage2[contDec1].Keq*s3+processTableStage2[contDec1].b)/9.81
            }
            if (s4<processTableStage2[contDec1].Xc){
                F4=(processTableStage2[contDec1].Keq*s4+processTableStage2[contDec1].b)/9.81
            }

            contDec1 = contDec1 -1
        }

        FC = (processTableStage2[processTableStage2.length-1].Keq*sc+processTableStage2[processTableStage2.length-1].b)/9.81
    
        Tau1=(8*calculated_data.Dmedio*F1*9.81)/(3.14*Math.pow(dimensions.d,3))*((4*calculated_data.C-1)/(4*calculated_data.C-4)+0.615/calculated_data.C)
        Tau2=(8*calculated_data.Dmedio*F2*9.81)/(3.14*Math.pow(dimensions.d,3))*((4*calculated_data.C-1)/(4*calculated_data.C-4)+0.615/calculated_data.C)
        Tau3=(8*calculated_data.Dmedio*F3*9.81)/(3.14*Math.pow(dimensions.d,3))*((4*calculated_data.C-1)/(4*calculated_data.C-4)+0.615/calculated_data.C)
        Tau4=(8*calculated_data.Dmedio*F4*9.81)/(3.14*Math.pow(dimensions.d,3))*((4*calculated_data.C-1)/(4*calculated_data.C-4)+0.615/calculated_data.C)
        TauC=(8*calculated_data.Dmedio*FC*9.81)/(3.14*Math.pow(dimensions.d,3))*((4*calculated_data.C-1)/(4*calculated_data.C-4)+0.615/calculated_data.C)
    
        Compr1=Number((s1/(dimensions.L0-inputLongTable[4])).toFixed(2))*100;
        Compr2=Number((s2/(dimensions.L0-inputLongTable[4])).toFixed(2))*100;
        Compr3=Number((s3/(dimensions.L0-inputLongTable[4])).toFixed(2))*100;
        Compr4=Number((s4/(dimensions.L0-inputLongTable[4])).toFixed(2))*100;
        ComprC=Number((sc/(dimensions.L0-inputLongTable[4])).toFixed(2))*100;
        
        let carreraTotalNuevo = [s1,s2,s3,s4,sc]
        setCarreraTotal(carreraTotalNuevo)
        let fuerzaNuevo = [F1, F2, F3, F4, FC]
        setFuerza(fuerzaNuevo)
        let esfuerzoNuevo = [Tau1, Tau2, Tau3, Tau4, TauC]
        setEsfuerzo(esfuerzoNuevo)
        let carreraParcialNuevo = [Compr1,Compr2,Compr3,Compr4,ComprC]
        setCarreraParcial(carreraParcialNuevo)
        
    }, [inputLongTable[0], inputLongTable[1], inputLongTable[2], inputLongTable[3]])

    return(
        <div>
            
            <Length_table>
                <thead>
                    <tr>
                        <Th style={{borderTopLeftRadius: 8, borderLeft: "none", }}> </Th>
                        <Th style={{width: 90}}>Long (mm)</Th>
                        <Th style={{width: 90}}>Deform (mm)</Th>
                        <Th style={{width: 80}}>LL-G (mm)</Th>
                        <Th style={{width: 90}}>Fuerza (kg)</Th>
                        <Th style={{width: 90}}>Esf (MPa)</Th>
                        <Th style={{width: 80, borderTopRightRadius: 8, borderRight: "none"}}>Compr. (%)</Th>
                    </tr>
                </thead>
                <tbody>
                    {nombreFilas.map((fila, indice) => (
                        <tr style={{color: colors.font.title}}>
                            <Td_longtable>
                                {fila}
                            </Td_longtable>
                            <Td_longtable>
                            {
                                indice > 3 ? ((!isNaN(inputLongTable[indice]) && Number.isFinite(inputLongTable[indice]) && (inputLongTable[indice] !== 0)) === true ? (inputLongTable[indice]).toFixed(2) : "") : <Input1 type="number" value={inputLongTable[indice]} id={indice} onChange={(e) => handleTab(e)}/>
                            }
                            </Td_longtable>
                            <Td_longtable>
                                {
                                    (!isNaN(carreraTotal[indice]) && Number.isFinite(carreraTotal[indice])) === true ? (carreraTotal[indice]).toFixed(2) : ""
                                }
                            </Td_longtable>
                            <Td_longtable>
                                --
                            </Td_longtable>
                            <Td_longtable>
                                {
                                    (!isNaN(fuerza[indice]) && Number.isFinite(fuerza[indice])) === true ? (fuerza[indice]).toFixed(2) : ""
                                }
                            </Td_longtable>
                            <Td_longtable>
                                { 
                                    (!isNaN(esfuerzo[indice]) && Number.isFinite(esfuerzo[indice])) === true ? (esfuerzo[indice]).toFixed(2) : ""
                                }
                            </Td_longtable>
                            <Td_longtable>
                                {
                                    (!isNaN(carreraParcial[indice]) && Number.isFinite(carreraParcial[indice])) === true ? (carreraParcial[indice]).toFixed(0) : ""
                                }%
                            </Td_longtable>
                        </tr>
                    ))}
                </tbody>
            </Length_table>

        </div>
    )
}