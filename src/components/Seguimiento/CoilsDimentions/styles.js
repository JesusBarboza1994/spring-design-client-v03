import styled from "@emotion/styled";
import { colors } from "../../../styles/colors";
import { typography } from "../../../styles/typography";
import { fonts } from "../../../styles/typography";

export const Wrapper = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr;
	margin-bottom: 20px;
	> div{
		display: flex;
		flex-direction: column;
		gap: 6px;
		width: 90%;
	}
	@media(max-width: 1120px){
		display:flex;
		flex-direction:column;
		gap: 1.25rem;
	}
`
export const Table = styled.table`
 
 width: 300px;
 height: 200px;
 font-family: ${fonts.primary};
 border-collapse: collapse;
 background-color: ${colors.secondary.light};
 border: 1px solid ${colors.secondary.dark};
 color: ${colors.font.text};
 box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`
export const Td = styled.td`
  height: 30px;
  width: 200px;
  border: 1px solid ${colors.secondary.dark};
  padding-left: 12px;
`
export const Td1 = styled.td`
  height: 30px;
  width: 180px;
  border: 1px solid ${colors.secondary.dark};
  padding-left: 12px;
`
export const Td_datos = styled.td`
  height: 30px;
  //width: 95px;
  border: 1px solid ${colors.secondary.dark};
  padding-left: 12px;
`
