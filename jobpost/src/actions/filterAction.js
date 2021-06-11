import {CATEGORY, BOOL} from './type'

export const filterCat=(text)=>{
    console.log(text)
    return(dispatch)=>{
        dispatch({
            type:CATEGORY,
            payload:text
        })
    }
}

export const filterBool=(val)=>{
    console.log('action', val)
    return(dispatch)=>{
        dispatch({
            type: BOOL,
            payload:val
        })
    }
}