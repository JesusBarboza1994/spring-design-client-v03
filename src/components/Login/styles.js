import styled from "@emotion/styled";
import { colors } from "../../styles/colors";
import { typography } from "../../styles/typography";
import { fonts } from "../../styles/typography";

export const Wrapper = styled.div`
   background-image: url("/fondo.png");
   background-position: center;
   background-repeat: no-repeat;
   background-size: cover;
`

/* Add styles to the form container */
export const LoginContainer=styled.form`
    position: absolute;
    left: 0;
    margin: 0px;
    left: 0;
    margin: 0px;
    width: 500px;
    height: 100%;
    flex-shrink: 0;
    padding: 16px;
    background-color: ${colors.red};

`
export const LogoContainer_LoginPage = styled.div`
       
    margin: 225px 0 75px 77px;

`
export const RegisterContainer = styled.div`
    display: grid;
    margin-left: 77px;
    
`
export const Label = styled.label`
   color: ${colors.white};
   ${typography.text.xl};
   font-weight: 400;
   font-family: ${fonts.primary};
   font-style: normal;
   
`

    /* Full-width input fields */
export const StyledInput = styled.input`
    width: 260px;
    height: 35px;
    flex-shrink: 0;
    border-radius: 5px;
    background: #D3D3D3;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.50);
    
    padding: 15px;
    margin: 5px 0 22px 0;
    border: none;
    :focus {
    background-color: "#ddd";
    outline: none;}
`
    
export const Button=styled.button`
    width: 260px;
    height: 60px;
    flex-shrink: 0;
    border-radius: 10px;
    background-color: #161A1D;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.50);
    color: ${colors.white};
    padding: 16px 20px;
    border: none;
    cursor: pointer;
    opacity: 0.9;
    :hover {opacity: 1};
`



