import React, { useState } from 'react';
import logo from './fridge-open.svg';
import bin from './bin.svg';
import './App.css';
import products from './ItemsList';

function App() {
  const [itemList, setItemList] = useState(products);
  const todayMin = new Date().toISOString().split('T')[0];
  const today = new Date().toISOString().replace(/T.*/, '').split('-').reverse().join('/');
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
      <h1>Fridge-App</h1>
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
          min={todayMin}
          required />
        <input type='submit' value='Submit' id='submit' />
      </form>
      <ul className='List'>{
        itemList.map(item => {
          // const expiryDate = `${item.date.getFullYear()}-0${item.date.getMonth() + 1}-${item.date.getDate()}`;
          const expiryDate = `${item.date.toISOString().replace(/T.*/, '').split('-').reverse().join('/')}`;
          const todayColor = new Date().getTime();
          const expiryDateColor = item.date.getTime();

          console.log(today, 'today');
          console.log(expiryDate, 'expiryDate');
          function getColor() {
            if (expiryDateColor - 2.592e+8 <= todayColor && expiryDateColor >= todayColor)
              // If not expired apply AlmostExpired
              return 'AlmostExpired';
            else if (expiryDateColor < todayColor)
              // If expires in 3 days apply ExpiredItem
              return 'ExpiredItem';
            else
              // Else use ‘ItemList’ class
              return 'ItemList';
          };
          console.log(expiryDateColor - 2.592e+8, 'test');
          return (
            <div className={getColor()} key={item.name}>
              <li id={item.name}> {item.name} {expiryDate}</li>
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


// function getColor() {
//   return expiryDate2 <= today2  + 2.592e+8 && expiryDate2 >= today2 ? 'AlmostExpired' : expiryDate2 < today2 ? 'ExpiredItem' : 'ItemList'
// };

// return (
//   <div className={getColor(expiryDate)}>
//     <li key={item.name} id={item.name}> {item.name} {expiryDate}</li>
//     <button onClick={() => deleteDate(item.date)} className='Button'><img src={bin} className='Bin-logo' alt='bin logo' /></button>
//   </div>
// );
