import { Wrapper } from "./styles";


export function DimentionsInput({title, value, onChange, id}){
	return(
		<Wrapper>
			<label for={id}>{title}</label>
			<input id={id} value={value} onChange={onChange}/>
		</Wrapper>
	)
}