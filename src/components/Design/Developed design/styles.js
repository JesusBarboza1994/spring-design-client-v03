import styled from "@emotion/styled";
import { colors } from "../../../styles/colors";
import { typography } from "../../../styles/typography";
import { fonts } from "../../../styles/typography";

export const Wrapper = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
    padding-top: 10px;
    margin-bottom: 50px;
	
	> div{
		display: flex;
		flex-direction: column;
		gap: 25px;
		width: 90%;
        color: ${colors.font.text};
	}
	
	@media(max-width: 1024px){
		display:flex;
		flex-direction:column;
		gap: 0.5rem;
	}
`
export const Div = styled.div`
 space-between: 25px;
`