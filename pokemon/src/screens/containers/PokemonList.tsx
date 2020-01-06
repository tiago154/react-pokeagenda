import { connect } from 'react-redux'
import PokemonList from '../components/PokemonList'
import { State } from '../../store'

const mapStateToProps = ({ pokemon: { pokemons } }: State) => ({
    pokemons
})

const mapDispatch = {
    onAdd: () => ({
        type: 'ADD_POKEMON',
        payload: {
            name: 'Charmander'
        }
    })
}

export default connect(mapStateToProps, mapDispatch)(PokemonList)