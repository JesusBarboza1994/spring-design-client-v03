import { useEffect, useState } from "react"
import Input from "../../Input"
import { Wrapper } from "./styles"


export function InicialData({setCounter, counter}){
    const [inicialData, setInicialData] = useState(localStorage.getItem("InicialData") ? JSON.parse(localStorage.getItem("InicialData")) :{
        name:"",
        document:"",
    })

    return(
		<Wrapper>
			<div>
				<Input title="Nombre" value={dataClient.name} onChange={(e)=> handleChange(e)} id="name"/>
				<Input title="DNI / RUC" value={dataClient.document} onChange={(e)=> handleChange(e)} id="document"/>
				<Input title="Desarrollo" value={dataClient.develop} onChange={(e)=> handleChange(e)} id="develop"/>
			</div>
			<div>
				<Input title="Teléfono" value={dataClient.phone} onChange={(e)=> handleChange(e)} id="phone"/>
				<Input title="Correo" value={dataClient.email} onChange={(e)=> handleChange(e)} id="email"/>
				<Input title="Version" value={dataClient.version} onChange={(e)=> handleChange(e)} id="version"/>
			</div>
		</Wrapper>
	)
}