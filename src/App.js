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
    console.log(sorted, 'SORTED');
    setItemList(sorted);
  }
  return (
    <div className='App'>
      <h1>Fridge-App</h1>
      <img src={logo} className='App-logo' alt='logo' />
      {/* <Logo /> */}
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
          min={todayMin}
          required />
        <input type='submit' value='Submit' id='submit' />
      </form>
      <ul className='List'>{
        itemList.map((item, index) => {
          // const expiryDate = `${item.date.getFullYear()}-0${item.date.getMonth() + 1}-${item.date.getDate()}`;
          const expiryDate = `${item.date.toISOString().replace(/T.*/, '').split('-').reverse().join('/')}`;
          const todayColor = new Date().getTime();
          const expiryDateColor = item.date.getTime();
          const days3InMillisecond = 2.592e+8;
          console.log(today, 'today');
          console.log(expiryDate, 'expiryDate');
          function getColor() {
            if (expiryDateColor - days3InMillisecond <= todayColor && expiryDateColor >= todayColor)
              // If not expired apply AlmostExpired
              return 'AlmostExpired';
            else if (expiryDateColor < todayColor)
              // If expires in 3 days apply ExpiredItem
              return 'ExpiredItem';
            else
              // Else use ‘ItemList’ class
              return 'ItemList';
          };
          console.log(expiryDateColor - days3InMillisecond, 'test');
          return (
            <div className={getColor()} id='list' key={index}>
              <li id={item.name}>
                {item.name} {expiryDate}
                <button onClick={() => deleteDate(item.date)} className='Button'>
                  <img src={bin} className='Bin-logo' alt='bin logo' />
                </button>
              </li>
            </div>
          );
        })
      }
        {itemList.length > 1 &&
          <button onClick={() => deleteAll()} className='RemoveAll'>Remove All Items</button>
        }
      </ul>
      {/* {itemList.length > 1 &&
        <button onClick={() => deleteAll()}>Remove All Items></button>
      } */}
    </div>
  );
}

export default App;


// function getColor() {
//   return expiryDateColor - days3InMillisecond > todayColor ?
//     'ItemList' :
//     expiryDateColor > todayColor ?
//       'AlmostExpired' :
//       'ExpiredItem'
// };
