import styled from "@emotion/styled";
import { colors } from "../../styles/colors";
import { fonts, typography } from "../../styles/typography";
import { Redcontainer, Logo, CompanyName } from "../../components/Home/style";

export function Header(){
  
    return(
        <Redcontainer>
            <div style={{marginTop: 50, marginLeft:50}}>
             <Logo>MRC</Logo>
             <CompanyName>Mallas, resortes y cables</CompanyName>
            </div>
            
        </Redcontainer>
    )
}