import styled from "@emotion/styled";
import { colors } from "../../../styles/colors";

export const Wrapper = styled.div`
  display: grid;
  gap: 20px;
  
`
export const ImgContainer = styled.div`
  display:flex;
  align-items:center;
  flex-direction:column;
  width:120px;
  height:120px;
  background:${colors.secondary.light};
  border-radius:8px;
  justify-content:center;
  
  position: relative;
`
export const IconContainer = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: ${colors.secondary.light};
  display: flex;
  justify-content: center;
  align-items: center;
  position:absolute;
  right: 8px;
  top: 6px;
  
  ;
`
export const UploadButton = styled.input`
  background-color: ${colors.primary.medium};
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
 @media(max-width: 1024px){
  height: auto;
 }
 @media(mix-width: 400px){
  height: auto;
  marginright: 20px;
 }
`

export const Carusel = styled.div`
  //height: 160px;
  margin: 20px;
  background-color: ${colors.cell};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  border-radius: 18px;
  padding: 25px;
  @media(max-width: 1024px){
    flex-wrap: wrap;
  }
  @media(min-width: 375px){
    padding-right: 5px;
  }
  
`
export const Demo = styled.img`
  border-radius: 10px; 
  object-fit: fill;
  max-height:120px;
  opacity: 0.7;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  &.active,
  &:hover {
    opacity: 1;
  }

`