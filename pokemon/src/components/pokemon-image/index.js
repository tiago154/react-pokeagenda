import React, { Component } from 'react';
import TextCenter from '../text-center';
import SpritePokemon from '../pokemon-sprite';
import defaultImage from '../../assets/images/pokeball.png';

const urlPokeImage = process.env.REACT_APP_POKEMON_IMAGE;


const errorMainImageDefault = e => {
    e.target.onerror = null;
    e.target.src = `${defaultImage}`;
}

class PokemonImage extends Component {
    render() {
        const mainPicture = `${urlPokeImage}${this.props.id.toString().padStart(3, '0')}.png`
        return (
            <div className=''>
                <img
                    src={mainPicture}
                    alt={this.props.name}
                    title={this.props.name}
                    onError={errorMainImageDefault}
                    />
                <TextCenter textValidation={this.props.sprites.front} textName={this.props.name} />
                <div className=''>
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
