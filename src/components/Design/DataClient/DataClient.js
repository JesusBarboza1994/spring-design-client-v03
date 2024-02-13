import { useEffect, useState } from "react"
import Input from "../../Input"
import { Wrapper } from "./styles"

export function DataClient({setCounter, counter}){
	const [dataClient, setDataClient] = useState(localStorage.getItem("DataClient") ? JSON.parse(localStorage.getItem("DataClient")) : {
		name:"",
		document: "",
		develop: "",
		phone: "",
		email: "",
		version:""
	})

	useEffect(()=>{
		let acc = 0
		for (let i in dataClient){
				if(dataClient[i] !== "") acc += 1
		}
		setCounter({...counter, DataClient: {quantity: Object.keys(dataClient).length, counter: acc}})
	}, [])

	const handleChange = (e) =>{
		setDataClient({...dataClient,	[e.target.id]: e.target.value })
		let acc = 0
		for (let i in dataClient){
			if(i === e.target.id){
				if (e.target.value !== "") acc += 1
			}else{
				if(dataClient[i] !== "") acc += 1
			}
		}
		setCounter({...counter, DataClient: {quantity: Object.keys(dataClient).length, counter: acc}})
		localStorage.setItem("DataClient", JSON.stringify({...dataClient, [e.target.id]: e.target.value }))
		localStorage.setItem("counter", JSON.stringify({...counter, DataClient: {quantity: Object.keys(dataClient).length, counter: acc}}))
	}
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