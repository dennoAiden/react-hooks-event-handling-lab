// Code EyesOnMe Component Here

import React from 'react';

function EyesOnMe() {
  // Event handler for focus event
  const handleFocus = () => {
    console.log('Good!');
  };

  // Event handler for blur event
  const handleBlur = () => {
    console.log('Hey! Eyes on me!');
  };

  return (
    <button 
      onFocus={handleFocus} 
      onBlur={handleBlur}
    >
      Eyes on me
    </button>
  );
}

export default EyesOnMe;

