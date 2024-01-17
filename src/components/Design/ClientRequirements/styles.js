import styled from "@emotion/styled";
import { colors } from "../../../styles/colors";
import { typography } from "../../../styles/typography";
import { fonts } from "../../../styles/typography";

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
export const Input = styled.input`
  width: 560px;
  height: 108px;
  flex-shrink: 0;
  border-radius: 0px 8px 8px 8px;
  border: 1px solid #000;
  background: #FFF;
  box-shadow: 5px 4px 2px 0px rgba(0, 0, 0, 0.25);
`
export const Label = styled.label`
  display: flex;
  width: 280px;
  height: 25px;
  padding: 0px 10px 0px 10px;
  flex-shrink: 0;

  border-radius: 8px 8px 0px 0px;
  border-top: 1px solid #000;
  border-right: 1px solid #000;
  border-left: 1px solid #000;
  background: #FFF;
  box-shadow: 5px 4px 2px 0px rgba(0, 0, 0, 0.25);
  color: ${colors.font.text};
`
export const ReqTable = styled.table`
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #000;
  box-shadow: 5px 4px 2px 0px rgba(0, 0, 0, 0.25);
  background: ${colors.cell};
  color: ${colors.font.text};
`
export const TableTitle = styled.th`
  width: 100%;
  background: ${colors.cell};
  font-family: ${fonts.primary};
  ${typography.text.md}
  color: ${colors.font.text};
  text-align: left;
  
` 

export const Td = styled.td`
  width: 50%;
  text-align: center;
  //border: 1px solid #000;
  gap: 0;
`
export const Select = styled.select`
  width: 100%;
  background-color: ${colors.cell};
  color: ${colors.font.text};
  font-family: ${fonts.primary};
  ${typography.text.md};
  text-align: center;
  padding: 5px;
  border: 1px solid #000;
  
`
export const Title = styled.td`
  width: 90px;
  text-align: center;
`
export const Cell = styled.input`
  width: 100%;
`
export const Comment= styled.td`
  width: 150px;
  text-align: center;
`