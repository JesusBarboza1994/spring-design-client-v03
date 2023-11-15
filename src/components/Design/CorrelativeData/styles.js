import styled from "@emotion/styled";
import { colors } from "../../../styles/colors";

export const Wrapper = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	column-gap: 70px;
    border-radius: 20px;
	padding: 20px 35px;
	margin-bottom: 20px;
    background: ${colors.secondary.light};

	> div{
		display: flex;
		flex-direction: column;
		gap: 6px;
		width: 80%;
     	    
	}
    >div1{
        display: flex;
        gap: 20px;
		width: 80%;
    }
    
	@media(max-width: 1024px){
		display:flex;
		flex-direction:column;
		gap: 0.5rem;
	}
`
export const Text = styled.label`
 color: ${colors.font.text};

`
