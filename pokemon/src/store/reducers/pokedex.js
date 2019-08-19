import { fillPokemon, withImage } from '../../helpers/pokemon';

const reducers = {
    TOGGLE_MODAL: action => ({ showModal: action.showModal }),
    UPDATE_OFFSET: action => ({ offSet: action.offSet }),
    UPDATE_LOADING: action => ({ loading: action.loading }),
    UPDATE_SEARCH: action => ({ searchByName: action.text }),
    UPDATE_SPECIFIC_POKEMON: action => ({ specificPokemon: action.pokemon }),
    UPDATE_LIST_POKEMON: action => ({
        pokemons: action.listPokemon.length && action.listPokemon
            .filter(withImage)
            .map(fillPokemon)
    }),
    UPDATE_MODAL_POKEMON: action => ({
        pokemonModal: {
            data: action.data,
            evolutions: action.evolutions,
            description: action.description,
            abilities: action.abilities,
            category: action.category
        }
    })
};

const INITIAL_STATE = {
    loading: false,
    showModal: false,
    offSet: 0,
    limit: 50,
    searchByName: '',
    specificPokemon: {},
    pokemons: [],
    pokemonModal: {
        data: {},
        evolutions: {},
        description: '',
        abilities: []
    }
};

const pokedex = (state = INITIAL_STATE, action) => {
    const execution = reducers[action.type];
    return execution ? { ...state, ...execution(action) } : state;
}

export default pokedex;