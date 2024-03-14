import { Header } from "../../components/Home/HeaderComponent";
import { ScreenStyle } from "../../components/Home/styles";
import { HeaderElement } from "../../components/SpringType/HeaderElement";


export default function Cotizador(){
    const [counter, setCounter] = useState( localStorage.getItem("counter") ? JSON.parse(localStorage.getItem("counter")) : {
		InicialData: {quantity: 0, counter: 0},
	
	})
    return(
        <ScreenStyle>
            <HeaderElement/>
           
        </ScreenStyle>

        

    );
}