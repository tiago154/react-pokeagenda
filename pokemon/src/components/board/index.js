import React, { Component } from 'react';
import { ButtonContainer, CardContainer, Container } from './styles';
import Card from '../card';
import loader from '../../assets/images/charizard-loader.gif';
import { Img, Button } from '../../styles/global';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as pokedexActions from '../../store/actions/pokedex';
import { paginatePokemon } from '../../services/pokemon-api';


class Board extends Component {

    loadList = async (forward = false) => {
        const lessLimit = (this.props.pokemons.length < this.props.limit);

        const updatedOffSet = this.calculateOffSet(this.props.offSet, this.props.limit, forward, lessLimit);

        await this.props.updateOffSet(updatedOffSet);

        if (this.props.pokemons.length === 0 || (forward && !lessLimit) || !forward) {
            await this.props.updateLoading(true);

            const list = await paginatePokemon(this.props.limit, this.props.offSet);

            if (list.results && list.results.length)
                this.props.updateListPokemon(list.results);
        }

        await this.props.updateLoading(false);
    };

    calculateOffSet = (offSet, limit, forward, lessLimit) => {
        if (offSet === 0 && !forward) return offSet;
        if (lessLimit && forward) return offSet;
        return forward ? (offSet + limit) : (offSet - limit);
    };

    componentDidMount() {
        this.loadList();
    }

    render() {
        const { pokemons, loading, pokemon } = this.props;

        const fillPokemon = pokemon =>
            (<Card
                key={pokemon.id}
                pokemon={pokemon}
            />);

        const renderList = pokemons => !loading && pokemons && pokemons.map(fillPokemon);

        const renderPokemon = pokemon =>
            !loading && pokemon && pokemon.id &&
            <Card
                key={pokemon.id}
                pokemon={pokemon}
            />;

        const changePage = async forward => await this.loadList(forward);

        const renderButtonPaginate = pokemon => {
            if (loading || (pokemon && pokemon.id))
                return;

            return (
                <ButtonContainer>
                    <Button onClick={() => changePage(false)}>{'<'} Anterior</Button>
                    <Button onClick={() => changePage(true)}>Próxima {'>'}</Button>
                </ButtonContainer>
            );
        }

        return (
            <Container>
                <CardContainer>
                    {loading && (<Img src={loader} alt={'Loading'} size={100} />)}
                    {pokemon && pokemon.id ? renderPokemon(pokemon) : renderList(pokemons)}
                </CardContainer>
                {renderButtonPaginate(pokemon)}
            </Container>
        );
    }
}

const mapStateToProps = state => ({
    loading: state.pokedex.loading,
    offSet: state.pokedex.offSet,
    limit: state.pokedex.limit,
    pokemon: state.pokedex.specificPokemon,
    pokemons: state.pokedex.pokemons
});

const mapDispatchToProps = dispatch => bindActionCreators(pokedexActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Board);