import styled from "@emotion/styled";
import { colors } from "../../../styles/colors";
import { typography } from "../../../styles/typography";
import { fonts } from "../../../styles/typography";

export const Wrapper = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
    padding-top: 10px;
    margin-bottom: 10px;
	
	> div{
		display: flex;
		flex-direction: column;
		gap: 25px;
		width: 90%;
        color: ${colors.font.text};
		position: relative;
	}
	
	@media(max-width: 1024px){
		display:flex;
		flex-direction:column;
		gap: 0.5rem;
	}
`
export const DivPrecio = styled.div`
	display: grid;
	gap: 10px;
    //position: absolute;
	right: 0px;	
	bottom: 0px;
`
export const InputPrecio=styled.input`
    width: 80px;
	height: 30px;
	border-radius: 8px;
	margin-left: 10px;
	padding-left: 10px;
	>label{
		margin: 0;
		color: ${colors.font.text};
		margin-bottom: 0.5rem;
		min-width: 170px;
	}
`

export const DivPlano = styled.div`
  display: grid;
  gap: 10px;
`

export const InputPlano = styled.input`
  border-radius: 8px 8px 8px 8px;
  border: 1px solid #000;
  gap: 10px;
`
export const Container = styled.div`
  gap: 100px;
  @media(max-width: 1024px){
	display:grid;
 }
  
`