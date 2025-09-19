import React, { useEffect, useReducer } from 'react'
import { todoReducer } from '../08-useReducer/todoReducer';


const initialState = [];

const init = () => {
     return JSON.parse(localStorage.getItem('todos')) || initialState;
};

const useTodo = () => {
    const [ todos, dispatch ] = useReducer( todoReducer, initialState, init );

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    },[todos]);

    const handleNewTodo = ( todo ) => {
        dispatch({
            type: '[TODO] Add Todo',
            payload: todo,
        });
    }

    const handleDeleteTodo = ( todoId ) => {
        dispatch({
            type: '[TODO] Remove Todo',
            payload: todoId,
        });

    }
    const handleToggleTodo = ( todoId ) => {
        // Toggle logic can be implemented here
        dispatch({
            type: '[TODO] Toggle Todo',
            payload: todoId,
        });


    }

    return {
        todos,
        todosCount: todos.length,
        pendingTodosCount: todos.filter(todo => !todo.done).length,
        handleDeleteTodo,
        handleToggleTodo,
        handleNewTodo,
    }
}

export default useTodo
