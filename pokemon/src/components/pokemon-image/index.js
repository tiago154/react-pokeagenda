import React, { Component } from 'react';
import './pokemon-image.css';

const urlPokeImage = process.env.REACT_APP_POKEMON_IMAGE;

class PokemonList extends Component {
    render() {
        const errorMainImageDefault = e => {
            e.target.onerror = null;
            e.target.src = process.env.REACT_APP_DEFAULT_IMAGE;
        }

        const spritesText = () => {
            if (this.props.sprites.front) {
                return (
                    <p className='Text-center'>Sprites {`${this.props.name}`}</p>
                );
            }
        }

        const mainPicture = `${urlPokeImage}${this.props.id.toString().padStart(3, '0')}.png`

        return (
            <div className='Container-pictures Border Flex Flex-column'>
                <img
                    className={this.props.name === 'Unknown' ? 'Main-picture-error' : 'Main-picture'}
                    src={mainPicture}
                    alt={this.props.name}
                    title={this.props.name}
                    onError={errorMainImageDefault} />
                {spritesText()}
                <div className='Border Flex Flex-row Flex-center'>
                    <img
                        src={this.props.sprites.front}
                        alt={this.props.sprites.front}
                        title={this.props.sprites.front ? 'Front' : null} />
                    <img
                        src={this.props.sprites.frontShiny}
                        alt={this.props.sprites.frontShiny}
                        title={this.props.sprites.frontShiny ? 'Front Shiny' : null} />
                    <img
                        src={this.props.sprites.back}
                        alt={this.props.sprites.back}
                        title={this.props.sprites.back ? 'Back' : null} />
                    <img
                        src={this.props.sprites.backShiny}
                        alt={this.props.sprites.backShiny}
                        title={this.props.sprites.backShiny ? 'Back Shiny' : null} />
                </div>
            </div>
        )
    }
}

export default PokemonList;
