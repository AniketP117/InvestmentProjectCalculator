import Header from "./components/Header.jsx";
import UserInput from "./components/UserInput.jsx";
import {useState} from 'react';
import Results from './components/Results.jsx'
function App()
{
  const [userInput, setUserInput] =   useState(
  {
       initialInvestment: 10000,
       annualInvestment: 2000,
        expectedReturn: 6,
       duration:10,
  });

  const inputIsValid = userInput.duration >= 1;

  function handleChange(inputIdentifier, newValue) 
  {
   setUserInput(prevUserInput => 
    {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue
      };
    });
  }

  return (
  <>
    <Header />
    <UserInput userInput={userInput} onChange={handleChange}/>
    {!inputIsValid && (
      <p className="center">Please enter valid duration.</p>
    )}
    {inputIsValid && <Results input={userInput}/>}
  </>
  )
}
export default App
