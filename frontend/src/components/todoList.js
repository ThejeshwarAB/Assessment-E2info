import { useEffect, useState } from "react";

const TodoList = () => {
    const [todos, setTodos] = useState([])

    // gets all todos from api
    useEffect(() => {
        const fetchTodos = async () => {
            const response = await fetch('/todos')
            const data = await response.json()

            if (response.ok) {
                console.log(data)
                setTodos(data)
            }
            // console.log(response)
        }
        fetchTodos()
    }, [setTodos])

    // deletes selected record 
    const handleDelete = async (id) => {
        const response = await fetch('/todos/' + id, {
            method: 'DELETE',
            headers: {
                "Content-type": "application/json"
            }
        })
        const data = await response.json()
        if (response.ok)
            console.log(data)
        alert("record deleted!")
        window.location.reload();
    }

    return (
        <div>
            <h3>Your todo list</h3>
            <ul>
                {todos && todos.map((todo) => {
                    return (
                        <li key={todo._id}>
                            <div className="todo-list">
                                <h6>title: <span>{todo.title}</span></h6>
                                <h6>status: <span>{todo.status}</span></h6>
                                <button className="btn btn-danger" onClick={() => handleDelete(todo._id)}>delete</button>
                            </div>
                        </li>)
                })}
                {!todos && (
                <p>no todos!</p>
                )}
            </ul>
        </div>
    );
}

export default TodoList;