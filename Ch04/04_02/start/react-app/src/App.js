import './App.css';
import { useState, useEffect } from 'react';


function App({library}) {
  const [emotion, setEmotion] = useState("happy");
  const [secondary, setSecondary] = useState("Tired");

    useEffect(() =>{
      console.log(`its ${emotion} around here!`);
    }, [emotion]);


    useEffect(() => {
      console.log(`its ${secondary} around here!`);
    })

  return (
    <div className="App">
        <h1>current emotion is {emotion}</h1>
         <button onClick={() => setEmotion("sad")}>Sad</button>
         <button onClick={() => setEmotion("excited")}>excited</button>
         <h2>Current secondary emotion is {secondary}.</h2>
         <button onClick={() => setSecondary("Grateful")}>Grateful</button>

    </div>
  );
}

export default App;
