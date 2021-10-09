const App = () => {
  const [userChoice, setUserChoice] = useState(null)
  const [computerChoice, setComputerChoice] = useState(null)
  const choices = ['rock', 'paper', 'scissors']
  
  const handleClick = (value) => {
    setUserChoice(value)
    generatedComputerChoice()
  }

  const generatedComputerChoice = () => {
    const randomChoice = choices[Math.floor(Math.random()* choices.length)]
    setComputerChoice(randomChoice)
  }

  const checkResult = () = {
    switch(userChoice + computerChoice) {
      case 'scissorpaper':
      case 'rockscissors':
      case 'paperrock':
    }
  }
  return (
    <div>
      <h1>user choice is: {userChoice}</h1>
      <h1>computer choice is:</h1>
      {choices.map((choice,index) =>
      <button key={index} onClick={() => handleClick(choice)}>{choice}</button>)}
    </div>
  );
}

export default App;

