import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import CircularProgress from '@material-ui/core/CircularProgress'
import Navbar from 'components/Navbar'
import Card from 'components/Card'
import * as actions from 'actions/strangers'

const styles = {
  root: {
    flexGrow: 1
  },
  progress: {
    margin: '2em auto'
  }
}

export class Strangers extends Component {
  handleRefresh = () => {
    this.props.setEmpty()
    this.props.fetchStrangers()
  }

  render() {
    const { classes, strangers } = this.props
    return (
      <div className={classes.root}>
        <Navbar onRefresh={this.handleRefresh} />
        <Grid container spacing={0}>
          {
            strangers.length === 0 && <CircularProgress className={classes.progress} size={50} />
          }
          {
            strangers.length > 0 && strangers.map(person =>
              <Grid key={`${person.first_name} ${person.last_name}`} item xs={12} sm={6} md={3} lg={3}>
                <Card person={person} />
              </Grid>
            )
          }
        </Grid>
      </div>
    )
  }
}

Strangers.propTypes = {
  classes: PropTypes.object.isRequired,
}

const mapDispatchToProps = {
  fetchStrangers: actions.fetchStrangers,
  setEmpty: actions.setEmpty
}

const mapStateToProps = (state) => ({
  strangers: state.strangers.list
})

const enhancedWithStyles = withStyles(styles)(Strangers)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(enhancedWithStyles)