import React, { Component } from 'react';
import { Container } from './styles';
import { Img, Label } from '../../styles/global'

const urlSmallPokemon = process.env.REACT_APP_POKEMON_IMAGE_SMALL;

class Card extends Component {
    render() {
        const { id, name } = this.props;
        const smallPicture = `${urlSmallPokemon}${id.toString().padStart(3, '0')}.png`
        return (
            <Container>
                <Img src={smallPicture} />
                <Label>{name}</Label>
            </Container>
        );
    }
}

export default Card;