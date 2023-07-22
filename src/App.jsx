// Nessa aula vamos aprender a trabalhar com mais de um arquivo que é o mais normal aqui com react, antes faremos um exercício básico para fixar o entendimento da aula anterior!

import './App.css'
import Card from "./components/Card.jsx"

// O react ja trata essa function como um componente 
function App() {
  //BLOCO SUPERIOR 
  // const titulo = "Meu título"  
  
  const usuario = {
    nome: "João",
   curso: "Clamed V2"
  }

  
  // tudo que fica dentro dos parênteses do return é JSX, 
  // ou seja, podemos usar HTML junto com Javascript
  return (
    <div>
      <h1 className='fundo-vermelho'>Nome: {usuario.nome}</h1>
      <h2>Turma: {usuario.curso}</h2>
      {/* essa tag é uma função do arquivo Card.jsx */}
      <Card />
      <Card />
    </div>
  )
}

export default App
