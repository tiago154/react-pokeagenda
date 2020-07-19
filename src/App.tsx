import React from 'react'

import PokemonList from './screens/containers/PokemonList'
import GlobalStyles from './GlobalStyles'

const App: React.FC = () => {
  return (
    <>
      <PokemonList />

      <GlobalStyles />
    </>
  )
}

export default App
