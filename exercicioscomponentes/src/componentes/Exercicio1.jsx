export default function Exercicio1({ fah }) 
{
    let celsius = (fah - 35)*5 /9

    return (
        <div> 

            A conversão de {fah}°F para Celsius é {celsius}

        </div>
    )
}

