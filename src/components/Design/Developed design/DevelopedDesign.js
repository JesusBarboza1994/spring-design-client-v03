import { useState } from "react"
import styled from "@emotion/styled";
import Input from "../../Input"
import { Switch } from "@mui/material";
import { DivPlano, InputPlano, DivPrecio, Wrapper} from "./styles"
import TextArea from "../ClientRequirements/TextArea";

export function DevelopedDesign(){
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
                 <Input title="Diseños relacionados" />
                 <Input/>
                </div>
                <TextArea title="Medidas del resorte desarrollado" value="" onChange={(e)=>console.log(e)} id=""/>
                <TextArea title="Control de cargas" value="" onChange={(e)=>console.log(e)} id=""/>
                
            </div>
            <div>
                <DivPlano>
                    <label>Plano  NO <Switch onChange={handleToggleCheckbox} size="big" /> SI</label>
                    {link.isChecked && (
                        
                        <InputPlano value={link.drawing} onChange={(e) => setLink({...link, drawing:e.target.value})} id="drawing" />
                        
                        )}
                </DivPlano>
                <DivPrecio>
                    <Input title="Precio unitario S/." />
                    <Input title="Cantidad"/>
                </DivPrecio>
            </div>            

        </Wrapper>
    )
}