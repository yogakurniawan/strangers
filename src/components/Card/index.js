import React from 'react'
import PropTypes from 'prop-types'
import Paper from '@material-ui/core/Paper'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'

const styles = theme => ({
  avatar: {
    width: 60,
    height: 60,
  },
  paper: {
    margin: theme.spacing.unit,
    padding: theme.spacing.unit * 2,
  }
})

function Card(props) {
  const { classes, person } = props

  return (
    <Paper className={classes.paper}>
      <Grid container wrap="nowrap" spacing={16}>
        <Grid item>
          <Avatar alt={`${person.first_name} ${person.last_name}`} src={person.avatar} className={classes.avatar} />
        </Grid>
        <Grid item xs zeroMinWidth>
          <Typography variant="title" noWrap>{`${person.first_name} ${person.last_name}`}</Typography>
        </Grid>
      </Grid>
    </Paper>
  )
}

Card.propTypes = {
  classes: PropTypes.object.isRequired,
  person: PropTypes.object.isRequired
}

export default withStyles(styles)(Card)