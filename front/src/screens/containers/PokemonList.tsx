import { connect } from 'react-redux'
import PokemonList from '../components/PokemonList'
import { State } from '../../store'

const mapStateToProps = ({ pokemon: { pokemons } }: State) => ({
    pokemons
})

// TODO arrumar tipagem
const mapDispatchToProps = (dispatch: any) => ({
    onNext: () => console.log('Next'),
    onPrevious: () => console.log('Previous')
})


export default connect(mapStateToProps, mapDispatchToProps)(PokemonList)