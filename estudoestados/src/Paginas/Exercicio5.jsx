import { useState } from "react"

export default function Exercicio5()
{


const[lado, setLado] = useState(0);
const[resultado, setResultado] = useState(0);

function calcular()
{
 let areaquadrado;

 areaquadrado = Number(lado)*Number(lado);

 setResultado("valor da areadoquadrado: " + areaquadrado);
}

    return(
        <div>
            <h1>Exercicio5</h1>
            
        <div className="conteudo">

<h3>Calculo da Área</h3>


<form>
<p>
Digite o valor do lado: <br />
<input type="text" value={lado} 
           onChange={(e) => setLado(e.target.value)}/>
</p>

<p>
<input type="button" value="Calcular" onClick={calcular}/>
</p>

<p>
                <b>Resultado</b>
                 <br/>
                 O Valor do lado de um quadrado é {lado} <br/>
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