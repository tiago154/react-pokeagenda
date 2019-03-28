import React, { Component } from 'react';

class PokemonInformation extends Component {
    render() {
        return (
            <div>
                <p>{this.props.weight}</p>
                <img src={this.props.sprites.back} alt={this.props.sprites.back} />
                <img src={this.props.sprites.front} alt={this.props.sprites.front} />
                <img src={this.props.sprites.frontShiny} alt={this.props.sprites.frontShiny} />
                <img src={this.props.sprites.backShiny} alt={this.props.sprites.backShiny} />
            </div>
        );
    }
}

export default PokemonInformation;