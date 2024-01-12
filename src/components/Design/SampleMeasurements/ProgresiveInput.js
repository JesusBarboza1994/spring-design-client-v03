import { Wrap } from "./styles";

export default function ProgresiveInput({title, value, onChange, id}){
	return(
		<Wrap>
			<label for={id}>{title}</label>
			<input id={id} value={value} onChange={onChange}/>
		</Wrap>
	)
}