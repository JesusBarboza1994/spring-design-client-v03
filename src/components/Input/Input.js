import { Wrapper } from "./styles";

export function Input({title, value, onChange, id}){
	return(
		<Wrapper>
			<label htmlFor={id}>{title}</label>
			<input id={id} value={value} onChange={onChange}/>
		</Wrapper>
	)
}