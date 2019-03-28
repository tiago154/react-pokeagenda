import React, { Component } from 'react';
import './pokemon-image.css';

class PokemonList extends Component {
    render() {
        const errorImageDefault = e => {
            e.target.onerror = null;
            e.target.src = process.env.DEFAULT_IMAGE;
        }

        return (
            <img
                className='Image'
                src={this.props.image}
                alt={this.props.name}
                title={this.props.name}
                onError={errorImageDefault} />
        )
    }
}

export default PokemonList;
