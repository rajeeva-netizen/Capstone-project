import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
// import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';
import {connect} from 'react-redux'
import {filterCat, filterBool} from '../actions/filterAction'

   const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    formControl: {
      margin: theme.spacing(3),
    },
  }));

const Categories=({filterCat, filterBool})=>{
  const classes = useStyles();
  const [checkOne, setCheckOne]=useState(false)
  const [checkTwo, setCheckTwo]=useState(false)
  const [checkThree, setCheckThree]=useState(false)


  const handleChange1 = (e) => {
    console.log(e.target.name)
    filterCat(e.target.name)
    setCheckOne(!checkOne)
    console.log('one', checkOne)
    filterBool(checkOne)
};

const handleChange2 = (e) => {
  console.log(e.target.name)
  filterCat(e.target.name)
  setCheckTwo(!checkTwo)
  filterBool(checkTwo)
};

const handleChange3 = (e) => {
  console.log(e.target.name)
  filterCat(e.target.name)
  setCheckThree(!checkThree)
  filterBool(checkThree)
};

  
    return(
      <div className={classes.root}>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">Categories</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox onChange={handleChange1} name="1" />}
            label="1" checked={checkOne}
          />
          <FormControlLabel
            control={<Checkbox  onChange={handleChange2} name="2" />}
            label="2" checked={checkTwo}
          />
          <FormControlLabel
            control={<Checkbox  onChange={handleChange3} name="3" />}
            label="3" checked={checkThree}
          />
        </FormGroup>
      </FormControl>
     
    </div>
    )
}

// const mapStateToProps=state=>({
//   data:state.list.data
// })
export default connect(null, {filterCat, filterBool})(Categories)