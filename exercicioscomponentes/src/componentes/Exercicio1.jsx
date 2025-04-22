export default function Exercicio1({ fah }) 
{
    let celsius = Number (fah - 35)*5 /9

    return (
        <div> 

            A conversão de 100°F para Celsius é {celsius}
            A conversão de 70°F para Celsius é {celsius}

        </div>
    )
}

