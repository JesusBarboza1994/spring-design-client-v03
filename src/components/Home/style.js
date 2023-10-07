import styled from "@emotion/styled";
import { colors } from "../../styles/colors";
import { typography } from "../../styles/typography";
import { fonts } from "../../styles/typography";

export const Style = ({backgroundImage, text})=> {  
const ContainerStyle = styled.div`
    width: 250px; 
    height: 230px;
    background-image: url(${backgroundImage});
    background-size: cover; 
    border-radius: 25px;
    position: relative;
    box-shadow: 3px 3px 2px 0px rgba(128, 128, 128, 0.30);
    cursor: pointer;
  `     
const ButtonStyle = styled.button`
  width: 250px;
  height: 80px;
  border-radius: 25px;
  position: absolute;
  bottom: 0px;
  background: ${colors.pink};
  color: ${colors.white};
  :&hover {font-style: bold; background:"red"};
  letter-spacing: 1px;
  ${text};
  text-align: center;
  font-size: ${typography.text.xl};
  cursor: pointer;
` 
  
return(
  <ButtonStyle>{text}</ButtonStyle>
);
}
