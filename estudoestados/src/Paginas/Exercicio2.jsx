import { useState } from "react"

export default function Exercicio2()
{

   
const[numero, setNumero] = useState(0);
const[resultado, setResultado] = useState(0);
function calcular()
{
 let temperatura;

 temperatura = ((Number (numero) - 32) * 5) /9;

 setResultado("Graus Celsius: " + temperatura);
}
    return(
        <div>
            <h1>Exercicio2</h1>
            
        <div className="conteudo">

          <h3>Calculo da Temperatura</h3>

        
        <form>
    <p>
        Digite a temperatura em graus Fahrenheit: <br />
        <input type="text" value={numero} 
         onChange={(e) => setNumero(e.target.value)}/>
    </p>

    <p>
                    <b>Resultado</b>
                    <br/>
                    A temperatura em Fahrenheit{numero} <br/>
                    A temperatura em Resultado é {resultado}
                </p>

    <p>
        <input type="button" value="Calcular" onClick={calcular}/>
    </p>

    <p>
        <a href="/">Voltar←</a>
    </p>
  </form>
  </div>
  </div> 
    )
}