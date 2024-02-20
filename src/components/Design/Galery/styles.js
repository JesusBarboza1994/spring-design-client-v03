import styled from "@emotion/styled";
import { colors } from "../../../styles/colors";

export const Wrapper = styled.div`
  display: grid;
  gap: 20px;
  
`

export const Button = styled.button`
  background-color: "none";
  border-radius: 30px;
  border: none;
  cursor: pointer;
  
`
export const CloseButton = styled.button`
 width: 40px;
 height: 40px;
 flex-shrink: 0;
 background-color: ${colors.primary.medium};
 border-radius: 50%;
`
export const FondoDiv = styled.div`
 width: 617.085px;
 height: 369.6px;
 flex-shrink: 0;
 background-color: ${colors.primary.light};
 border-radius: 20px;
 background: #FFF;
 box-shadow: 0px 8px 6px 0px rgba(0, 0, 0, 0.25);
`

export const MainImage = styled.img`
 width: 100%;
 display: flex;
 justify-content: center;
 border-radius: 18px;
 height: 400px;
`

export const Carusel = styled.div`
  //height: 160px;
  margin: 20px;
  background-color: ${colors.cell};
  display: flex;
  align-items: center;
  gap: 20px;
  border-radius: 18px;
  padding: 25px;
  @media(max-width: 1024px){
    flex-wrap: wrap;
   }
  
`
export const Demo = styled.img`
  
  cursor: pointer;
  opacity: 0.7;
  max-height: 130px;
  border-radius: 10px; 
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  &.active,
  &:hover {
    opacity: 1;
  }

`