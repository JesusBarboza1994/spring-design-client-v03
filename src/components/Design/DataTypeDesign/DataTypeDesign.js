import { useState } from "react"
import Input from "../../Input"
import { Container, Content, TitleContainer, Wrapper } from "./styles"
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md"
import { colors } from "../../../styles/colors"
export function DataTypeDesign({text, Data}){
	const [ showData, setShowData ] = useState(true)
	return(
		<Content>
			<TitleContainer onClick={()=>setShowData(!showData)}>
				<p>{text}</p>
				{
					showData ? 
					<MdKeyboardArrowUp 
					style={{scale: "2", color:colors.black}}/>
					:
					<MdKeyboardArrowDown style={{scale: "2", color:colors.black}}/>
				}
			</TitleContainer>
			{
				showData && Data
			}
		</Content>
	)
}



export function DataClient(){
	const [dataClient, setDataClient] = useState({
		nombre:"",
		document: "",
		develop: "",
		phone: "",
		email: "",
		version:""
	})
	return(
		<Wrapper>
			<div>
				<Input title="Nombre" value={dataClient.nombre} onChange={(e)=>setDataClient({...dataClient, nombre:e.target.value})} id="name"/>
				<Input title="DNI / RUC" value={dataClient.document} onChange={(e)=>setDataClient({...dataClient, document:e.target.value})} id="document"/>
				<Input title="Desarrollo" value={dataClient.develop} onChange={(e)=>setDataClient({...dataClient,develop:e.target.value})} id="develop"/>
			</div>
			<div>
				<Input title="Teléfono" value={dataClient.phone} onChange={(e)=>setDataClient({...dataClient, phone:e.target.value})} id="phone"/>
				<Input title="Correo" value={dataClient.email} onChange={(e)=>setDataClient({...dataClient, email:e.target.value})} id="email"/>
				<Input title="Version" value={dataClient.version} onChange={(e)=>setDataClient({...dataClient,version: e.target.value})} id="version"/>
			</div>
		</Wrapper>
	)
}

export function Page(){
	return(
		<Container>
			<DataTypeDesign Data={<DataClient/>} text={"DATOS DE CLIENTE"}/>
		</Container>
	)
}