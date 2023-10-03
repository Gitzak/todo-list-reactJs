import React, { useState, useEffect } from "react";

const Todos = ({ todos, searchQuery, setTodos }) => {
    const [editedText, setEditedText] = useState("");
    const [editingTodoId, setEditingTodoId] = useState(null);

    useEffect(() => {
        const editedTodo = todos.find((todo) => todo.id === editingTodoId);
        if (editedTodo) {
            setEditedText(editedTodo.text);
        } else {
            setEditedText("");
        }
    }, [editingTodoId, todos]);

    const handleEditChange = (e) => {
        setEditedText(e.target.value);
    };

    const handleSaveClick = (id) => {
        if (editedText.trim() !== "") {
            saveEditedTodo(id, editedText);
            setEditedText("");
        }
    };

    const filteredTodos = todos.filter((todo) => todo.text.toLowerCase().includes(searchQuery.toLowerCase()));

    const deleteTodo = (id) => {
        const updatedTodos = todos.filter((todo) => todo.id !== id);
        localStorage.setItem("todos", JSON.stringify(updatedTodos));
        setTodos(updatedTodos);
    };

    const editTodo = (id) => {
        setEditingTodoId(id);
    };

    const saveEditedTodo = (id, newText) => {
        const updatedTodos = todos.map((todo) => (todo.id === id ? { ...todo, text: newText } : todo));
        setTodos(updatedTodos);
        setEditingTodoId(null);
    };

    return (
        <ul className="list-group todos mx-auto text-light">
            {filteredTodos.map((todo) => (
                <li key={todo.id} className="list-group-item d-flex justify-content-between align-items-center">
                    {editingTodoId === todo.id ? (
                        <>
                            <input
                                type="text"
                                className="form-control me-2"
                                value={editedText}
                                onChange={handleEditChange}
                                onKeyDown={(e) => {
                                    if (e.key === "Enter") {
                                        handleSaveClick(todo.id);
                                    }
                                }}
                            />
                        </>
                    ) : (
                        <>
                            <span>{todo.text}</span>
                            <div>
                                <i className="fa-solid fa-pen-nib text-info edit me-3" onClick={() => editTodo(todo.id)}></i>
                                <i className="far fa-trash-alt text-dark delete" onClick={() => deleteTodo(todo.id)}></i>
                            </div>
                        </>
                    )}
                </li>
            ))}
        </ul>
    );
};

export default Todos;
