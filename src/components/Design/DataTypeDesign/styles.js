import styled from "@emotion/styled";
import { colors } from "../../../styles/colors";


export const Container = styled.div`
 margin: 12px 80px;
 @media(max-width: 375px){
	margin: 12px 20px;
}

`
export const Content = styled.div`
	border-radius: 20px;
	padding: 20px 35px;
	margin-bottom: 20px;
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
	cursor: pointer;
	}
`