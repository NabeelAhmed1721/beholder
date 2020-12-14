import React, {useState} from 'react';
import './App.css';
import {parser} from "nnl";

  

function App (){
  const [value, setValue] = useState('');

  function HandleSubmit (e) {
    e.preventDefault();
    console.log("submitted");
    console.log(parser(value));
  }

  return (
    <div className = "app-container">
      <h1 className = "heading">Beholder</h1>
      <form onSubmit = {HandleSubmit}>
          <div className = "form-container">
            <input type = "text"
              value = {value}
              className = "input"
              onChange={e => setValue(e.target.value)}/>
          </div>    
        </form>
     
    </div>

  )

}

export default App;