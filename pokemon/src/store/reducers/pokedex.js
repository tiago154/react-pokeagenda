const reducers = {
    TOGGLE_MODAL: action => ({ showModal: action.showModal }),
    UPDATE_OFFSET: action => ({ offSet: action.offSet }),
    UPDATE_LOADING: action => ({ loading: action.loading })
};

const INITIAL_STATE = {
    loading: false,
    showModal: false,
    offSet: 0,
    limit: 50
};

const pokedex = (state = INITIAL_STATE, action) => {
    const execution = reducers[action.type];
    return execution ? { ...state, ...execution(action) } : state;
}

export default pokedex;