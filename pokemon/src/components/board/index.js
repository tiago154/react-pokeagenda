import React, { Component } from 'react';
import { Container } from './styles';
import Card from '../card';
import { paginatePokemon } from '../../services/pokemon-api';

class Board extends Component {
    state = {
        pokemons: [],
        limit: 0,
        offSet: 0
    };

    loadList = async (limit = 112, offSet = 0) => {
        const list = await paginatePokemon(limit, offSet);

        if (list.results.length) {
            this.setState({
                pokemons: list.results.map(item => {
                    const id = item.url.split('pokemon/')[1].replace('/', '');
                    return {
                        id,
                        name: item.name,
                        url: item.url
                    }
                })
            });
        }
    }

    componentDidMount() {
        this.loadList();
    }

    render() {
        const { pokemons } = this.state;


        const fillPokemon = pokemon => (
            <Card key={pokemon.id} id={pokemon.id} name={pokemon.name} />
        )

        return (
            <Container>
                {!!pokemons && pokemons.map(fillPokemon)}
            </Container>
        );
    }
}

export default Board;