import { useState } from 'react';

import Header from './Components/Header.jsx';
import UserInput from './Components/UserInput.jsx';
import Results from './Components/Results.jsx';

function App() {

  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
  });

  const inputIsValid = userInput.duration > 0;

  function handleChange(inputId, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputId]: +newValue
      };
    });
  }

  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChange={handleChange} />
      {!inputIsValid && <p className="center">Please enter a duration greater than zero!</p>}
      {inputIsValid && <Results input={userInput} />}
    </>
  )
}

export default App