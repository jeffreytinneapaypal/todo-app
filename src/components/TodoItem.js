import React from 'react';

function TodoItem({ todo, onToggleComplete }) {
  const handleCheckboxChange = () => {
    onToggleComplete(todo.id, !todo.isCompleted);
  };

  return (
    <>
      <input
        type="checkbox"
        checked={todo.isCompleted}
        onChange={handleCheckboxChange}
      />
      <span style={{ textDecoration: todo.isCompleted ? 'line-through' : 'none' }}>
        {todo.text}
      </span>
    </>
  );
}

export default TodoItem;
