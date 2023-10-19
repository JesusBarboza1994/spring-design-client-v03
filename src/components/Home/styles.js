import styled from "@emotion/styled";
import { colors } from "../../styles/colors";
import { typography } from "../../styles/typography";
import { fonts } from "../../styles/typography";

export const ScreenStyle = styled.div`
 width: 100%;
 display: flex;
 justify-content: center;
 align-items: center;

`
export const Wrapper = styled.div`
  width: 100%;
  height: 190px;
  background-color: #BA181B;
  position: absolute;
  top: 0px;
  left: 0px;
  display: flex;
`
export const LogoContainer = styled.div`
 width: 1000px;
 height: 95px;
 margin-top: 50px;
 margin-left: 50px;
 display:grid;
 gap: none;

`

export const Logo = styled.h1`
  color: ${colors.white};
  ${typography.head.xl};
  font-weight: 700;
  font-family: ${fonts.secondary};
  font-style: normal;
  line-height: normal;
  letter-spacing: 1px;
  margin: 0px;
`

export const CompanyName = styled.h2`
  align-self: flex-start;
  color: ${colors.white};
  ${typography.head.md};
  font-family: ${fonts.secondary};
  letter-spacing: 1px;
  margin: 0px;
`
    


export const ElementContainer = styled.div`
 
 width: 1000px;
 display: flex;
 flex-wrap: wrap;
 column-gap: 120px;
 row-gap: 80px; 
 padding-top: 330px;
 justify-content: center;

`

export const ElementStyle = styled.button`
  width: 250px; 
  height: 250px;
  border-radius: 25px;
  position: relative;
  box-shadow: 0px 2px 1px 0px rgba(217, 217, 217, 0.30);
  :hover{box-shadow: 2px 4px 1.5px 0px rgba(255, 255, 255, 0.40);}
  :hover {-webkit-transform:scale(1.03);transform:scale(1.03);}
  overflow:hidden;
  cursor: pointer;
  background-repeat: no-repeat;
  background-position: 0px 0px;
  background-size: contain;
  transition:all.2s linear;
`     
export const DivStyle = styled.div`
  width: 250px;
  height: 70px;
  position: absolute;
  bottom: 0px;
  left: 0px;
  background: ${colors.pink};
  color: ${colors.white};
  font-family: ${fonts.primary};
  :hover {font-weight: bold; background:${colors.red}};
  letter-spacing: 1px;
  text-align: center;
  padding-top: 18px; 
  ${typography.text.xl};
  cursor: pointer;
  transition:all .3s ease-in;
` 
