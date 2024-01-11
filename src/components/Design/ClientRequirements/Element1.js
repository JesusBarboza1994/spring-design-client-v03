import { Input, Label } from "./styles";

export default function Element1({title, value, onChange, id}){
	return(
		<div>
			<Label for={id}>{title}</Label>
			<Input id={id} value={value} onChange={onChange}/>
		</div>
	)
}