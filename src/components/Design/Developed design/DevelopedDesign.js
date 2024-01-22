import { useState } from "react"
import styled from "@emotion/styled";
import Input from "../../Input"
import { Switch } from "@mui/material";
import { Wrapper} from "./styles"
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
                <div>
                    <label>Plano NO<Switch onChange={handleToggleCheckbox} size="big" />SI</label>
                    {link.isChecked && (
                        <>
                        <Input value={link.drawing} onChange={(e) => setLink({...link, drawing:e.target.value})} id="drawing" />
                        </>
                        )}
                </div>
                <div>
                    <Input title="Precio unitario S/." />
                    <Input title="Cantidad"/>
                </div>
            </div>            

        </Wrapper>
    )
}