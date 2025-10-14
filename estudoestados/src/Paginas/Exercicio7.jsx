import { useState } from "react"

export default function Exercicio7()
{


  const[nota1, setNota1] = useState(0);
  const[nota2, setNota2] = useState(0);
  const[nota3, setNota3] = useState(0);
  const[resultado, setResultado] = useState(0);
  
  
  function calcular()
  {
   let média;
  
  média= (Number(nota1)+Number(nota2)+Number(nota3))/3;
  
   setResultado("Media: " + média );
  }
      return(
          <div>
              <h1>Exercicio7</h1>
              
              <div className="conteudo">
  
              <h3>Calcule média</h3>
              
          
              <form>
                  <p>
                      Digite nota 1: <br />
                      <input type="text"  value={nota1} 
             onChange={(e) => setNota1(e.target.value)}/>
                  </p>
  
                  <p>
                      Digite nota 2: <br />
                      <input type="text"  value={nota2} 
           onChange={(e) => setNota2(e.target.value)}/>
                  </p>
  
                  <p>
                      Digite nota 3: <br />
                      <input type="text" value={nota3} 
           onChange={(e) => setNota3(e.target.value)} />
                  </p>
  
                  <p>
                      <input type="button" value="Calcular" onClick={calcular}/>
                  </p>
                      
                  <p>
                      <b>Resultado</b>
                      <br/>
                      nota1 {nota1} <br/>
                      nota2 {nota2}  <br/>
                      nota3 {nota3} <br/>
                      Resultado é {resultado}
                  </p>
  
                  <p>
                      <a href="/">Voltar←</a>
                  </p>
              </form>
              </div>
          </div>
      )
  }