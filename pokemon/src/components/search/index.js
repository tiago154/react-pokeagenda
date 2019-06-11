import React from 'react'
import './search.css'

function SearchInput({ value, onChange, onKeyPress, onSubmit }) {
    return (
        <div className='search'>
            <label>Busca por nome ou por número</label>
            <br />
            <div className='input-group'>
                <input
                    type='text' id='search' value={value} onChange={onChange}
                    onKeyPress={onKeyPress}
                >
                </input>
                <button onClick={onSubmit}>Buscar</button>
            </div>
        </div>
    )
}


export default SearchInput

