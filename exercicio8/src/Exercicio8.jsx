export default function Exercicio8({peso, altura})
{
    let IMC = peso/(altura*altura);
    return (
    <div>
        O peso é: {peso} <br/>
        A altura é: {altura} <br/>
        O IMC é: {IMC}
    </div>
    );
}