import { useEffect, useState } from "react";
import "@fontsource/abeezee/400-italic.css";
import { useAuth } from '../../../context/auth-context';
import { Table4, Td_processtable, Input, Th3_processtable, Button4, Button2, Button3 } from "./styles";
import { colors } from "../../../styles/colors";

export default function ProcessTable(props) {

    const {originalDimensions, setOriginalDimensions, processTableStage1, setProcessTableStage1, processTableStage2, setProcessTableStage2, stateButtonCalculateProcessTable, setStateButtonCalculateProcessTable} = useAuth();

    const [processTableStage1Inv, setProcessTableStage1Inv] = useState([])
    const [processTableStage2Inv, setProcessTableStage2Inv] = useState([])

    const [pasoVisible, setPasoVisible] = useState(true)
    const [kEqVisible, setKEqVisible] = useState(true)
    const [xcVisible, setXcVisible] = useState(true)
    const [fcVisible, setFcVisible] = useState(true)
    const [kVisible, setKVisible] = useState(false)
    const [kInvVisible, setKInvVisible] = useState(true)
    const [bVisible, setBVisible] = useState(false)

    function calcularprocessTableStage1(){
        
        let long1 = (Number(originalDimensions.Luz2)+Number(originalDimensions.d))*0.875
        let long2 = (Number(originalDimensions.Luz1)+Number(originalDimensions.d))*0.875
        let luz1 = long1/0.875 - Number(originalDimensions.d)
        let luz2 = long2/0.875 - Number(originalDimensions.d)
        let vtas1 = 0.875
        let vtas2 = 0.875
        
        let longLineaMedia = Number(originalDimensions.L0)
        if (((originalDimensions.Ext1 === "TASE") && (originalDimensions.Ext2 === "TASE")) || ((originalDimensions.Ext1 === "TCSE") && (originalDimensions.Ext2 === "TASE")) || ((originalDimensions.Ext1 === "TASE") && (originalDimensions.Ext2 === "TCSE"))) {
            longLineaMedia = Number(originalDimensions.L0) - Number(originalDimensions.d)
        } else if (((originalDimensions.Ext1 === "TAE") && (originalDimensions.Ext2 === "TAE")) || ((originalDimensions.Ext1 === "TCE") && (originalDimensions.Ext2 === "TAE")) || ((originalDimensions.Ext1 === "TAE") && (originalDimensions.Ext2 === "TCE"))) {
            longLineaMedia = Number(originalDimensions.L0) 
        } else {
            longLineaMedia = Number(originalDimensions.L0) - Number(originalDimensions.d)/2
        }

        let vtas3 = Number(originalDimensions.N)-2*0.875
        let long3 = longLineaMedia-long1-long2-Number(originalDimensions.d)
        let luz3 = (long3/vtas3)-Number(originalDimensions.d)

        let luces = [luz1, luz2, luz3]
        let longitudes = [long1, long2, long3]
        let vueltas = [vtas1, vtas2, vtas3]
    
        setProcessTableStage1(processTableStage1.map((punto, indice) => {
          if (punto.id < 4) {
            return { ...punto, Luz: luces[indice], Long: longitudes[indice], Vtas: vueltas[indice] };
          }
          return punto;
        }));
    }
    
    //NUEVO---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    if (stateButtonCalculateProcessTable == true){
        calcularprocessTableStage1()
        setStateButtonCalculateProcessTable(false)
    }

    //NUEVO---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

    const addRow = () => {
        setProcessTableStage1([...processTableStage1, { id: processTableStage1.length + 1, Luz: "", Long: "", Vtas: "" }])
        setProcessTableStage2([...processTableStage2, { id: processTableStage2.length + 1, Paso: "", K: "", Kinv: "", Keq: "", Xc: "", b: "", Fc: "" }])
    };

    const deleteRow = () => {
        if (processTableStage1.length>3){
        setProcessTableStage1(processTableStage1.slice(0, -1))
        setProcessTableStage2(processTableStage2.slice(0, -1))

        }
    };

    const orderRow = () => {

        let array1 = JSON.parse(JSON.stringify(processTableStage1))
        let array2 = JSON.parse(JSON.stringify(processTableStage2))
        let n = processTableStage2.length;
        let aux1 = []
        let aux2 = []

        // Algoritmo de burbuja
        for (let k = 1; k < n; k++) {
            for (let i = 0; i < (n - k); i++) {
                if (array2[i].Paso > array2[i + 1].Paso) {
                    aux1 = array1[i];
                    array1[i] = array1[i + 1];
                    array1[i + 1] = aux1;

                    aux2 = array2[i];
                    array2[i] = array2[i + 1];
                    array2[i + 1] = aux2;
                }
            }
        }

        let processTableStage1ordenado = []
        let processTableStage2ordenado = []

        let punto1 = {}
        let punto2 = {}

        for (let j = 0; j < n; j++) {
            punto1 = { id: j + 1, Luz: array1[j].Luz, Long: array1[j].Long, Vtas: array1[j].Vtas }
            punto2 = { id: j + 1, Paso: array2[j].Paso, K: array2[j].K, Kinv: array2[j].Kinv, Keq: array2[j].Keq, Xc: array2[j].Xc, b: array2[j].b, Fc: array2[j].Fc }
            processTableStage1ordenado.push(punto1)
            processTableStage2ordenado.push(punto2)
        }

        setProcessTableStage1(processTableStage1ordenado)
        setProcessTableStage2(processTableStage2ordenado)
        calcularprocessTableStage2()

    };

    function calcularprocessTableStage2() {

        let d = Number(originalDimensions.d)
        let Dext = Number(originalDimensions.Dext)
        let Dm = Dext-d
        let N = 0
        
        let pasos = []
        let ks = []
        let kinvs = []
        let keqs = []
        let xcs = []
        let bs = []
        let fcs = []

        let puntosCalc = JSON.parse(JSON.stringify(processTableStage1))

        let paso = 0
        let k = 0
        let kinv = 0
        
        for (let i = 0; i < puntosCalc.length; i++) {
            paso = puntosCalc[i].Long/puntosCalc[i].Vtas
            pasos.push(paso)
            
            k = (78500*(Math.pow(d,4)))/(8*(Math.pow(Dm,3))*puntosCalc[i].Vtas)
            ks.push(k)
            
            kinv = Math.pow(k,-1)
            kinvs.push(kinv)

            N = N + Number(puntosCalc[i].Vtas)
        }

        let contDec1 = kinvs.length-1 
        let aux1 = 0
        let keqAux = []
        while (contDec1 >= 0) {
            aux1 = aux1 + kinvs[contDec1]
            keqAux.push(Math.pow(aux1,-1))
            contDec1 = contDec1 -1
        }

        let contDec2 = keqAux.length-1
        while (contDec2 >= 0) {
            keqs.push(keqAux[contDec2])
            contDec2 = contDec2 -1
        }

        let sumas = [0]
        let sumaproductos = [0] // La suma de los productos de las vueltas y los pasos es igual a sumar las longitudes de cada punto
        let aux2 = 0
        let aux3 = 0
        for (let i = 0; i < puntosCalc.length; i++) {
            aux2 = aux2 + Number(puntosCalc[i].Vtas)
            aux3 = aux3 + Number(puntosCalc[i].Long)
            sumas.push(aux2)
            sumaproductos.push(aux3)
        }

        let xc = 0
        let b = 0
        for (let i = 0; i < puntosCalc.length; i++) {

            if (i == 0){
                xc = Number(((pasos[i]-d)*N).toFixed(4))
                b = 0
            }
            else{
                xc = (pasos[i]-d)*(N-sumas[i])+sumaproductos[i]-sumas[i]*d 
                b = (keqs[i-1]-keqs[i])*xcs[i-1]+bs[i-1]
            }
            xcs.push(xc) 
            bs.push(b)
        }

        let fc = 0

        for (let i = 0; i < keqs.length; i++){
            fc = Number(((keqs[i]*xcs[i]+bs[i])/9.81).toFixed(3))
            fcs.push(fc)
        }

        let puntosFinales = []
        let punto = {}
        for (let i = 0; i < fcs.length; i++){
            punto = { id: i+1, Paso: pasos[i], K: ks[i], Kinv: kinvs[i], Keq: keqs[i], Xc: xcs[i], b: bs[i], Fc: fcs[i] }
            puntosFinales.push(punto)
        }

        setProcessTableStage2(puntosFinales)
    }


    function handleInputProcessTableStage1(e){

        const arreglo = e.target.id.split(',')
        let luz = ""
        let d = Number(originalDimensions.d)
        let sumaVtasParcial = 0;
        let sumaLongsParcial = 0;
        let processTableStage1Aux = JSON.parse(JSON.stringify(processTableStage1))
        processTableStage1Aux.map((punto) => {

            if (arreglo[1] === "Luz"){
                let long = (Number(e.target.value)+d)*processTableStage1[Number(arreglo[0])-1].Vtas
                if (punto.id === Number(arreglo[0])) {
                    punto.Luz = Number(e.target.value)
                    punto.Long = Number(long)
                }
            }
            else if (arreglo[1] === "Vtas"){
                luz = (Number(processTableStage1[Number(arreglo[0])-1].Long)/Number(e.target.value)) - d
                if (punto.id === Number(arreglo[0])) {
                    punto.Vtas = Number(e.target.value)
                    punto.Luz = Number(luz)
                }
            }
            else if (arreglo[1] === "Long"){
                luz = Number(e.target.value)/processTableStage1[Number(arreglo[0])-1].Vtas - d
                if (punto.id === Number(arreglo[0])) {
                    punto.Long = Number(e.target.value)
                    punto.Luz = Number(luz)
                }
            }

            if (punto.id < processTableStage1Aux.length) {
                sumaVtasParcial = sumaVtasParcial + Number(punto.Vtas)
                sumaLongsParcial = sumaLongsParcial + Number(punto.Long)
            }

        })

        let vtasTotal = originalDimensions.N
        let longTotal = originalDimensions.L0
        let vtaPuntoFinal = vtasTotal - sumaVtasParcial
        let longPuntoFinal = 0 

        if (((originalDimensions.Ext1 === "TASE") && (originalDimensions.Ext2 === "TASE")) || ((originalDimensions.Ext1 === "TCSE") && (originalDimensions.Ext2 === "TASE")) || ((originalDimensions.Ext1 === "TASE") && (originalDimensions.Ext2 === "TCSE"))) {
            longPuntoFinal = longTotal - sumaLongsParcial - d
        } else if (((originalDimensions.Ext1 === "TAE") && (originalDimensions.Ext2 === "TAE")) || ((originalDimensions.Ext1 === "TCE") && (originalDimensions.Ext2 === "TAE")) || ((originalDimensions.Ext1 === "TAE") && (originalDimensions.Ext2 === "TCE"))) {
            longPuntoFinal = longTotal - sumaLongsParcial 
        } else {
            longPuntoFinal = longTotal - sumaLongsParcial - d/2
        }
        
        let luzPuntoFinal = longPuntoFinal/vtaPuntoFinal - d

        processTableStage1Aux[processTableStage1Aux.length-1].Vtas = vtaPuntoFinal
        processTableStage1Aux[processTableStage1Aux.length-1].Long = longPuntoFinal
        processTableStage1Aux[processTableStage1Aux.length-1].Luz = luzPuntoFinal

        setProcessTableStage1(processTableStage1Aux)
    }
    // comentario
    function calcularUltimoPunto(){
        let d = originalDimensions.d
        let sumaVtasParcial = 0
        let sumaLongsParcial = 0
        let processTableStage1Aux = JSON.parse(JSON.stringify(processTableStage1))
        processTableStage1Aux.map((punto) => {

            if (punto.id < processTableStage1Aux.length) {
                sumaVtasParcial = sumaVtasParcial + Number(punto.Vtas)
                sumaLongsParcial = sumaLongsParcial + Number(punto.Long)
            }
        })

        let vtasTotal = originalDimensions.N
        let longTotal = originalDimensions.L0
        let vtaPuntoFinal = vtasTotal - sumaVtasParcial
        let longPuntoFinal = 0 

        if (((originalDimensions.Ext1 === "TASE") && (originalDimensions.Ext2 === "TASE")) || ((originalDimensions.Ext1 === "TCSE") && (originalDimensions.Ext2 === "TASE")) || ((originalDimensions.Ext1 === "TASE") && (originalDimensions.Ext2 === "TCSE"))) {
            longPuntoFinal = longTotal - sumaLongsParcial - d
        } else if (((originalDimensions.Ext1 === "TAE") && (originalDimensions.Ext2 === "TAE")) || ((originalDimensions.Ext1 === "TCE") && (originalDimensions.Ext2 === "TAE")) || ((originalDimensions.Ext1 === "TAE") && (originalDimensions.Ext2 === "TCE"))) {
            longPuntoFinal = longTotal - sumaLongsParcial 
        } else {
            longPuntoFinal = longTotal - sumaLongsParcial - d/2
        }
        
        let luzPuntoFinal = longPuntoFinal/vtaPuntoFinal - d

        processTableStage1Aux[processTableStage1Aux.length-1].Vtas = vtaPuntoFinal
        processTableStage1Aux[processTableStage1Aux.length-1].Long = longPuntoFinal
        processTableStage1Aux[processTableStage1Aux.length-1].Luz = luzPuntoFinal
        setProcessTableStage1(processTableStage1Aux)

    }

    useEffect(() => {

        calcularprocessTableStage2()

        let puntosAux = JSON.parse(JSON.stringify(processTableStage1))
        let puntosAux1 = JSON.parse(JSON.stringify(processTableStage1))
        let puntosInv = puntosAux.reverse()
        setProcessTableStage1Inv(puntosInv)
        
    }, [processTableStage1])

    useEffect(() => {
        calcularprocessTableStage1()
        calcularUltimoPunto()
        
    }, [originalDimensions])

    useEffect(() => {

        let puntosAux = JSON.parse(JSON.stringify(processTableStage2))
        let puntosAux2 = JSON.parse(JSON.stringify(processTableStage2))
        let puntosInv = puntosAux.reverse()
        setProcessTableStage2Inv(puntosInv)
        
    }, [processTableStage2])

    function visibleColumnPaso(){
        if (pasoVisible == true){
            setPasoVisible(false)
        }
        else{
            setPasoVisible(true)
        }

    }

    function visibleColumnKeq(){
        if (kEqVisible == true){
            setKEqVisible(false)
        }
        else{
            setKEqVisible(true)
        }

    }

    function visibleColumnXc(){
        if (xcVisible == true){
            setXcVisible(false)
        }
        else{
            setXcVisible(true)
        }

    }

    function visibleColumnFc(){
        if (fcVisible == true){
            setFcVisible(false)
        }
        else{
            setFcVisible(true)
        }

    }

    function visibleColumnK(){
        if (kVisible == true){
            setKVisible(false)
        }
        else{
            setKVisible(true)
        }

    }

    function visibleColumnKInv(){
        if (kInvVisible == true){
            setKInvVisible(false)
        }
        else{
            setKInvVisible(true)
        }

    }
    
    function visibleColumnB(){
        if (bVisible == true){
            setBVisible(false)
        }
        else{
            setBVisible(true)
        }

    }

    return(

        <div>
            {/* <Button onClick={CalculateOrReset3Points}>Calcular</Button> */}
            <Table4>
                <thead>
                    <tr style={{backgroundColor: colors.secondary.light, }}>
                        <Th3_processtable style={{borderTopLeftRadius: 8,}}>Punto</Th3_processtable>
                        <Th3_processtable>Luz (mm)</Th3_processtable>
                        <Th3_processtable>Long (mm)</Th3_processtable>
                        <Th3_processtable>N.Vtas</Th3_processtable>
                        <Th3_processtable>
                            {
                                pasoVisible ? <Button2 onClick={visibleColumnPaso}>Paso (mm)</Button2> : <Button3 onClick={visibleColumnPaso}>+</Button3>
                            }
                        </Th3_processtable>
                        <Th3_processtable>
                            {
                                kEqVisible ? <Button2 onClick={visibleColumnKeq}>Keq. (N/mm)</Button2> : <Button3 onClick={visibleColumnKeq}>+</Button3>
                            }
                        </Th3_processtable>
                        <Th3_processtable>  
                            {
                                xcVisible ? <Button2 onClick={visibleColumnXc}>Xc (mm)</Button2> : <Button3 onClick={visibleColumnXc}>+</Button3>
                            }
                        </Th3_processtable>
                        <Th3_processtable>
                            {
                                fcVisible ? <Button2 onClick={visibleColumnFc}>Fc (kg)</Button2> : <Button3 onClick={visibleColumnFc}>+</Button3>
                            }
                        </Th3_processtable>
                        <Th3_processtable>
                            {
                                kVisible ? <Button2 onClick={visibleColumnK}>K (N/mm)</Button2> : <Button3 onClick={visibleColumnK}>+</Button3>
                            }
                        </Th3_processtable>
                        <Th3_processtable style={{borderTopRightRadius: 8,}}>
                            {
                                bVisible ? <Button2 onClick={visibleColumnB}>b</Button2> : <Button3 onClick={visibleColumnB}>+</Button3>
                            }
                        </Th3_processtable>
                    </tr>
                </thead>
                <tbody>
                    {processTableStage1Inv.map((punto, indice) => (
                        <tr key={punto.id} style={{color: colors.secondary.medium}}>
                            <Td_processtable style={{width: 40,  borderBottomLeftRadius: indice === processTableStage1Inv.length - 1 ? 8 : 0 }}>
                                {punto.id}
                            </Td_processtable>
                            <Td_processtable style={{width: 65}}>
                                {
                                    punto.id > 2 ? ((!isNaN(punto.Luz) && Number.isFinite(punto.Luz) && (punto.Luz !== 0)) === true ? (punto.Luz).toFixed(2) : "") : <Input value={punto.Luz} type="number" id={punto.id+",Luz"} onChange={(e) => handleInputProcessTableStage1(e)} disabled={indice === (0)}/>
                                }
                            </Td_processtable>
                            <Td_processtable style={{width: 65}}>
                                {
                                    punto.id < 3 ? ((!isNaN(punto.Long) && Number.isFinite(punto.Long) && (punto.Long !== 0)) === true ? (punto.Long).toFixed(2) : "") : <Input value={punto.Long} type="number" id={punto.id+",Long"} onChange={(e) => handleInputProcessTableStage1(e)} disabled={indice === (0)}/>
                                }
                            </Td_processtable>
                            <Td_processtable style={{width: 65}}>
                                <Input value={punto.Vtas} type="number" id={punto.id+",Vtas"} onChange={(e) => handleInputProcessTableStage1(e)} disabled={indice === (0)}/>
                            </Td_processtable>
                            <Td_processtable style={{width: 50,}}>
                                {
                                    pasoVisible ? ((!isNaN(processTableStage2Inv[indice].Paso) && Number.isFinite(processTableStage2Inv[indice].Paso) && (processTableStage2Inv[indice].Paso !== 0)) === true ? (processTableStage2Inv[indice].Paso).toFixed(2) : "") : null
                                }
                            </Td_processtable>
                            <Td_processtable style={{width: 50}}>
                                {
                                    kEqVisible ? ((!isNaN(processTableStage2Inv[indice].Keq) && Number.isFinite(processTableStage2Inv[indice].Keq) && (processTableStage2Inv[indice].Keq !== 0)) === true ? (processTableStage2Inv[indice].Keq).toFixed(2) : "") : null
                                }
                            </Td_processtable>
                            <Td_processtable style={{width: 50}}>
                                {
                                    xcVisible ? ((!isNaN(processTableStage2Inv[indice].Xc) && Number.isFinite(processTableStage2Inv[indice].Xc) ) === true ? (processTableStage2Inv[indice].Xc).toFixed(2) : "") : null
                                }
                            </Td_processtable>
                            <Td_processtable>
                                {
                                    fcVisible ? ((!isNaN(processTableStage2Inv[indice].Fc) && Number.isFinite(processTableStage2Inv[indice].Fc) ) === true ? (processTableStage2Inv[indice].Fc).toFixed(2) : "") : null
                                }
                            </Td_processtable>
                            <Td_processtable>
                                {
                                    kVisible ? ((!isNaN(processTableStage2Inv[indice].K) && Number.isFinite(processTableStage2Inv[indice].K) && (processTableStage2Inv[indice].K !== 0)) === true ? (processTableStage2Inv[indice].K).toFixed(2) : "") : null
                                }
                            </Td_processtable>
                            <Td_processtable style={{borderBottomRightRadius: indice === processTableStage1Inv.length - 1 ? 8 : 0 }}>
                                {
                                    bVisible ? ((!isNaN(processTableStage2Inv[indice].b) && Number.isFinite(processTableStage2Inv[indice].b)) === true ? (processTableStage2Inv[indice].b.toFixed(2)) : "") : null
                                }
                            </Td_processtable>
                        </tr>
                    ))}
                </tbody>
                                         
                      
            </Table4>
            <div style={{width: 500, display: "flex", justifyContent: "center",}}  >
              <Button4 onClick={deleteRow} disabled={processTableStage1.length === 3}>Eliminar última fila</Button4>
              <Button4 onClick={addRow}>Agregar fila</Button4> 
              <Button4 onClick={orderRow}>Ordenar filas</Button4>  
            </div>
        </div>
    )
  }