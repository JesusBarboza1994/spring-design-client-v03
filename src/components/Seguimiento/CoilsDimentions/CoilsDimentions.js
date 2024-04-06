import { useEffect, useState } from "react"
import { Wrapper } from "./styles"

export function CoilsDimentions({setCounter, counter}){
	const [dataCoilsDimentions, setDataCoilsDimentions] = useState(localStorage.getItem("CoilsDimentions") ? JSON.parse(localStorage.getItem("CoilsDimentions")) : {
		name:"",
		document: "",
		develop: "",
		phone: "",
		email: "",
		version:""
	})

	useEffect(()=>{
		let acc = 0
		for (let i in dataCoilsDimentions){
				if(dataCoilsDimentions[i] !== "") acc += 1
		}
		setCounter({...counter, CoilsDimentions: {quantity: Object.keys(dataCoilsDimentions).length, counter: acc}})
	}, [])

	const handleChange = (e) =>{
		setDataCoilsDimentions({...dataCoilsDimentions,	[e.target.id]: e.target.value })
		let acc = 0
		for (let i in dataCoilsDimentions){
			if(i === e.target.id){
				if (e.target.value !== "") acc += 1
			}else{
				if(dataCoilsDimentions[i] !== "") acc += 1
			}
		}
		setCounter({...counter, CoilsDimentions: {quantity: Object.keys(dataCoilsDimentions).length, counter: acc}})
		localStorage.setItem("CoilsDimentions", JSON.stringify({...dataCoilsDimentions, [e.target.id]: e.target.value }))
		localStorage.setItem("counter", JSON.stringify({...counter, CoilsDimentions: {quantity: Object.keys(dataCoilsDimentions).length, counter: acc}}))
	}
	return(
		<Wrapper>
			<div>
				<input title="Nombre" value={dataCoilsDimentions.name} onChange={(e)=> handleChange(e)} id="name"/>
				
			</div>
			<div>
				<input title="Teléfono" value={dataCoilsDimentions.phone} onChange={(e)=> handleChange(e)} id="phone"/>
				
			</div>
		</Wrapper>
	)
}