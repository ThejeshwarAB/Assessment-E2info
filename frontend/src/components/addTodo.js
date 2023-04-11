import { useState } from "react"

const AddTodo = () => {

    const [title, setTitle] = useState('')
    const [status, setStatus] = useState('todo')

    const handleChangeTitle = (e) => {
        setTitle(e.target.value)
    }

    const handleChangeStatus = (e) => {
        setStatus(e.target.value)
    }

    const handleAdd = async () => {
        if (title !== '' && status !== '') {
            const response = await fetch('/todos/', {
                method: 'POST',
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({ "title": title, "status": status })
            })
            const data = await response.json()
            if (response.ok)
                console.log(data)
            alert("record added!")
            window.location.reload();
        }
        else {
            alert('please re-enter values');
        }
    }

    return (
        <div>
            <h3>Add new todo</h3>
            <div className="container">
                <div style={{ color: "red" }} className="form-inputs">
                    <div className="row d-flex justify-content-center">
                        <div className="col-4">
                            <p>Enter todo title:</p>
                            <input type="text" className="form-control" onChange={(e) => handleChangeTitle(e)} />
                        </div>
                    </div>
                    <br />
                    <div className="row d-flex justify-content-center">
                        <div className="col-4">
                            <p>Choose status:</p>
                            <select className="form-select" onChange={(e) => handleChangeStatus(e)}>
                                <option value={"todo"} selected>todo</option>
                                <option value={"pending"}>pending</option>
                                <option value={"completed"}>completed</option>
                            </select>
                        </div>
                    </div>
                    <br />
                    <div className="row d-flex justify-content-center">
                        <div className="col-4">
                            <button className="btn btn-secondary" onClick={handleAdd}>add todo</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddTodo;