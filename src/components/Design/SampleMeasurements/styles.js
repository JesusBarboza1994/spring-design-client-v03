import styled from "@emotion/styled";
import { colors } from "../../../styles/colors";
import { typography } from "../../../styles/typography";


export const Wrapper = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	column-gap: 70px;

	> div{
		display: flex;
		flex-direction: column;
		gap: 6px;
		width: 90%;
	}
	@media(max-width: 1024px){
		display:flex;
		flex-direction:column;
		gap: 0.5rem;
	}
`
export const Label = styled.label`
    color: ${colors.font.text};
`
export const Select = styled.select`
    width:130px;
	height: 30px;
	border-radius: 8px;

`

export const Div = styled.div`
	display: flex;
	flex-direction: column;
	gap: 6px;
	
`