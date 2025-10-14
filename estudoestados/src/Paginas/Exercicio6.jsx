import { useState } from "react"

export default function Exercicio6()
{


  const[quant, setQuant] = useState(0);
  const[preço, setPreço] = useState(0);
  const[resultado, setResultado] = useState(0);
  
  function calcular()
  {
   let subtotal, desconto, valorfinal;
  
  subtotal= Number(quant)*Number(preço);
  desconto= Number(subtotal)*0.10;
  valorfinal= Number(subtotal)-Number(desconto);

   setResultado("Subtotal: " + subtotal + " - Desconto: " + desconto + "- Valor Final" + valorfinal);
  }
  
      return(
          <div>
              <h1>Exercicio6</h1>
              
          <div className="conteudo">
  
  <h3>Calculo Preço</h3>
  
  
  <form>
  <p>
  Digite a quantidade: <br />
  <input type="text" value={quant} 
    onChange={(e) => setQuant(e.target.value)}/>
  </p>

  <p>
  Digite o preço: <br />
  <input type="text" value={preço} 
             onChange={(e) => setPreço(e.target.value)}/>
  </p>

  <p>
  <input type="button" value="Calcular" onClick={calcular}/>
  </p>
  
  <p>
   <b>Resultado</b>
    <br/>
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