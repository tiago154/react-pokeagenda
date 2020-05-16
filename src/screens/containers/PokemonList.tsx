import { connect } from 'react-redux'
import PokemonList from '../components/PokemonList'
import { State } from '../../store'
import { ThunkDispatch } from 'redux-thunk'
import { nextPage, previousPage } from '../../actions'
import { PokemonActionsTypes } from '../../reducers/pokemon'

const mapStateToProps = ({ pokemon: { pokemons } }: State) => ({
    pokemons
})

const mapDispatchToProps = (dispatch: ThunkDispatch<State, {}, PokemonActionsTypes>) => ({
    onNext: () => dispatch(nextPage),
    onPrevious: () => dispatch(previousPage)
})


export default connect(mapStateToProps, mapDispatchToProps)(PokemonList)