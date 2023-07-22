// import React from 'react'

// class components (existem, mas não são mais utilizadas.)

// function components  sintaxe PADRÃO
// essa função pode ser chamada quantas vezes quiser no arquivo exportado App.jsx

function Card() {
  return (    
      <h1>Componente Card</h1>    
  )
}

// explicação do prof do pq ñ gosta de usar dessa forma: 
// quando for usar hooks aqui dentro ele ñ entende esse 
// modelo como uma função 
// const Card = () => {
//   return (    
//       <h1>Componente Card</h1>    
//   )
// }


//diz que é o padrão, mas poderia tirar esse default e colocar como abaixo:
export default Card

//dessa forma tem uma diferença na importação
// export { Card, Card2 }

// porem melhor usar o default para nao criar confusão e mudar toda hora