
import React,{useState} from "react";
import './../styles/App.css';

const App = () => {
  const[name,setName] = useState('');

  const handleChange =(event)=>{
     setName(event.target.value);
  };

  return (
    <div>
      <p>Enter Your name:</p>
  <input 
    type="text"
    value={name}
    onChange={handleChange}
  />

  {name && <p>Hello {name}!</p>}
    </div>
  )
}

export default App
