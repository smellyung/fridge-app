import React, { useState } from 'react';
import logo from './fridge-open.svg';
import bin from './bin.svg';
import './App.css';

function App() {
  const [itemList, setItemList] = useState([]);
  const today = new Date().toISOString().split('T')[0];
  function deleteDate(date) {
    setItemList(itemList.filter(item => item.date !== date));
  }
  function deleteAll() {
    setItemList([]);
  }
  function addItem(e) {
    e.preventDefault();
    let name = e.target.children[1].value;
    let date = new Date(e.target.children[3].value);
    let toAdd = { name, date };
    // sort by expiry date rather than name

    let sorted = [...itemList, toAdd].sort((a, b) => a.date - b.date);
    console.log(sorted)
    setItemList(sorted);
  }
  return (
    <div className='App'>
      <h1>Fridge App!!</h1>
      <img src={logo} className='App-logo' alt='logo' />
      <form onSubmit={(e) => addItem(e)} className='Form'>
        <label>Item</ label>
        <input type='text'
          placeholder='Enter your item name'
          id='name'
          required />
        <label>Expiry Date</ label>
        <input type='date'
          placeholder='Enter your items expiry date'
          id='expiry'
          min={today}
          required />
        <input type='submit' value='Submit' id='submit' />
      </form>
      <ul className='List'>{
        itemList.map(item => {
          return (
            <div className='ItemList'>
              <li key={item.name} id={item.name}> {item.name} {item.date.getDate()}/{item.date.getMonth() + 1}/{item.date.getFullYear()}</li>
              <button onClick={() => deleteDate(item.date)} className='Button'><img src={bin} className='Bin-logo' alt='bin logo' /></button>
            </div>
          );
        })
      }</ul>
      {itemList.length > 0 &&
        <button onClick={() => deleteAll()}>Remove All Items></button>
      }
    </div>
  );
}
export default App;
