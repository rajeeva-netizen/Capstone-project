import axios from 'axios'
import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux'
import {filterCat} from '../actions/filterAction'

const Jobs=(props)=>{
const [data, setData]=useState('')
  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/todos/')
    // axios.get('http://localhost:4000/jobProvider')
    .then((res)=>{
      console.log(res.data)
      setData(res.data)
    }).catch((err)=>{
      console.log(err)
    })
  }, []) 
  console.log(data)
 console.log(props.text)
  console.log('jobs', props.val)

 function Display(){
   return props.val?
    data.filter((item)=>item.id==props.text)
    .map((x)=>
      <li>{x.title}</li>
    ):data.length ? data.map(item =>
        <li>{item.title}</li>
      ):null
 }
    return(
        <>
            {Display()}  
        </>
    )
}
const mapStateToProps=state=>({
  text:state.list,
  val:state.data
  
})

export default connect (mapStateToProps)(Jobs)