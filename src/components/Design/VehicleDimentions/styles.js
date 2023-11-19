import styled from "@emotion/styled";
import { colors } from "../../../styles/colors";

export const Wrapper = styled.div`
	display: grid;
	
	> div{
		display: flex;
		
		gap: 6px;
		width: 90%;
	}
	label{
		margin: 0;
		color: ${colors.font.text};
		margin-bottom: 0.5rem;
		min-width: 170px;
	}
	
	@media(max-width: 1024px){
		display:flex;
		flex-direction:column;
		gap: 0.5rem;
	}
`
export const DimentionsContainer = styled.div`
 
 display: grid;
 gap: 6px;
`

export const DimentionsInput = styled.input`
  width: 55px;
  height: 25px;
  border-radius: 5px;
  color: "black";
  
`
export const Label = styled.label`
 color: ${colors.font.text};
`