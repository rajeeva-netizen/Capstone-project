import {CATEGORY, BOOL} from '../actions/type'

const initialState={
    list:[],
    text:'',
    data:''
}

const reducer=(state=initialState,action)=>{
    switch(action.type){
        case CATEGORY:
        return{
            ...state, 
            list:action.payload
        }

        case BOOL:
            return{
                ...state,
                data:action.payload
            }
        default:
            return state
    }
}

export default reducer