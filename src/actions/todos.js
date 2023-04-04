
import axios from "axios";

const baseURL = 'http://localhost:3001';
const todoUrl = baseURL + '/todos';

export const getTodos = () => {
    return axios.get(todoUrl)
        .then(res => res.data)
        .catch(err => console.log(err))
}

export const postTodo = (description) => {
    const todo = {
        description: description,
        isDone: false
    }
    return axios.post(todoUrl, todo).then(res => res.data)
}

export const putTodo = (todo) => {
    return axios.put(`${todoUrl}/${todo.id}`, todo);
}

export const deleteTodo = (id) => {
    return axios.delete(`${todoUrl}/${id}`)
}