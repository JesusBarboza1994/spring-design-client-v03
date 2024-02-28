import { useState, useEffect } from "react"
import styled from "@emotion/styled";
import Input from "../../Input"
import { Switch } from "@mui/material";
import { DivPlano, InputPlano, DivPrecio, Wrapper, InputPrecio, Container} from "./styles"
import TextArea from "../ClientRequirements/TextArea";

export function DevelopedDesign({setCounter, counter}){
    const [dataDesign, setDataDesign] = useState(localStorage.getItem("DevelopedDesign") ? JSON.parse(localStorage.getItem("DevelopedDesign")) : {
		relacion1:"",
        relacion2:"",
        resDesarrolado:"",
        controlCargas:"",
        precio:"",
        piezas:"",
    })
    useEffect(()=>{
		let acc = 0
		for (let i in dataDesign){
				if(dataDesign[i] !== "") acc += 1
		}
		setCounter({...counter, DevelopedDesign: {quantity: Object.keys(dataDesign).length, counter: acc}})
	}, [])
    const handleChange = (e) =>{
		setDataDesign({...dataDesign, [e.target.id]: e.target.value })
		let acc = 0
		for (let i in dataDesign){
			if(i === e.target.id){
				if (e.target.value !== "") acc += 1
			}else{
				if(dataDesign[i] !== "") acc += 1
			}
		}
		setCounter({...counter, DevelopedDesign: {quantity: Object.keys(dataDesign).length, counter: acc}})
		localStorage.setItem("DevelopedDesign", JSON.stringify({...dataDesign, [e.target.id]: e.target.value }))
		localStorage.setItem("counter", JSON.stringify({...counter, DevelopedDesign: {quantity: Object.keys(dataDesign).length, counter: acc}}))
	}
    
    const [link, setLink] = useState({
        drawing: "",
    })
    const handleToggleCheckbox = () => {
        setLink({
          ...link,
          isChecked: !link.isChecked,
        });
      }; 
    
    return(
		<Wrapper>
            <div>
                <div>
                 <Input title="Diseños relacionados" value={dataDesign.relacion1} onChange={(e)=> handleChange(e)} id="relacion1"/>
                 <Input value={dataDesign.relacion2} onChange={(e)=> handleChange(e)} id="relacion2"/>
                </div>
                <TextArea title="Medidas del resorte desarrollado" value={dataDesign.resDesarrolado} onChange={(e)=> handleChange(e)} id="resDesarrolado"/>
                <TextArea title="Control de cargas" value={dataDesign.controlCargas} onChange={(e)=> handleChange(e)} id="controlCargas"/>
                
            </div>
            <Container>
                <DivPlano>
                    <label>Plano  NO <Switch onChange={handleToggleCheckbox} size="big" /> SI</label>
                    {link.isChecked && (
                        
                        <InputPlano placeholder=" Ingrese un link" value={link.drawing} onChange={(e) => setLink({...link, drawing:e.target.value})} id="drawing" />
                        
                        )}
                </DivPlano>
                <DivPrecio>
                 <label> Precio unitario S/. <InputPrecio value={dataDesign.precio} onChange={(e)=> handleChange(e)} id="precio"/> +IGV
                 </label>
                    
                 <label> Cantidad <InputPrecio value={dataDesign.piezas} onChange={(e)=> handleChange(e)} id="piezas"/> piezas </label>   
                </DivPrecio>
            </Container>            

        </Wrapper>
    )
}