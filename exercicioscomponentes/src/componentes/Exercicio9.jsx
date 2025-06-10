export default function Exercicio9({capital, juros,tempo}) 

{
    let montante = capital * Math.pow(1 + juros / 100, tempo);
    return (
        <div>
            O capital é: R${capital} <br/>
            O juros é: R${juros}<br/>
            O tempo é: {tempo} <br/>
            O montante é: R${montante}
        </div>
    );

}