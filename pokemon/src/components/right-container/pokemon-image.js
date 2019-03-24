import React, { Component } from 'react';
import './pokemon-image.css';

class PokemonList extends Component {
    render() {
        return (
            <div className=''>
                <img
                    className='Image-pokemon'
                    src={this.props.image}
                    alt={this.props.name}
                    title={this.props.name}
                    onError={(e) => { e.target.onerror = null; e.target.src = "http://img.ibxk.com.br/ns/quizpop/2015/03/10/10175754730000.png" }} />
            </div>
        )
    }
}

export default PokemonList;
