import React from 'react'
import { Button } from '../../styles/global';
import { Container } from './styles';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as pokedexActions from '../../store/actions/pokedex';
import { toast, Zoom } from 'react-toastify';
import { getPokemon } from '../../services/pokemon-api';

const Search = ({ searchByName, updateLoading, updateSearch, updateSpecificPokemon }) => {
    const specificSearchByName = async name => {
        if (!name) return;

        await updateLoading(true);
        await updateSpecificPokemon({});

        const response = await getPokemon(name);

        if (response && response.id && response.id < 808) {
            await updateSpecificPokemon(response);
        } else {
            toastNotFound();
        }
        await updateLoading(false);
    };

    const toastNotFound = () => {
        toast('🦓 Pokemon Não Localizado', {
            position: "top-center",
            autoClose: 2000,
            transition: Zoom,
            pauseOnHover: false
        });

        updateSearch('');
    }

    const keyPressEnter = pokemonName => event => {
        event.key === 'Enter' && specificSearchByName(pokemonName);
    };

    const changeInputEvent = event => {
        const text = event.target.value.charAt(0).toUpperCase() + event.target.value.slice(1);

        updateSearch(text);

        if (!event.target.value)
            updateSpecificPokemon({});
    };

    return (
        <Container>
            <input
                type='text' id='search' spellCheck='false' value={searchByName}
                placeholder='Digite o nome ou número'
                onChange={changeInputEvent} onKeyPress={keyPressEnter(searchByName)}>
            </input>
            <Button onClick={() => specificSearchByName(searchByName)} />
        </Container>
    )
}

const mapStateToProps = state => ({
    searchByName: state.pokedex.searchByName
});

const mapDispatchToProps = dispatch => bindActionCreators(pokedexActions, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(Search);