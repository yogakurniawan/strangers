import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from 'actions/strangers'
import Strangers from 'containers/Strangers'

class App extends Component {
  componentDidMount() {
    setTimeout(() => this.props.fetchStrangers(), 1000);
  }

  render() {
    return (
      <React.Fragment>
        <Strangers />
      </React.Fragment>
    )
  }
}

const mapDispatchToProps = {
  fetchStrangers: actions.fetchStrangers
}

export default connect(
  null,
  mapDispatchToProps
)(App)