import React from 'react';
import { Container, TypePokemon } from './styles';
import { orderBy } from '../../helpers/pokemon';

export default ({ types }) => {
    const fillTypes = type =>
        (<TypePokemon key={type.name} background={type.name}>{type.name}</TypePokemon>)

    return (
        <Container>
            {types.length && types.sort(orderBy('slot')).map(fillTypes)}
        </Container>
    )
}