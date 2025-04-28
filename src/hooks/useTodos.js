import { useState, useEffect } from 'react';
import { getTodos, updateTodo, createTodo } from '../api/todos'; // Import createTodo

function useTodos() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      const data = await getTodos();
      setTodos(data);
    };
    fetchTodos();
  }, []);

  const toggleTodo = async (id, isCompleted) => {
    const updatedTodo = await updateTodo(id, { isCompleted }); // Call updateTodo in the API
    if (updatedTodo) {
        setTodos(todos.map((todo) =>
        todo.id === id ? { ...todo, isCompleted } : todo
      ));
    }
  };

  const addTodo = async (todo) => {
    const newTodo = await createTodo(todo);
    if (newTodo) {
      setTodos([...todos, newTodo]);
    }
  };

  return { todos, toggleTodo, addTodo }; // Return addTodo
}

export default useTodos;
