import React from 'react';

const StartButton = () => {
    const handleClick = () => {
        const forms = document.querySelectorAll('form');

        forms.forEach(form => form.submit());
      };
    return (
        <button onClick={handleClick} class="btn"><span class="material-symbols-sharp">
        double_arrow
        </span>
        </button>
    )
}

export default StartButton;