import React from 'react';
import TodoItem from './TodoItem';
import { FaExclamation, FaLaptop, FaUser } from 'react-icons/fa'; // Import icons

function TodoList({ todos, onToggleComplete }) {
  // Separate todos into "important", "completed", and "other"
  const importantTodos = todos.filter(
    (todo) => todo.style === 'important' && !todo.isCompleted
  );
  const completedTodos = todos.filter((todo) => todo.isCompleted);
  const otherTodos = todos.filter(
    (todo) => todo.style !== 'important' && !todo.isCompleted
  );

  // Sort "other" todos by id (you can change this logic if needed)
  otherTodos.sort((a, b) => a.id - b.id);

  // Combine the arrays, with "important" todos first, then "other", then "completed"
  const sortedTodos = [...importantTodos, ...otherTodos, ...completedTodos];

  const getIconForStyle = (style) => {
    switch (style) {
      case 'important':
        return <FaExclamation />;
      case 'work':
        return <FaLaptop />;
      case 'personal':
        return <FaUser />;
      default:
        return null; // No icon for other styles
    }
  };

  return (
    <ul className="todo-list">
      {sortedTodos.map((todo) => (
        <li key={todo.id} className="todo-item">
          {getIconForStyle(todo.style)}
          <TodoItem todo={todo} onToggleComplete={onToggleComplete} />
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
