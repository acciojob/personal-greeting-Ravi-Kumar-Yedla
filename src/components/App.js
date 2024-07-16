
// import React,{useState} from "react";
// import './../styles/App.css';

// const App = () => {
//   const[name,setName] = useState('');

//   const handleChange =(event)=>{
//      setName(event.target.value);
//   };

//   return (
//     <div>
//       <p>Enter Your name:</p>
//   <input 
//     type="text"
//     value={name}
//     onChange={handleChange}
//   />

//   {name && <p>Hello {name}!</p>}
//     </div>
//   )
// }

// export default App




import React, { useState } from "react";
import "./../styles/App.css";
const App = () => {
  const [text, setText] = useState("");
  // var text = "ram";
  const handleChange = (e) => {
    console.log("Hello " + e.target.value + "!");
    if (e.target.value === "") {
      setText("");
      return;
    }
    setText("Hello " + e.target.value + "!");
  };
  return (
    <div>
      <input onChange={handleChange}></input>
      <p>{text}</p>
    </div>
  );
};
export default App;