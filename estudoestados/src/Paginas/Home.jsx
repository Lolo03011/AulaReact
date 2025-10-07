import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1>𝓔𝓢𝓣𝓤𝓓𝓞 𝓓𝓔 𝓔𝓢𝓣𝓐𝓓𝓞𝓢</h1>

      <div className="conteudo">
        <p>
          O useState é um hook do React que permite adicionar e gerenciar estados em componentes funcionais. Com ele, você pode criar variáveis que armazenam valores dinâmicos, como textos, números ou objetos, e atualizar esses valores conforme o usuário interage com a interface. Sempre que o estado muda, o componente é re-renderizado automaticamente para refletir as novas informações na tela.
        </p>

        <ul>
            <li><Link to="/exemplo1">Exemplo 1🤍</Link></li>
            <li><Link to="/exemplo2">Exemplo 2🤍</Link></li>
        </ul>

        <h3>✰Exercicios✰</h3>
        
        <ul>
          <li><a href="/exercicio1">Exercicio 1🦄</a></li>
          <li><a href="/exercicio2">Exercicio 2🦄</a></li>
          <li><a href="/exercicio3">Exercicio 3🦄</a></li>
          <li><a href="/exercicio4">Exercicio 4🦄</a></li>
          <li><a href="/exercicio5">Exercicio 5🦄</a></li>
          <li><a href="/exercicio6">Exercicio 6🦄</a></li>
          <li><a href="/exercicio7">Exercicio 7🦄</a></li>
          <li><a href="/exercicio8">Exercicio 8🦄</a></li>
          <li><a href="/exercicio9">Exercicio 9🦄</a></li>
          <li><a href="/exercicio10">Exercicio 10🦄</a></li>
        </ul>

      </div>
    </div>
  );
}
