import React, { useState } from 'react';
import bin from '../img/bin.svg';

function Form() {
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
        <>
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
                itemList.map((item, index) => {
                    const expiryDate = `${item.date.toISOString().replace(/T.*/, '').split('-').reverse().join('/')}`;
                    const todayColor = new Date().getTime();
                    const expiryDateColor = item.date.getTime();
                    const days2InMillisecond = 1.728e+8;
                    function getColor() {
                        return expiryDateColor - days2InMillisecond > todayColor ?
                            'ItemList' :
                            expiryDateColor > todayColor ?
                                `${'AlmostExpired'} ${alert(`${item.name} is about to expire`)}` :
                                `${'ExpiredItem'} ${alert(`${item.name} expired`)}`
                                
                    };
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
        </>
    );
}
export default Form;