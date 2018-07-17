import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

import SearchBar from 'containers/SearchBar'
import WeatherList from 'containers/WeatherList'

class App extends Component {
  render() {
    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="title" color="inherit">
              Weather App
            </Typography>
          </Toolbar>
        </AppBar>
        <SearchBar />
        <WeatherList />
      </div>
    )
  }
}

export default App