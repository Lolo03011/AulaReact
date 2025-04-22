import Exemplo1 from "./Componentes/exemplo1"
import Exercicio1 from "./componentes/Exercicio1"

export default function App () {
  return (
    <div>
      <h1>Exercícios de Componentes</h1>

     <h3>Chamada para Exemplo1</h3>
     <Exemplo1 numero1={8} numero2={2} /> 
     <Exemplo1 numero1={10} numero2={22} /> 
     <Exemplo1 numero1={7.5} numero2={5.8} /> 
     <Exemplo1 numero1={-58} numero2={65} /> 

     <hr /> 
      <h3> Chamadas para o Exercício 1</h3>
      <Exercicio1 fah={100} />
      <Exercicio1 fah={50} /> 
      <Exercicio1 fah={32} />

      <h3>Chamadas para o Exercicio 2</h3>
  <Exercicio2 peso={80} altura= {1.80}/>
  <Exercicio2 peso={60} altura= {1.60} />

  <h3> Chamadas para o Exercicio 3</h3>
  
    </div>
  )

}