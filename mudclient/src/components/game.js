import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  root: {
    flexGrow: 1,
    margin: '50px 50px 0'
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary
  },
});

class Game extends Component {
  componentDidMount(){
    //check if user in localstorage, if so, load everything up
    //if not redirect to login
  }
  
  render(){
    const { root, paper } = this.props.classes;
    return(
      <div className={root}>
      <Grid container spacing={24}>
      <Grid item xs={6}><Paper className={paper} /></Grid>
      <Grid item xs={6}><Paper className={paper} /></Grid>
      <Grid item xs={12}><Paper className={paper} /></Grid>
      </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(Game);
