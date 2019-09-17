import React, { useState } from 'react';
import bin from '../img/bin.svg';
import { addItem, deleteAll, deleteDate } from './formFunctions';

function Form() {
    const [itemList, setItemList] = useState([]);
    const today = new Date().toISOString().split('T')[0];

    return (
        <>
            <form onSubmit={(e) => addItem(e, itemList, setItemList)} className='Form'>
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
                    console.log(today, 'today');
                    console.log(expiryDate, 'expiryDate');
                    function getColor() {
                        return expiryDateColor - days2InMillisecond > todayColor ?
                            'ItemList' :
                            expiryDateColor > todayColor ?
                                'AlmostExpired' :
                                'ExpiredItem'
                    };
                    return (
                        <div className={getColor()} id='list' key={index}>
                            <li id={item.name}>
                                {item.name} {expiryDate}
                                <button onClick={() => deleteDate(item.date, itemList, setItemList)} className='Button'>
                                    <img src={bin} className='Bin-logo' alt='bin logo' />
                                </button>
                            </li>
                        </div>
                    );
                })
            }
                {itemList.length > 1 &&
                    <button onClick={() => deleteAll(setItemList)} className='RemoveAll'>Remove All Items</button>
                }
            </ul>
        </>
    );
}
export default Form;