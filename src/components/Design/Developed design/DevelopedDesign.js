import { useState } from "react"
import styled from "@emotion/styled";
import Input from "../../Input"
import { Switch } from "@mui/material";
import { DivPlano, InputPlano, DivPrecio, Wrapper, Precio, Cantidad} from "./styles"
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
                <DivPrecio>
                 <Input title="Diseños relacionados" />
                 <Input/>
                </DivPrecio>
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
                    <label> Precio unitario S/.
                      <Precio title="Precio unitario S/." />  +IGV
                    </label>
                    <label> Cantidad
                       <Cantidad title="Cantidad"/> pzas
                    </label>
                    
                </DivPrecio>
            </div>            

        </Wrapper>
    )
}