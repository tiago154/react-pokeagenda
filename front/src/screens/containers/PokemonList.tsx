import { connect } from 'react-redux'
import PokemonList from '../components/PokemonList'
import { State } from '../../store'
import { ThunkDispatch } from 'redux-thunk'
import { AnyAction } from 'redux'
import { nextPage, previousPage } from '../../actions'

const mapStateToProps = ({ pokemon: { pokemons } }: State) => ({
    pokemons
})

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, AnyAction>) => ({
    onNext: () => dispatch(nextPage()),
    onPrevious: () => dispatch(previousPage())
})


export default connect(mapStateToProps, mapDispatchToProps)(PokemonList)