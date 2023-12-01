import styled from "@emotion/styled";
import { colors } from "../../styles/colors";

export const Wrapper = styled.div`
    display: flex;
	justify-content: space-between;
	width: 100%;
	max-width: 500px;
	label{
		margin: 0;
		color: ${colors.font.text};
		margin-bottom: 0.5rem;
		min-width: 170px;
	}
	input{
		width:300px;
		height: 30px;
		border-radius: 8px;
	}
	@media(max-width: 640px){
		flex-direction:column;
		label{
			margin-bottom: 4px;
		}
		input{
			height: 25px;
			width: 100%;
		}
	}
`