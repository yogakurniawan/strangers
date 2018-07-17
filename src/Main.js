import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Weather from 'containers/Weather'

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Weather} />
    </Switch>
  </main>
)

export default Main
