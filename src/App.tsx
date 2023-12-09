import QuestionBox from './components/QuestionBox'

import './App.css'

function App() {

  return (
    <>
      <QuestionBox userName={"Um nome qualquer"} title={"Exatamente o que foi perguntado"} text={"Suponha-se que exista uma cidade com apenas um barbeiro, do sexo masculino. Nesta cidade, todos os homens se mantêm bem barbeados e eles fazem isso apenas de duas maneiras: Barbeando-se; Frequentando o barbeiro; Outra maneira de definir isso é: O barbeiro é um homem da cidade que faz a barba de todos aqueles, e somente dos homens da cidade que não barbeiam a si mesmos. Tudo isso parece perfeitamente lógico, até que se coloca a questão paradoxal: Quem barbeia o barbeiro?"}></QuestionBox>
    </>
  )
}

export default App
