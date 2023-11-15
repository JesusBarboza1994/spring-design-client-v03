import { useState } from "react"
import Input from "../../Input"
import { Text, Wrapper } from "./styles"

export function CorrelativeData(){
	const [dataCorrel, setDataCorrel] = useState({
		date:"",
		correl: "",
    })

	return(
		<Wrapper>
			<div><Input title="Fecha" value={dataCorrel.date}  id="date"/></div>
			<div><Input title="Correlativo de diseño" value={dataCorrel.correl} id="correl"/></div>
			<div1>
                <Text>Tipo de resorte:</Text>
                <Text>SUSPENSION</Text>
            </div1>
			
        </Wrapper>
        )
    }