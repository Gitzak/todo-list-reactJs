import React, { useState } from "react";

const AddTodo = ({ todos, setTodos }) => {
    const [newTodo, setNewTodo] = useState("");
    const addTodo = (text) => {
        setTodos([...todos, { id: Date.now(), text }]);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (newTodo.trim() !== "") {
            addTodo(newTodo);
            setNewTodo("");
        }
    };

    return (
        <form className="add text-center my-4" onSubmit={handleSubmit}>
            <label htmlFor="add" className="add text-light">
                Add a new todo
            </label>
            <input type="text" className="form-control m-auto" name="add" id="add" placeholder="Add new task" autoFocus value={newTodo} onChange={(e) => setNewTodo(e.target.value)} />
        </form>
    );
};

export default AddTodo;
