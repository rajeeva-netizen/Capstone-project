import React, {useEffect, useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Jobs from './jobs'
import Categories from './categories'
import axios from 'axios'

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));

 
const List=()=>{
    const classes = useStyles();
    return(
    <div className={classes.root}>
      <Grid container spacing={3} style={{marginTop:'50px'}}>
        
        <Grid item xs={3}>
          <Paper className={classes.paper}><Categories/></Paper>
        </Grid>
        <Grid item xs={9}>
          <Paper className={classes.paper}><Jobs/></Paper>
        </Grid>
       
      </Grid>
    </div>
    )
}

export default List