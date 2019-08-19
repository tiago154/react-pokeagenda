export const toggleModal = showModal => ({
    type: 'TOGGLE_MODAL',
    showModal
});

export const updateOffSet = offSet => ({
    type: 'UPDATE_OFFSET',
    offSet
});

export const updateLoading = loading => ({
    type: 'UPDATE_LOADING',
    loading
});

export const updateSearch = text => ({
    type: 'UPDATE_SEARCH',
    text
});

export const updateSpecificPokemon = pokemon => ({
    type: 'UPDATE_SPECIFIC_POKEMON',
    pokemon
});

export const updateListPokemon = listPokemon => ({
    type: 'UPDATE_LIST_POKEMON',
    listPokemon
});

export const updateModalPokemon = (data, evolutions = {}, description = '', abilities = {}, category = '') => ({
    type: 'UPDATE_MODAL_POKEMON',
    data,
    evolutions,
    description,
    abilities,
    category
});