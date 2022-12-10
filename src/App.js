import { useEffect, useState } from 'react';
import './App.css';

function App() {
useEffect(()=>{
  newTip();
  },[]);

  const[tip, setTip]=useState('');
  const newTip = async ()=>{
    const responce = await fetch ("https://www.boredapi.com/api/activity/");
    const data = await responce.json();
    setTip(data.activity);
}
  return (
    <div className="App">
      <div>
        <h2>If you are bored</h2>
        <p>{tip}</p>
        <button onClick={newTip}>New Tip</button>
      </div>
    </div>
  );
}
export default App;
