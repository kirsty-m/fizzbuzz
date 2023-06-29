
import './App.css';
import React, {useState, useEffect} from 'react';

function App() {

  const [number, setNumber, ] = useState(0);
  const [fizz, setFizz] = useState(0);

  

  useEffect( () => {
    if (number % 3 === 0 && number % 5 === 0) {
      setFizz("fizzbuzz")
    } else if (number % 3 === 0) {
      setFizz("fizz")
    } else if (number % 5 === 0) {
      setFizz("buzz")
    } else {
      setFizz(number);

    } 
  });

  const handleInc = () => {
    setNumber(number + 1);

  };

  const handleDec = () => {
    setNumber(number - 1);

  };



  return (
    <>
    <div class='box'>
    <h1>FizzBuzz</h1>
    <button value={number} onClick={handleInc}> + </button>
    <button value={number} onClick={handleDec}> - </button>

    <h2>Number is {fizz}</h2>
    </div>
    </>
  );
}

export default App;
