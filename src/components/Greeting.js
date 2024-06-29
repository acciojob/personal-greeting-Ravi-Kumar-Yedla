import React,{useState} from 'react'

const Greeting = () => {

    const[name,setName] = useState('');
    const[greeting,setGreeting] = useState('');

    const handleInput = (event) =>{
    setName(event.target.value)
    };

    const submition = (e) =>{
         e.preventDefault();
         setGreeting(`Hello ${name}!`)

    }

  return (
    <div>
        <form onSubmit={submition}>
        <label>
           Enter your name:
      <input 
       type='text'
       value={name}
       onChange={handleInput}
      required
      />
      </label>
      </form>
      {greeting && <p>{greeting}</p>}
    </div>
  )
}

export default Greeting
