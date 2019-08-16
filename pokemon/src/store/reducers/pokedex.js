const reducers = {
    TOGGLE_MODAL: (state, action) => ({ ...state, showModal: action.value })
};

const INITIAL_STATE = {
    showModal: false
};

const pokedex = (state = INITIAL_STATE, action) => {
    const execution = reducers[action.type];
    return execution ? execution(state, action) : state;
}

export default pokedex;