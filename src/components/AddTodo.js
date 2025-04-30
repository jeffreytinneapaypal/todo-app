import React, { useState } from 'react';

function AddTodo({ onAddTodo }) {
  const [text, setText] = useState('');
  const [style, setStyle] = useState('personal'); // Default style

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleStyleChange = (event) => {
    setStyle(event.target.value);
  };

  const handleAddTodo = () => {
    if (text.trim() !== '') {
      onAddTodo({ text, style, isCompleted: false });
      setText(''); // Clear the input field
    }
  };

  return (
    <div className="add-todo">
      <input
        type="text"
        placeholder="Add a todo"
        value={text}
        onChange={handleTextChange}
      />
      <select value={style} onChange={handleStyleChange}>
        <option value="personal">Personal</option>
        <option value="work">Work</option>
        <option value="important">Important</option>
      </select>
      <button onClick={handleAddTodo}>Add</button>
    </div>
  );
}

export default AddTodo;
