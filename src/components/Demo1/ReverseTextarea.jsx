import React, { useState } from 'react';
 
const ReverseTextarea = () => {
  const [text, setText] = useState('');

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const reverseText = (text) => {
    return text.split('').reverse().join('');
  };

  return (
    <div style={{ padding: '20px' }}>
      <textarea
        rows="10"
        cols="30"
        value={text}
        onChange={handleChange}
        placeholder="Type something..."
      />
      <h3>Reversed Text:</h3>
      <div style={{ border: '1px solid #ccc', padding: '10px', minHeight: '50px' }}>
        {reverseText(text)}
      </div>
    </div>
  );
};

export default ReverseTextarea;