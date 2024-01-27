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
	gap: 5px;
`

export const Precio = styled.input`
	max-width: 70px;
	min-width: 30px;
	border-radius: 8px 8px 8px 8px;
    border: 1px solid #000;
    margin-left: 15px;
`
export const Cantidad = styled.input`
	max-width: 70px;
	min-width: 30px;
	border-radius: 8px 8px 8px 8px;
    border: 1px solid #000;
    margin-left: 79px;
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