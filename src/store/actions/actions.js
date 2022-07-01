export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_TODO = 'ADD_TOGGLE'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

let nextTodoId = 0

export const addTodo = text => {
    return {
        type: ADD_TODO,
        payload: {
            id: nextTodoId ++,
            text
        }
    }
}

export const toggleTodo = id => {
    return {
        type: TOGGLE_TODO,
        payload: {
            id
        }
    }
}

export const setVisibilityFilter = filter => {
    return {
        type: SET_VISIBILITY_FILTER,
        payload: {
            filter
        }
    }
}