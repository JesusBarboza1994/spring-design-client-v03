import { useState, useEffect } from "react"
import { Input, Label } from "./styles";

export default function TextArea({title, value, onChange, id}){			
	return(
		<div>
			<Label htmlFor={id}>{title}</Label>
			<Input id={id} value={value} onChange={onChange}/>
		</div>
	)
}