import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  let items = [products];
  let sorted = items.sort((a,b) => a.expireydate -b.expireydate);
  return (
    <div className="App">
      <h1>Fridge App!!</h1>
      <ul className='listItem'>{  
        sorted.map(item => {
          return (
            <div>
              <li> {ItemName} </li>
              <button onClick={()=> deleteItem}>X</button>
            </div>
          );
        })
      }</ul> 
    </div>
  );
}

export default App;
