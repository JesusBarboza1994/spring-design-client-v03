
import HomeComponent from "../../components/Home/HomeComponent";
import "@fontsource/inter";
import "@fontsource/work-sans";
import { Header } from "../../components/Home/HeaderComponent";
//import Images from "../Images";
//import Component_prueba from "../../components/Component_prueba";


export default function Home(){
 const imageCards= ["diseño.webp", "comparativo.webp", "colsultarStock.webp", "cotizacion.webp", "diseñoRapido.webp"]
    return(
        <div style={{width: 1440, height: 1024, display: "flex", justifyContent: "center",
        alignItems: "center" }}>
          <Header/>
          
          <div style={{width: 1000,
                       display: "flex",
                       flexWrap: "wrap",
                       columnGap: 120,
                       rowGap: 80, 
                       paddingTop: 350,
                       justifyContent: "center",
                       }}>
     
            <HomeComponent backgroundImage= "https://ferraliresortes.com/wp-content/uploads/2021/01/WhatsApp-Image-2021-01-06-at-12.03.45-PM.jpeg" text="DISEÑO"/> 
            <HomeComponent backgroundImage= "url(/Images/comparativo.webp)" text="COMPARATIVO"/>
            <HomeComponent backgroundImage= "url(/Images/consultarStock.webp)" text="CONSULTAR STOCK"/>
            <HomeComponent backgroundImage= "url(/Images/cotizacion.webp)" text="COTIZACION"/>
            <HomeComponent backgroundImage= "url(/Images/diseñoRapido.webp)" text="DISEÑO RAPIDO"/>
            
          </div>
          
        </div> 
    );
}