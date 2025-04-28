import React from 'react';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import './index.css';
import useTodos from './hooks/useTodos';

function App() {
  const { todos, addTodo, toggleTodo } = useTodos();

  const handleAddTodo = (todo) => {
    addTodo(todo);
  };

  return (
    <div className="app-container">
      <h1>Todo App</h1>
      <AddTodo onAddTodo={handleAddTodo} />
      <TodoList todos={todos} onToggleComplete={toggleTodo} />
    </div>
  );
}

export default App;
