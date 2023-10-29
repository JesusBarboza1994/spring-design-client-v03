import styled from "@emotion/styled";
import { colors } from "../../../styles/colors";

export const Wrapper = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
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

export const Container = styled.div`
margin: 10px 80px;

`
export const Content = styled.div`
	border-radius: 20px;
	padding: 20px;
	background: ${colors.secondary.light};

`
export const TitleContainer = styled.div`
 display: flex;
 align-items: center;
 gap: 6px;
 margin-bottom: 1rem;
	>p{
	color: ${colors.font.text};
	font-weight: 800;
	}
`