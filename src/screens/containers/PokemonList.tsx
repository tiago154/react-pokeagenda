import { connect } from 'react-redux'
import PokemonList from '../components/PokemonList'
import { State } from '../../store'
import { ThunkDispatch } from 'redux-thunk'
import { nextPage, previousPage, selectPokemon } from '../../actions'
import { PokemonActionsTypes, PokemonState } from '../../reducers/pokemon'
import { Pokemon } from '../../types/pokemon'
import { VIEWING_LIMIT } from '../../constant'

const takeCurrentPageList = ({ pokemons, offSet }: PokemonState): Pokemon[] => {
  if (offSet >= 0) { return pokemons.slice(offSet, offSet + VIEWING_LIMIT) }
  return pokemons
}

const mapStateToProps = ({ pokemon, loading }: State) => ({
  pokemons: takeCurrentPageList(pokemon),
  inProgress: loading.inProgress
})

const mapDispatchToProps = (dispatch: ThunkDispatch<State, {}, PokemonActionsTypes>) => ({
  onNext: () => dispatch(nextPage),
  onPrevious: () => dispatch(previousPage),
  onSelectPokemon: (pokemon: Pokemon) => dispatch(selectPokemon(pokemon))
})

export default connect(mapStateToProps, mapDispatchToProps)(PokemonList)
