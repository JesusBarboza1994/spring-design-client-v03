import styled from "@emotion/styled";
import { colors } from "../../styles/colors";
import { typography } from "../../styles/typography";
import { fonts } from "../../styles/typography";

export const Table4 = styled.table`
  width: 500px; 
  background-color: ${colors.black};
  font-family: ${fonts.primary};
  border: 2px solid ${colors.grey};
  border-collapse: collapse;
  border: 2px solid ${colors.grey};
  color: ${colors.white};

`
export const Input = styled.input`
  width: 42px;
  height: 18px;
  color:${colors.white};
  background-color: ${colors.black};
  margin: 8px;
  font-family:"ABeeZee";
  font-size: 12px;
  border-style:inset;
  border-radius: 4px;   
`

export const Td_processtable = styled.td`
  height: 36px;  
  text-align: center;
  border: 1px solid ${colors.grey};
  font-size: 13px;
`
export const Th3_processtable = styled.th`
  height: 70px;
  font-size: 14px;
  border: 1px solid grey;
  font-family:"ABeeZee";
  letter-spacing: 1px;
  padding-left: 5px;
  padding-right:5px;
  
`
export const Button4 = styled.button`
  width:125px;
  height:40px;
  margin:20px 0px 0px 20px;
  background-color: #363636;
  border-radius:6px;
  font-family:"ABeeZee";
  letter-spacing: 1px;
  line-height: 14px; 
  font-size: 12px;
  color: white;
`
export const Button2 = styled.button`
  width:80px;
  height:70px;
  font-size:14px;
  border: none;
  background-color: #5B5B5B;
  font-family: "ABeeZee";
  font-weight: bold;
  color:white
`

export const Button3 = styled.button`
  width:20px;
  height:70px;
  font-size:14px;
  border: none;
  background-color: #5B5B5B;
  font-family: "ABeeZee";
  font-weight: bold;
  color:white
`