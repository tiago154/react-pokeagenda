import { connect } from 'react-redux'
import MainSplash from '../components/MainSplash'
import { State } from '../../../store'

const mapStateToProps = ({ pokemon: { pokemons }, loading: { inProgress } }: State) => ({
  pokemons,
  inProgress
})

export default connect(mapStateToProps)(MainSplash)
