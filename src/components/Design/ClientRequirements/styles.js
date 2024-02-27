import styled from "@emotion/styled";
import { colors } from "../../../styles/colors";
import { typography } from "../../../styles/typography";
import { fonts } from "../../../styles/typography";

export const Wrapper = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
  padding-top: 10px;
  margin-bottom: 10px;
	
	@media(max-width: 1024px){
		display:flex;
		flex-direction:column;
		gap: 0.5rem;
	}
`
export const Div = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  column-gap: 70px;
`

export const Input = styled.input`
  width: 560px;
  height: 108px;
  flex-shrink: 0;
  border-radius: 0px 8px 8px 8px;
  border: 1px solid #000;
  background: #FFF;
  box-shadow: 5px 4px 2px 0px rgba(0, 0, 0, 0.25);
  padding: 10px;
  @media(max-width: 1024px){
		width: 300px;
  }
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
  border: 1px solid #000;
  border-radius: 8px;
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
export const Tr = styled.tr`
  @media(max-width: 1024px){
  display: grid;
  }

`
export const Td = styled.td`
  width: 50%;
  text-align: center;
  //border: 1px solid #000;
  
`
export const Td1 = styled.td`
  text-align: left;
  //border: 1px solid #000;
  
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
  border-radius: 6px;
  
`
export const Title = styled.td`
  width: 90px;
  text-align: center;
`
export const Cell = styled.input`
  width: 100%;
  border-radius: 6px;
  text-align: center;
  border: 1px solid #000;

`
export const Cell1 = styled.input`
  width: 40px;
  border-radius: 6px;
  text-align: center;
  border: 1px solid #000;

`
export const Comment= styled.td`
  width: 150px;
  text-align: center;
`
export const ButtonSubir = styled.label`
  cursor: pointer;
  background-color: ${colors.cell};
  color: ${colors.font.text};
  height: 35px;
  width: 140px;
  border-radius: 30px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
 
`
export const SignatureContainer = styled.div`
  width: 560px;
  min-height: 108px;
  flex-shrink: 0;
  border-radius: 0px 8px 8px 8px;
  border: 1px solid #000;
  background: #FFF;
  box-shadow: 5px 4px 2px 0px rgba(0, 0, 0, 0.25);
  padding: 5px;
  @media(max-width: 1024px){
		width: 300px;
  }
`
