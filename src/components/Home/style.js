import styled from "@emotion/styled";
import { colors } from "../../styles/colors";
import { typography } from "../../styles/typography";
import { fonts } from "../../styles/typography";

export const ContainerStyle = styled.div`
    width: 250px; 
    height: 280px;
    background-size: cover; 
    border-radius: 25px;
    position: relative;
    box-shadow: 3px 3px 2px 0px rgba(128, 128, 128, 0.30);
    cursor: pointer;
  `     
export const ButtonStyle = styled.button`
  width: 250px;
  height: 80px;
  border-radius: 25px;
  position: absolute;
  bottom: 0px;
  background: ${colors.pink};
  color: ${colors.white};
  font-family: ${fonts.primary};
  :hover {font-weight: bold; background:${colors.red}};
  letter-spacing: 1px;
  text-align: center;
  ${typography.text.xl};
  cursor: pointer;
` 
