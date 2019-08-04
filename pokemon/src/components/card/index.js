import React, { Component } from 'react';
import { Container } from './styles';
import { Img, Label } from '../../styles/global'
import defaultImage from '../../assets/images/pokeball.png';

const urlSmallPokemon = process.env.REACT_APP_POKEMON_IMAGE_SMALL;

const errorMainImageDefault = e => {
    e.target.onerror = null;
    e.target.src = `${defaultImage}`;
}

class Card extends Component {
    render() {
        const { id, name } = this.props;
        const smallPicture = `${urlSmallPokemon}${id.toString().padStart(3, '0')}.png`
        return (
            <Container>
                <Img src={smallPicture} onError={errorMainImageDefault}/>
                <Label>{name}</Label>
                <Label>#{id}</Label>
            </Container>
        );
    }
}

export default Card;