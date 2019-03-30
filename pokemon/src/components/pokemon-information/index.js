import React, { Component } from 'react';

class PokemonInformation extends Component {
    render() {
        return (
            <div>
                <p>{this.props.weight}</p>
            </div>
        );
    }
}

export default PokemonInformation;