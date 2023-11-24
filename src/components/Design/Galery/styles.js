import styled from "@emotion/styled";


export const Container = styled.div`
  position: relative;
`;

export const MySlides = styled.div`
  display: none;
`;

export const ArrowButton = styled.a`
  cursor: pointer;
  position: absolute;
  top: 40%;
  width: auto;
  padding: 16px;
  margin-top: -50px;
  color: white;
  font-weight: bold;
  font-size: 20px;
  border-radius: 0 3px 3px 0;
  user-select: none;
  -webkit-user-select: none;

  &:hover {
    background-color: rgba(0, 0, 0, 0.8);
  }

  &.next {
    right: 0;
    border-radius: 3px 0 0 3px;
  }
`;


export const CaptionContainer = styled.div`
  text-align: center;
  background-color: #222;
  padding: 2px 16px;
  color: white;
`;

export const Row = styled.div`
  &:after {
    content: "";
    display: table;
    clear: both;
  }
`;

export const Column = styled.div`
  float: left;
  width: 16.66%;
`;

export const Demo = styled.img`
  opacity: 0.6;

  &.active,
  &:hover {
    opacity: 1;
  }
`;