import { useState } from "react"

export default function Exercicio5()
{

       //variavel de estado para os campos do formulário
const[numero, setNumero] = useState(0);

//variavel de estado para o resultado
const[resultado, setResultado] = useState(0);

//função para calcular o quadrado ou o cubo 
function calcular()
{
 let quadrado, cubo;

 quadrado = Number(numero) * Number(numero);
 cubo = Number(numero) * Number(numero) * Number(numero);

 setResultado("Quadrado: " + quadrado + " - Cubo: " + cubo);
}

    return(
        <div>
            <h1>Exercicio5</h1>
            
        <div className="conteudo">

<h3>Calculo da Área</h3>


<form>
<p>
Digite o valor do lado: <br />
<input type="text" value={numero} 
           onChange={(e) => setNumero(e.target.value)}/>
</p>

<p>
<input type="button" value="Calcular" onClick={calcular}/>
</p>

<p>
                <b>Resultado</b>
                 <br/>
                 Número é {numero} <br/>
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