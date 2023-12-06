import styled from "@emotion/styled";
import { colors } from "../../../styles/colors";

// export const Container = styled.div`
//   position: relative;
// `;

// export const MySlides = styled.div`
//   display: none;
// `;

// export const ArrowButton = styled.a`
//   cursor: pointer;
//   position: absolute;
//   top: 40%;
//   width: auto;
//   padding: 16px;
//   margin-top: -50px;
//   color: white;
//   font-weight: bold;
//   font-size: 20px;
//   border-radius: 0 3px 3px 0;
//   user-select: none;
//   -webkit-user-select: none;

//   &:hover {
//     background-color: rgba(0, 0, 0, 0.8);
//   }

//   &.next {
//     right: 0;
//     border-radius: 3px 0 0 3px;
//   }
// `;


// export const CaptionContainer = styled.div`
//   text-align: center;
//   background-color: #222;
//   padding: 2px 16px;
//   color: white;
// `;

// export const Row = styled.div`
//   &:after {
//     content: "";
//     display: table;
//     clear: both;
//   }
// `;

// export const Column = styled.div`
//   float: left;
//   width: 16.66%;
// `;
export const Wrapper = styled.div`
  display: grid;
  position:relative;
  gap: 20px;
  
`

export const Button = styled.button`
  background-color: "none";
  border-radius: 30px;
  border: none;
  cursor: pointer;
  
`

export const MainImage = styled.img`
 width: 100%;
 display: flex;
 justify-content: center;
 border-radius: 18px;
 height: 400px;
`

export const Carusel = styled.div`
  height: 160px;
  margin: 20px;
  background-color: ${colors.cell};
  display: flex;
  align-items: center;
  gap: 20px;
  border-radius: 18px;
  padding: 25px;
  
  
`;
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
`;