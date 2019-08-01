import React from 'react'
import { Button } from '../../styles/global';
import { Container } from './styles';

export default ({ value, onChange, onKeyPress, onSubmit }) => {
    return (
        <Container>
            <input
                type='text' id='search' spellCheck='false' value={value}
                placeholder='Digite o nome ou número'
                onChange={onChange} onKeyPress={onKeyPress}>
            </input>
            <Button onClick={onSubmit} />
        </Container>
    )
}
