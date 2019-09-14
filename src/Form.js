import React from 'react';

export default function Form(props) {
    return (
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
                required />
            <input type='submit' value='Submit' id='submit' />
        </form>
    );
}