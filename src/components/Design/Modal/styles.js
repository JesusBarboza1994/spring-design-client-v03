import styled from "@emotion/styled";
import { colors } from "../../../styles/colors";

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

export const Wrapper = styled.div`
  background-color: red;
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0.5;
`