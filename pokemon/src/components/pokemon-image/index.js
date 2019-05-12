import React, { Component } from 'react';
import TextCenter from '../text-center';
import SpritePokemon from '../pokemon-sprite';
import './pokemon-image.css';

const urlPokeImage = process.env.REACT_APP_POKEMON_IMAGE;

const errorMainImageDefault = e => {
    e.target.onerror = null;
    e.target.src = process.env.REACT_APP_DEFAULT_IMAGE;
}

class PokemonImage extends Component {
    render() {
        const mainPicture = `${urlPokeImage}${this.props.id.toString().padStart(3, '0')}.png`
        return (
            <div className='Container-pictures Border Flex Flex-column'>
                <img
                    className={this.props.name === 'Unknown' ? 'Main-picture-error' : 'Main-picture'}
                    src={mainPicture}
                    alt={this.props.name}
                    title={this.props.name}
                    onError={errorMainImageDefault}
                    />
                <TextCenter textValidation={this.props.sprites.front} textName={this.props.name} />
                <div className='Border Flex Flex-row Flex-center'>
                    <SpritePokemon url={this.props.sprites.front} title='Front' />
                    <SpritePokemon url={this.props.sprites.frontShiny} title='Front Shiny' />
                    <SpritePokemon url={this.props.sprites.back} title='Back' />
                    <SpritePokemon url={this.props.sprites.backShiny} title='Back Shiny' />
                </div>
            </div>
        )
    }
}

export default PokemonImage;
