import './App.css';
import { useState, useEffect } from 'react';


function App({library}) {
  const [emotion, setEmotion] = useState("happy");
    useEffect(() =>{
      console.log(`its ${emotion} right now`);
    }, [emotion]);


  return (
    <div className="App">
        <h1>current emotion is {emotion}</h1>
         <button onClick={() => setEmotion("sad")}>Sad</button>
         <button onClick={() => setEmotion("excited")}>excited</button>

    </div>
  );
}

export default App;
