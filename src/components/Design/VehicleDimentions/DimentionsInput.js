import { Wrapper } from "./styles";


export function DimentionsInput({title, value, onChange, id}){
	return(
		<Wrapper style={{display: "flex", }}>
			<label for={id}>{title}</label>
			<input id={id} value={value} onChange={onChange}/>
		</Wrapper>
	)
}