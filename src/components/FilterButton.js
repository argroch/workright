import React from 'react';

function FilterButton(props) {
  return (
    <button
      type='button' 
      className='btn toggle-btn' 
      aria-pressed={props.isPressed} 
      onClick={() => props.setFilter(props.name)}
    >
      <span className="invisible">Show </span>
      <span>{props.name}</span>
      <span className="invisible"> tasks</span>
    </button>
  );
}

export default FilterButton;