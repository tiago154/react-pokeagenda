import React from 'react'
import { Label } from '../../styles';
import { Search } from './styles';

export default ({ value, onChange, onKeyPress, onSubmit }) => {
    return (
        <Search>
            <Label>Digite o nome ou número</Label>
            <div>
                <input
                    type='text' id='search' value={value}
                    onChange={onChange} onKeyPress={onKeyPress}>
                </input>
                <button onClick={onSubmit}>Buscar</button>
            </div>
        </Search>
    )
}
