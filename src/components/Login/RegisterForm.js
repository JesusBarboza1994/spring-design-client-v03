import { Wrap, StyledInput, Button, LogoContainer_LoginPage, RegisterContainer, Label} from "./styles";
import { Logo, CompanyName } from "../Home/styles";



function RegisterForm(){
    
    const TextInput = (props) => {
        return <StyledInput type="text" {...props} />;
    };
    const PasswordInput = (props) => {
        return <StyledInput type="password" {...props} />;
    };

    return(
     <>
        
      <LogoContainer_LoginPage>
         {/*<Logo>MRC</Logo>*/}
         <img src="/Images/MRC1.png" align="left" hspace="0px" width="40%" />
         <CompanyName>Mallas, resortes y cables</CompanyName>
      </LogoContainer_LoginPage>

      <RegisterContainer>
         
         <Label for="usuario"><b>USUARIO</b></Label>
         <TextInput placeholder="Enter user name" name="usuario" required/>

         <Label for="contraseña"><b>CONTRASEÑA</b></Label>
         <PasswordInput placeholder="Enter password" name="contraseña" required/>

         <Button type="submit" class="btn"> ENTRAR </Button>
      </RegisterContainer>
     </>
 
    );
 
 
}
export default RegisterForm

