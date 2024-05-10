import React, { useState } from 'react';
import './App.css';
import './Search.css';
function Search({ onSearch }) {
    const [source, setSource] = useState('');
    const [destination, setDestination] = useState('');

    const handleSearchClick = () => {
        onSearch(source, destination);
    };

    return (
        <>
            <div className="search-container">
                <div className="search-inputs">
                    <label htmlFor="source"></label>
                    <input type="text" id="source" name="source" />
                    <label htmlFor="destination"></label>
                    <input type="text" id="destination" name="destination" />
                    <label htmlFor="date"></label>
                    <input type="date" id="date" name="date" />
                    <label htmlFor="dayMinus"></label>
                    <select id="dayMinus" name="dayMinus">
                        <option value="" disabled selected>Day -</option>
                        <option>1</option>
                        <option>2</option>
                    </select>
                    <label htmlFor="dayPlus"></label>
                    <select id="dayPlus" name="dayPlus">
                        <option value="" disabled selected>Day +</option>
                        <option>1</option>
                        <option>2</option>
                    </select>
                    <label htmlFor="anytime"></label>
                    <select id="anytime" name="anytime">
                        <option value="" disabled selected>Anytime</option>
                        <option></option>
                    </select> +
                    <label htmlFor="adt"></label>
                    <select id="adt" name="adt">
                        <option value="" disabled selected>ADT</option>
                        <option></option>
                    </select>
                    <label htmlFor="passengerNo"></label>
                   <select id="passengerNo" name="passengerNo">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                    </select>
                    <button className="button" onClick={handleSearchClick}>Search</button>
                </div>
            </div>
            <hr style={{ backgroundColor: '#0c1b4d' }} />
        </>
    );
}

export default Search;
