import React, { Component } from 'react';
import { Container } from './styles';
import { Img, Label } from '../../styles/global'
import defaultImage from '../../assets/images/default-pokemon.png';
import { getAnyUrl } from '../../services/pokemon-api';

const urlSmallPokemon = process.env.REACT_APP_POKEMON_IMAGE_SMALL;

const errorMainImageDefault = e => {
    e.target.onerror = null;
    e.target.src = `${defaultImage}`;
}

class Card extends Component {
    render() {
        const { pokemon, toggleModal, updateSpecificPokemon } = this.props;

        const loadSpecificPokemon = async (pokemon) => {
            if (pokemon.url) { //@TODO Colocar um loading aqui
                const response = await getAnyUrl(pokemon.url);
                await updateSpecificPokemon(response);
            };

            toggleModal();
        }

        const smallPicture = `${urlSmallPokemon}${pokemon.id.toString().padStart(3, '0')}.png`
        return (
            <Container onClick={() => loadSpecificPokemon(pokemon)}>
                <Img src={smallPicture} onError={errorMainImageDefault} />
                <Label>{pokemon.name}</Label>
                <Label>#{pokemon.id}</Label>
            </Container>
        );
    }
}

export default Card;