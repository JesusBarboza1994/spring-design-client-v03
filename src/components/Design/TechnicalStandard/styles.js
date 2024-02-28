import styled from "@emotion/styled";
import { colors } from "../../../styles/colors";

export const Wrapper = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr;
	//column-gap: 70px;
  

	> div{
		display: flex;
		flex-direction: column;
		gap: 6px;
		width: 90%;
    color: ${colors.font.text};
	}
	@media(max-width: 1024px){
		display:flex;
		flex-direction:column;
		gap: 0.5rem;
	}
`
export const Input = styled.input`
  width: 40px;
  border-radius: 8px 8px 8px 8px;
  border: 1px solid #000;
  background: #FFF;
   
 &:checked {
  accent-color: ${(props) => (props.applies ? '#1976d2' : 'gris')}; 
`
export const Input2 = styled.input`
    
  border-radius: 8px 8px 8px 8px;
  border: 1px solid #000;
  background: #FFF;
  padding-left: 10px;
`

export const Label = styled.label`
  display: flex;
  width: 70px;
  justify-content: left;
  align-items: flex-end;
  gap: 20px;
`
export const Div = styled.div`
 display: flex;
 gap: 25px;
 justify-content: left;
`
