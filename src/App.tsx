import React from 'react'

import MainPage from './screens/main-page/containers/MainSplash'
import GlobalStyles from './GlobalStyles'

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <MainPage />
    </>
  )
}

export default App
