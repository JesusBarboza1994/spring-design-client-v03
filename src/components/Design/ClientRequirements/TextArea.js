import { useState, useEffect } from "react"
import { Input, Label } from "./styles";

export default function TextArea({title, value, onChange, id, setCounter, counter}){
	const [dataText, setDataText] = useState(localStorage.getItem("TextArea") ? JSON.parse(localStorage.getItem("TextArea")) : {
		text: "",
	})

	useEffect(() => {
		if (dataText.text > 0) {
		  setCounter({ ...counter, TextArea: { quantity: 1, counter: 1 } });
		}else{
		  setCounter({ ...counter, TextArea: { quantity: 1, counter: 0 } });
		}
	  }, dataText);

	const handleChange = (e) =>{
		setDataText({...dataText,	[e.target.id]: e.target.value })
		let acc = 0
		for (let i in dataText){
			if(i === e.target.id){
				if (e.target.value !== "") acc += 1
			}else{
				if(dataText[i] !== "") acc += 1
			}
		}
		setCounter({...counter, TextArea: {quantity: Object.keys(dataText).length, counter: acc}})
		localStorage.setItem("TextArea", JSON.stringify({...dataText, [e.target.id]: e.target.value }))
		localStorage.setItem("counter", JSON.stringify({...counter, TextArea: {quantity: Object.keys(dataText).length, counter: acc}}))
	}
	return(
		<div>
			<Label htmlFor={id}>{title}</Label>
			<Input id={id} value={value} onChange={onChange}/>
		</div>
	)
}