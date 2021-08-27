import React from 'react'
import { Route, HashRouter  } from 'react-router-dom'
import Home from '../home'

const App = () => (
  <HashRouter basename='/'>
    <main>
      <Route exact path="/" component={Home} />
    </main>
  </HashRouter>
)

export default App
