// While actions only trigger changes in the app, the reducers specify those changes

import { combineReducers } from 'redux'
import { ADD_TODO } from '../actions/actions'

// The first function will be used to create a new item
function ToDo(state, action){
    switch(action.type){
        case ADD_TODO:
            return{
                id: action.id,
                text: action.text,
            }
        default:
            return state
    }
}

// The second function will push that item to the list
function ToDos(state = [], action){
    switch(action.type){
        case ADD_TODO:
        return[
            ...state,
            todo(undefined, action)
        ]
        default:
            return state
    }
}

const toDoApp = combineReducers({
    toDos
})

export default toDoApp