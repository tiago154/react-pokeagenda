import React, { Component } from 'react';
import './pokemon-image.css';

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

        return (
            <div className='Container-pictures Border Flex Flex-column'>
                <img
                    className='Main-picture'
                    src={this.props.image}
                    alt={this.props.name}
                    title={this.props.name}
                    onError={errorMainImageDefault} />
                {spritesText()}
                <div className='Border Flex Flex-row Flex-center'>
                    <img
                        src={this.props.sprites.front}
                        alt={this.props.sprites.front}
                        title={this.props.sprites.front ? this.props.name : null} />
                    <img
                        src={this.props.sprites.frontShiny}
                        alt={this.props.sprites.frontShiny}
                        title={this.props.sprites.frontShiny ? this.props.name : null} />
                    <img
                        src={this.props.sprites.back}
                        alt={this.props.sprites.back}
                        title={this.props.sprites.back ? this.props.name : null} />
                    <img
                        src={this.props.sprites.backShiny}
                        alt={this.props.sprites.backShiny}
                        title={this.props.sprites.backShiny ? this.props.name : null} />
                </div>
            </div>
        )
    }
}

export default PokemonList;
