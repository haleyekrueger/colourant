import React from 'react';

const StartButton = () => {
    const handleClick = () => {
        alert('The button was clicked!');
      };
    return (
        <button onClick={handleClick} class="btn"><span class="material-symbols-sharp">
        double_arrow
        </span>
        </button>
    )
}

export default StartButton;