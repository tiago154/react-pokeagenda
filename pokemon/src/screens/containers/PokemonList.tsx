import { connect } from 'react-redux'
import PokemonList from '../components/PokemonList'
import { State } from '../../store'

const mapStateToProps = ({ pokemon: { pokemons } }: State) => ({
    pokemons
})


export default connect(mapStateToProps)(PokemonList)