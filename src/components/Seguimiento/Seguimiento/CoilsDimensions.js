import { useEffect, useState } from "react"
import { useAuth } from "../../../context/auth-context";
import { colors } from "../../../styles/colors";
import { Wrapper, Table, Td, Td1, Td_datos } from "./styles"

export function CoilsDimensions(){
	const {originalDimensions, setOriginalDimensions, filas, setFilas,} = useAuth();

	return(
		<div>
			<p style={{color: colors.font.text, fontWeight: "bold", marginBottom:10 }}>ORIGINAL</p>
			<Wrapper>
				<Table>
					<tr>
						<Td> Alambre </Td>
						<Td_datos> {originalDimensions.d} </Td_datos>
					</tr>
					<tr>
						<Td> Diam.exterior 1 </Td>
						<Td_datos> {originalDimensions.Dext} </Td_datos>
					</tr>
					<tr>
						<Td> Diam.exterior 2 </Td>
						<Td_datos> {originalDimensions.Dext2} </Td_datos>
					</tr>
					<tr>
						<Td> Sentido de vueltas </Td>
						<Td_datos> 0 </Td_datos>
					</tr>
					<tr>
						<Td> Rigidez teorica </Td>
						<Td_datos> 111 </Td_datos>
					</tr>
					<tr>
						<Td> Esfuerzo de bloqueo </Td>
						<Td_datos> 111 </Td_datos>
					</tr>
				</Table>

				<Table>
				    <tr>
						<Td> Longitud </Td>
						<Td_datos> {originalDimensions.L0} </Td_datos>
					</tr>
					<tr>
						<Td> Diam.interior 1 </Td>
						<Td_datos> {originalDimensions.Dint1} </Td_datos>
					</tr>
					<tr>
						<Td> Diam.interior 2 </Td>
						<Td_datos> {originalDimensions.Dint2} </Td_datos>
					</tr>
					<tr>
						<Td> Nro de vueltas </Td>
						<Td_datos> {originalDimensions.N} </Td_datos>
					</tr>
					<tr>
						<Td> LDA </Td>
						<Td_datos> 111 </Td_datos>
					</tr>
					<tr>
						<Td> Peso </Td>
						<Td_datos> 111 </Td_datos>
					</tr>					
				</Table>

				<Table>
 					<tr> <Td1>Extremo 1</Td1></tr>
					 <tr>
						<Td1> TASE </Td1>
						<Td_datos> Inclinado </Td_datos>
					</tr>
					<tr>
						<Td1> Sobrepuesto </Td1>
						<Td_datos> Descentrado </Td_datos>
					</tr>	
				    <tr>
						<Td1> Luz 1 </Td1>
						<Td_datos> {originalDimensions.Luz1} </Td_datos>
					</tr>
					<tr>
						<Td1> Vta red/ampl 1 </Td1>
						<Td_datos> {originalDimensions.Vtas1} </Td_datos>
					</tr>
					<tr>
						<Td1> Excentricidad 1</Td1>
						<Td_datos> -- </Td_datos>
					</tr>		
               </Table>

			   <Table>
 					<tr> <Td1>Extremo 2</Td1></tr>
					 <tr>
						<Td1> TASE </Td1>
						<Td_datos> Inclinado </Td_datos>
					</tr>
					<tr>
						<Td1> Sobrepuesto </Td1>
						<Td_datos> Descentrado </Td_datos>
					</tr>	
				    <tr>
						<Td1> Luz 2 </Td1>
						<Td_datos> {originalDimensions.Luz2} </Td_datos>
					</tr>
					<tr>
						<Td1> Vta red/ampl 2 </Td1>
						<Td_datos> {originalDimensions.Vtas2} </Td_datos>
					</tr>
					<tr>
						<Td1> Excentricidad 2</Td1>
						<Td_datos> -- </Td_datos>
					</tr>		
               </Table>
			</Wrapper>

			<p style={{color: colors.font.text, fontWeight: "bold", marginBottom:10 }}>MODIFICADO</p>
			<Wrapper>
				<Table>
					<tr>
						<Td> Alambre </Td>
						<Td_datos> 111 </Td_datos>
					</tr>
					<tr>
						<Td> Diam.exterior 1 </Td>
						<Td_datos> 111 </Td_datos>
					</tr>
					<tr>
						<Td> Diam.exterior 2 </Td>
						<Td_datos> 111 </Td_datos>
					</tr>
					<tr>
						<Td> Sentido de vueltas </Td>
						<Td_datos> 111 </Td_datos>
					</tr>
					<tr>
						<Td> Rigidez teorica </Td>
						<Td_datos> 111 </Td_datos>
					</tr>
					<tr>
						<Td> Esfuerzo de bloqueo </Td>
						<Td_datos> 111 </Td_datos>
					</tr>
				</Table>

				<Table>
				    <tr>
						<Td> Longitud </Td>
						<Td_datos> 111 </Td_datos>
					</tr>
					<tr>
						<Td> Diam.interior 1 </Td>
						<Td_datos> 111 </Td_datos>
					</tr>
					<tr>
						<Td> Diam.interior 2 </Td>
						<Td_datos> 111 </Td_datos>
					</tr>
					<tr>
						<Td> Nro de vueltas </Td>
						<Td_datos> 111 </Td_datos>
					</tr>
					<tr>
						<Td> LDA </Td>
						<Td_datos> 111 </Td_datos>
					</tr>
					<tr>
						<Td> Peso </Td>
						<Td_datos> 111 </Td_datos>
					</tr>					
				</Table>

				<Table>
 					<tr> <Td1>Extremo 1</Td1></tr>
					 <tr>
						<Td1> TASE </Td1>
						<Td_datos> Inclinado </Td_datos>
					</tr>
					<tr>
						<Td1> Sobrepuesto </Td1>
						<Td_datos> Descentrado </Td_datos>
					</tr>	
				    <tr>
						<Td1> Luz 1 </Td1>
						<Td_datos> 00 </Td_datos>
					</tr>
					<tr>
						<Td1> Vta red/ampl 1 </Td1>
						<Td_datos> -- </Td_datos>
					</tr>
					<tr>
						<Td1> Excentricidad 1</Td1>
						<Td_datos> -- </Td_datos>
					</tr>		
               </Table>

			   <Table>
 					<tr> <Td1>Extremo 2</Td1></tr>
					 <tr>
						<Td1> TASE </Td1>
						<Td_datos> Inclinado </Td_datos>
					</tr>
					<tr>
						<Td1> Sobrepuesto </Td1>
						<Td_datos> Descentrado </Td_datos>
					</tr>	
				    <tr>
						<Td1> Luz 2 </Td1>
						<Td_datos> 00 </Td_datos>
					</tr>
					<tr>
						<Td1> Vta red/ampl 2 </Td1>
						<Td_datos> -- </Td_datos>
					</tr>
					<tr>
						<Td1> Excentricidad 2</Td1>
						<Td_datos> -- </Td_datos>
					</tr>		
               </Table>

			</Wrapper>
	    </div>
		
	)
}