import styled from "@emotion/styled";
import { colors } from "../../../styles/colors";

export const Wrapper = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	column-gap: 60px;
    border-radius: 20px;
	padding: 20px 40px;
	margin-bottom: 20px;
    background: ${colors.secondary.light};

	> div{
		display: flex;
		align-items: center;
		gap: 6px;
		width: 80%;
     	    
	}
    >.divText{
        
        gap: 30px;
		width: auto;
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
