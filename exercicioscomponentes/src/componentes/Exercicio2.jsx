export default function Exercicio2({peso, altura }) 
{
    let IMC  = peso/ (altura* altura); 

    return (
        <div> 

            Uma pessoa com {peso}kg e {altura} metros tem IMC de {IMC}

        </div>
    )
}