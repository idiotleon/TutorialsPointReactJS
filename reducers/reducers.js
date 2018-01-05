// Actions are JavaScript objects that use type property to inform about the data 
// that should be sent to the store

// To define ADD_TODO action that will be used for adding new item to our list
export const ADD_TODO = 'ADD_TODO';

let nextToDoId = 0;

// The addToDo function is an action creator that returns our action and
// sets an Id for every created item
export function addToDo(text){
    return {
        type: ADD_TODO,
        id: nextToDoId++,
        text
    };
}