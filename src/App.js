import React, { useState } from "react";
// import logo from './logo.svg';
import "./App.css";
import products from "./itemslist";
function App() {
  const [itemList, setItemList] = useState(products);

  function deleteItem(remove) {
    setItemList(itemList.filter(item => item.name !== remove));
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
    let sorted = [...itemList, toAdd].sort((a, b) =>
      b.name.localeCompare(a.name)
    );
    console.log(sorted);
    setItemList(sorted);
  }

  return (
    <div className="App">
      <h1>Fridge App!!</h1>
      <form onSubmit={e => addItem(e)}>
        <label>Name</label>
        <input
          type="text"
          placeholder="Enter your item name"
          id="name"
          required
        />
        <label>Expiry Date</label>
        <input
          type="date"
          placeholder="Enter your items expiry date"
          id="expiry"
          required
        />
        <input type="submit" value="Submit" />
      </form>

      <ul className="listItem">
        {itemList.map(item => {
          return (
            <div>
              <li id={item.name}> {item.name} </li>
              <button onClick={() => deleteItem(item.name)}>X</button>
            </div>
          );
        })}
      </ul>
      {itemList.length > 0 && (
        <button onClick={() => deleteAll()}>Remove All Items></button>
      )}
    </div>
  );
}

export default App;
