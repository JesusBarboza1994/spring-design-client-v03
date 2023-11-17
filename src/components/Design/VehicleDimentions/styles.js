import styled from "@emotion/styled";
import { colors } from "../../../styles/colors";

export const Wrapper = styled.div`
	display: grid;
	
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
export const DimentionsInput = styled.div`
  width: 45px;
  height: 20px;
  border-radius: 8px;
  color: ${colors.cell};
  
`
export const Label = styled.label`
 color: ${colors.font.text};
`